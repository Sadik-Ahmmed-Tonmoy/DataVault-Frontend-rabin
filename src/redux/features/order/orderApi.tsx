/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllOrders: builder.query({
      query: (data) => {
        const params = new URLSearchParams();
        if (data) {
          data?.forEach((item: any) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: `order`,
          method: "GET",
          params: params,
        };
      },
      providesTags: ["order"],
    }),
    getSingleOrder: builder.query({
      query: (id) => ({
        url: `order/details-order/${id}`,
        method: "GET",
      }),
      providesTags: ["order"],
    }),

    // createExample: builder.mutation({
    //   query: (data) => {
    //     return {
    //       url: "example",
    //       method: "POST",
    //       body: data,
    //     };
    //   },
    //   invalidatesTags: ["example"],
    // }),

    confirmOrder: builder.mutation({
      query: (data) => {
        return {
          url: `order/confirm-order/${data?.id}`,
          method: "POST",
          body: data?.formData,
        };
      },
      invalidatesTags: ["order"],
    }),
    updateStatus: builder.mutation({
      query: (id) => {
        return {
          url: `order/update-order-status/${id}`,
          method: "PATCH",
          body: {
            "status": "Pending"
        },
        };
      },
      invalidatesTags: ["order"],
    }),
    // deleteExample: builder.mutation({
    //   query: (id) => {
    //     return {
    //       url: `example/${id}`,
    //       method: "DELETE",
    //     };
    //   },
    //   invalidatesTags: ["example"],
    // }),
  }),
});

export const {
    useGetAllOrdersQuery,
    useGetSingleOrderQuery,
    useConfirmOrderMutation,
    useUpdateStatusMutation
} = orderApi;
