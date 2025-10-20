import BuyButton from "@/components/BuyButton";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 py-24">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Landing statica con pagamenti Stripe
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Un semplice prodotto di esempio per dimostrare un flusso di checkout
          con Stripe Checkout.
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <BuyButton label="Acquista il prodotto" />
          <a href="#dettagli" className="text-sm font-semibold leading-6 text-gray-900">
            Scopri di più →
          </a>
        </div>

        <div id="dettagli" className="mt-16 rounded-2xl border p-8 text-left">
          <h2 className="text-xl font-semibold text-gray-900">Dettagli prodotto</h2>
          <ul className="mt-4 list-disc pl-6 text-gray-700">
            <li>Prodotto digitale dimostrativo</li>
            <li>Pagamento sicuro con Stripe</li>
            <li>Ricevi una email di conferma</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
