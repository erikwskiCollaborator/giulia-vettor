import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripePriceId = process.env.STRIPE_PRICE_ID;

if (!stripeSecretKey) {
  throw new Error('Missing STRIPE_SECRET_KEY environment variable');
}

const stripe = new Stripe(stripeSecretKey, { apiVersion: '2024-06-20' });

export async function POST(request: Request) {
  try {
    const origin = request.headers.get('origin') || request.headers.get('x-forwarded-host') || '';
    const proto = request.headers.get('x-forwarded-proto') || 'https';

    const baseUrl = origin.includes('http') ? origin : `${proto}://${origin}`;

    const body = await request.json().catch(() => ({} as any));
    const priceId: string | undefined = body?.priceId || stripePriceId;
    const quantity: number = Math.max(1, Number(body?.quantity) || 1);

    if (!priceId) {
      return NextResponse.json(
        { error: 'Missing priceId. Set STRIPE_PRICE_ID or send { priceId }.' },
        { status: 400 }
      );
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        {
          price: priceId,
          quantity,
        },
      ],
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/cancel`,
      allow_promotion_codes: true,
      shipping_address_collection: { allowed_countries: ['IT', 'US', 'GB', 'FR', 'DE', 'ES'] },
    });

    return NextResponse.json({ id: session.id, url: session.url });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}


