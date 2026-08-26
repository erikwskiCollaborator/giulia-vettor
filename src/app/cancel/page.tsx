"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function CancelContent() {
  const searchParams = useSearchParams();
  const fallbackUrl = searchParams.get("fallbackUrl");

  const homeUrl = fallbackUrl || "/";

  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 py-24">
      <div className="max-w-xl text-center">
        <div className="mx-auto mb-6 flex justify-center">
          <Image
            src="/images/failed.jpg"
            alt="Pagamento annullato"
            width={300}
            height={150}
            className="object-contain rounded-sm"
            priority
          />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Pagamento annullato
        </h1>
        <p className="mt-4 text-gray-600">
          Nessun addebito è stato effettuato. Puoi riprovare quando vuoi.
        </p>
        <div className="mt-8">
          <a
            className="inline-flex rounded-md bg-black px-6 py-3 text-white hover:bg-gray-800"
            href={homeUrl}
          >
            {fallbackUrl ? "Torna al sito" : "Torna alla home"}
          </a>
        </div>
      </div>
    </main>
  );
}

export default function CancelPage() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center bg-white">
          <p className="text-gray-600">Caricamento...</p>
        </main>
      }
    >
      <CancelContent />
    </Suspense>
  );
}
