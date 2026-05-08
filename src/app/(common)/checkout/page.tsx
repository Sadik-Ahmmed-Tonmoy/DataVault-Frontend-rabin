'use client';
import { useRouter, useSearchParams } from 'next/navigation';
import CheckoutPageComponent from '@/components/pages/common/CheckoutPageComponent/CheckoutPageComponent';
import DashboardWrapper from '@/role-wrappers/DashboardWrapper';

const CheckoutPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const packageId = searchParams.get('packageId');

  if (!packageId) {
    router.back();
  }

  return (
    <DashboardWrapper redirect={`/checkout?packageId=${packageId}`}>
      <CheckoutPageComponent />
    </DashboardWrapper>
  );
};

export default CheckoutPage;
