Static landing with Stripe payments (Next.js 14 + App Router + Tailwind).

## Getting Started

1. Copy environment variables

```bash
cp .env.local.example .env.local
```

Fill values from your Stripe dashboard:
- STRIPE_SECRET_KEY
- NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY (optional for this redirect flow)
- STRIPE_PRICE_ID (a Price ID for your product)

2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the landing. Click "Acquista il prodotto" to start the checkout.

3. Production build

```bash
npm run build && npm run start
```

## Security notes
- Never expose STRIPE_SECRET_KEY in the browser. The API route in `src/app/api/checkout/route.ts` runs server-side.
- For static export, this project uses a serverless API route; deploy on platforms that support Node/Edge functions.
