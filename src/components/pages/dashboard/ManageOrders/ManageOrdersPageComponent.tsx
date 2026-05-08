"use client";
import { Check, X } from "lucide-react";
import ServerOrderModal from "@/components/pages/dashboard/ManageOrders/server-order-modal";
import { useEffect, useState } from "react";
import { Pagination } from "antd";
import {
  useGetAllOrdersQuery,
  useUpdateStatusMutation,
} from "@/redux/features/order/orderApi";
import moment from "moment";
import { IoClose } from "react-icons/io5";
import { FaRegWindowClose } from "react-icons/fa";
import Swal from "sweetalert2";
import { handleAsyncWithToast } from "@/utils/handleAsyncWithToast";
import { useSearchParams } from "next/navigation";

// Sample data for invoices

export default function ManageOrdersPageComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const searchParams = useSearchParams();
  const [selectedService, setSelectedService] = useState<any>(null);
  const id = searchParams.get("id");

  useEffect(() => {
    if (id) {
      setSelectedService({ id });
      setIsModalOpen(true);
    }
  }, [id]);

  const openModal = (service: any) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(7);

  const handlePaginationChange = (page: number, pageSize: number) => {
    setPage(page);
    setPageSize(pageSize);
  };

  const [objectQuery, setObjectQuery] = useState<
    { name: string; value: any }[]
  >([
    { name: "page", value: page },
    { name: "limit", value: pageSize },
  ]);

  useEffect(() => {
    setObjectQuery([
      { name: "page", value: page },
      { name: "limit", value: pageSize },
    ]);
  }, [page, pageSize]);

  const { data: getAllOrdersQuery } = useGetAllOrdersQuery(objectQuery);
  const [updateStatusMutation] = useUpdateStatusMutation();

  const handleCancel = async (id: string) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      // text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, Cancel it!",
    });

    if (result.isConfirmed) {
      const response = await handleAsyncWithToast(async () => {
        return updateStatusMutation(id);
      });

      if (response?.data?.success) {
        setPage(1);
      }
    }
  };

  return (
    <main className="flex-1 overflow-y-auto p-4 ">
      <h1 className="text-2xl font-bold mb-6">Manage Order</h1>
      {/* Server Order Modal */}
      <ServerOrderModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          const params = new URLSearchParams(searchParams.toString());
          params.delete("id");
          const newUrl = `${window.location.pathname}?${params.toString()}`;
          window.history.replaceState(null, "", newUrl);
        }}
        id={selectedService?.id}
      />
      {/* Invoices */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-blue-600">Invoices</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                  Invoice ID
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                  Total Price
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                  Invoice Date
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {getAllOrdersQuery?.data?.data?.map(
                (invoice: any, index: number) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">
                      {invoice.orderId}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span
                        className={`${
                          invoice.status === "Running"
                            ? "text-green-500"
                            : "text-orange-500"
                        } font-medium`}
                      >
                        {invoice.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-text-primary">
                      ${invoice.amount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {moment(invoice.createdAt).format("YYYY-MM-DD")}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap  text-sm">
                      {invoice.status === "Running" ? (
                        <button
                          onClick={() => handleCancel(invoice.id)}
                          className="px-4 py-1 bg-red-600 text-white text-xs font-medium rounded hover:bg-red-700 transition-colors"
                        >
                          Cancel
                        </button>
                      ) : (
                        <button
                          onClick={() => openModal(invoice)}
                          className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded hover:bg-blue-700 transition-colors"
                        >
                          Manage
                        </button>
                      )}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
          <div className="flex justify-center my-4">
            <Pagination
              current={page}
              pageSize={pageSize}
              total={getAllOrdersQuery?.data?.meta?.total}
              onChange={handlePaginationChange}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
