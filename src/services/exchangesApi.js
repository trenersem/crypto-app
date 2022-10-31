import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
	'X-RapidAPI-Key': 'cdf19c2519msha09ba2add6a2d6bp15fae6jsnd00615ffbe88',
	'X-RapidAPI-Host': 'exchangerate-api.p.rapidapi.com'
};

const baseUrl = 'https://exchangerate-api.p.rapidapi.com'
const createRequest = (url) => ({url, headers: cryptoApiHeaders});

export const cryptoApi = createApi({
	reducerPath: 'cryptoApi',
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getExchanges: builder.query({
			query: () => createRequest(`rapid/latest/USD`),
		}),
	})
});

export const {
	useGetExchangesQuery
} = cryptoApi;