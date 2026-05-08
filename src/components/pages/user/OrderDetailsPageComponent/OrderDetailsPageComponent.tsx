'use client';
import Loading from '@/components/ui/Loading/Loading';
import { useGetSingleOrderQuery } from '@/redux/features/user-dashboard/user-dashboard.api';
import React from 'react';

const OrderDetailsPageComponent = ({ id }: { id: string }) => {
  const {
    data: response,
    isLoading,
    isFetching,
  } = useGetSingleOrderQuery(id, { skip: !id });

  const orderData = response?.data;

  if (isLoading || isFetching) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen w-full py-6 px-3">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        Order Details
      </h1>
      <div className="bg-white rounded-lg">
        <div className="max-w-4xl p-3 md:p-6">
          <div className="mb-6">
            <h2 className="text-lg font-medium text-gray-800">
              {orderData?.serviceName}
            </h2>
            <p className="text-sm text-gray-500">
              {orderData?.package?.packageType}
            </p>
          </div>
          <div className="rounded-lg shadow-sm p-3 md:p-6 mb-6 border border-gray-300">
            <div className="mb-6">
              <h3 className="text-xl font-medium text-gray-700 mb-3">
                Plan Basis
              </h3>

              <div className="border rounded-md border-gray-200">
                {orderData?.package?.serviceDetails?.map((s: string) => (
                  <div
                    key={s}
                    className="grid grid-cols-2 ps-3 py-3 border-b border-gray-200"
                  >
                    <div className="text-gray-800">{s}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Server Name <span className="text-red-500">*</span>
              </label>
              <div className="bg-gray-100 p-3 rounded-md border border-gray-200 mb-4">
                <span className="text-gray-700">
                  {orderData?.package?.serviceName}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-medium text-center text-primary mb-4">
              Order Summary
            </h3>
            <div className="space-y-2 divide-y divide-gray-200">
              <div className="grid grid-cols-2 py-2">
                <div className="text-gray-600">Product</div>
                <div className="text-gray-800">
                  {orderData?.package?.serviceName}
                </div>
              </div>
              <div className="grid grid-cols-2 py-2">
                <div className="text-gray-600">Billing Cycle</div>
                <div className="text-gray-800">Monthly</div>
              </div>
              <div className="grid grid-cols-2 py-2">
                <div className="text-gray-600">Monthly Price</div>
                <div className="text-gray-800">
                  ${orderData?.package?.perMonthPrice}
                </div>
              </div>
              <div className="grid grid-cols-2 py-2">
                <div className="text-gray-600">Plan setup Fee</div>
                <div className="text-gray-800">$0.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsPageComponent;
