import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    getFeaturedRestaurant: builder.query<Restaurant[], void>({
      query: () => 'restaurantes'
    }),
    getMenu: builder.query<Restaurant, string>({
      query: (id) => `restaurantes/${id}`
    }),
    purchase: builder.mutation<any, PurchasePayload>({
      query: () => 'checkout'
    })
  })
})

export const {
  useGetFeaturedRestaurantQuery,
  useGetMenuQuery,
  usePurchaseMutation
} = api

export default api
