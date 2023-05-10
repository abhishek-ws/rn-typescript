// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { EmojisResponse, TransformedEmojisResponse } from "../types/emoji";

// Define a service using a base URL and expected endpoints
export const githubApi = createApi({
  reducerPath: "githubApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com" }),
  endpoints: (builder) => ({
    getEmojis: builder.query<TransformedEmojisResponse, void>({
      query: () => `emojis`,
      transformResponse: (response: EmojisResponse, meta, arg) => {
        console.log({ response });
        return Object.entries(response).map(([key, value]) => ({
          value: key,
          uri: value,
        }));
      },
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetEmojisQuery } = githubApi;
