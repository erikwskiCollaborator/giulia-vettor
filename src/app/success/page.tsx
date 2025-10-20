export default function SuccessPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 py-24">
      <div className="max-w-xl text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Pagamento riuscito
        </h1>
        <p className="mt-4 text-gray-600">
          Grazie per il tuo acquisto. Riceverai una conferma via email a breve.
        </p>
        <div className="mt-8">
          <a
            className="inline-flex rounded-md bg-black px-6 py-3 text-white hover:bg-gray-800"
            href="/"
          >
            Torna alla home
          </a>
        </div>
      </div>
    </main>
  );
}


