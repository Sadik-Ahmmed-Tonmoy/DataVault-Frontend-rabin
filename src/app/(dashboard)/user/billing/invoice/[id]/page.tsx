import InvoicePageComponent from '@/components/pages/user/InvoicePageComponent/InvoicePageComponent';
import WithAuth from '@/role-wrappers/WithAuth';
import React from 'react';

const InvoicePage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return (
    <WithAuth>
      <InvoicePageComponent id={id} />
    </WithAuth>
  );
};

export default InvoicePage;
