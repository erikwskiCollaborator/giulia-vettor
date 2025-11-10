'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import CheckoutForm from '@/components/CheckoutForm';

function CheckoutContent() {
  const searchParams = useSearchParams();
  const packageId = searchParams.get('packageId');

  return <CheckoutForm preselectedPackageId={packageId} />;
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Caricamento...</p>
        </div>
      </div>
    }>
      <CheckoutContent />
    </Suspense>
  );
}

