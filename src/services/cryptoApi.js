import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
	'X-RapidAPI-Key': 'cdf19c2519msha09ba2add6a2d6bp15fae6jsnd00615ffbe88',
	'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
};

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
	reducerPath: 'cryptoApi',
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getCryptos: builder.query({
			query: (count) => createRequest(`/coins?limit=${count}`),
		}),
		getCryptosDetails: builder.query({
			query: (coinId) => createRequest(`/coin/${coinId}`)
		}),
		getCryptoHistory: builder.query({
			query: ({ coinId, timeperiod }) => createRequest(`/coin/${coinId}/history?timePeriod=${timeperiod}`),
		}),
		getExchanges: builder.query({
			query: () => createRequest('/exchanges'),
		})
	})
});

export const {
	useGetCryptosQuery,
	useGetCryptosDetailsQuery,
	useGetCryptoHistoryQuery,
	useGetExchangesQuery
} = cryptoApi;