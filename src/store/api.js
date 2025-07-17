import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const formApi = createApi({
  reducerPath: 'form',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000',
  }),
  endpoints: (builder) => ({
    sendReview: builder.mutation({
      query: (credential) => ({
        url: '/message',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: credential,
      }),
    }),
  }),
});

export const { useSendReviewMutation } = formApi;
    