import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { packagesById } from '@/lib/packages';

const stripePriceId = process.env.STRIPE_PRICE_ID;

export async function POST(request: Request) {
  try {
    const origin = request.headers.get('origin') || request.headers.get('x-forwarded-host') || '';
    const proto = request.headers.get('x-forwarded-proto') || 'https';

    const baseUrl = origin.includes('http') ? origin : `${proto}://${origin}`;

    const body = (await request.json().catch(() => ({} as Record<string, unknown>))) as {
      priceId?: string;
      quantity?: number;
      packageId?: string;
      customer?: {
        name?: string;
        email?: string;
      };
      preferences?: Record<string, boolean>;
      notes?: string;
    };

    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeSecretKey) {
      return NextResponse.json(
        { error: 'Missing STRIPE_SECRET_KEY. Add it to your environment.' },
        { status: 500 }
      );
    }
    const stripe = new Stripe(stripeSecretKey);

    const metadata: Record<string, string> = {};
    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [];
    let customerEmail: string | undefined;

    const packageId = typeof body.packageId === 'string' ? body.packageId : undefined;
    if (packageId) {
      const selectedPackage = packagesById[packageId];
      if (!selectedPackage) {
        return NextResponse.json(
          { error: 'Pacchetto selezionato non valido.' },
          { status: 400 }
        );
      }

      lineItems.push({
        price_data: {
          currency: 'eur',
          unit_amount: Math.round(selectedPackage.price * 100),
          product_data: {
            name: `${selectedPackage.name} - ${selectedPackage.subtitle}`,
          },
        },
        quantity: 1,
      });

      metadata.packageId = selectedPackage.id;
      metadata.packageLabel = `${selectedPackage.name} ${selectedPackage.subtitle}`;

      if (body.customer?.name) {
        metadata.customerName = body.customer.name;
      }

      if (body.preferences && typeof body.preferences === 'object') {
        Object.entries(body.preferences).forEach(([key, value]) => {
          metadata[`pref_${key}`] = value ? 'true' : 'false';
        });
      }

      if (body.notes) {
        metadata.notes = body.notes.slice(0, 500);
      }

      const email = body.customer?.email?.trim();
      if (email) {
        customerEmail = email;
      }
    }

    if (lineItems.length === 0) {
      const priceId: string | undefined = body?.priceId || stripePriceId;
      const quantity: number = Math.max(1, Number(body?.quantity) || 1);

      if (!priceId) {
        return NextResponse.json(
          { error: 'Missing priceId. Set STRIPE_PRICE_ID or send { priceId }.' },
          { status: 400 }
        );
      }

      lineItems.push({
        price: priceId,
        quantity,
      });
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: lineItems,
      customer_email: customerEmail,
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/cancel`,
      allow_promotion_codes: true,
      shipping_address_collection: { allowed_countries: ['IT', 'US', 'GB', 'FR', 'DE', 'ES'] },
      metadata: Object.keys(metadata).length ? metadata : undefined,
    });

    return NextResponse.json({ id: session.id, url: session.url });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}


