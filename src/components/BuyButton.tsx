'use client';

import { useState } from 'react';

type BuyButtonProps = {
  priceId?: string;
  quantity?: number;
  label?: string;
};

export default function BuyButton({ priceId, quantity = 1, label = 'Acquista ora' }: BuyButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleClick = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId, quantity }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error || 'Errore sconosciuto');
      }
      if (data?.url) {
        window.location.href = data.url as string;
      } else {
        throw new Error('Risposta non valida dal server');
      }
    } catch (e) {
      const message = e instanceof Error ? e.message : 'Impossibile avviare il checkout';
      setError(message);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        type="button"
        onClick={handleClick}
        disabled={loading}
        className="inline-flex items-center justify-center rounded-md bg-black px-6 py-3 text-white hover:bg-gray-800 disabled:opacity-60"
      >
        {loading ? 'Reindirizzamento…' : label}
      </button>
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}


