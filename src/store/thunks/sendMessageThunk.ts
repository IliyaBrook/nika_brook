import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IContactFormFields, TContactResponse } from '@/types/contact'
import { getApiBaseUrl } from '@/utils/enviroments'

export const sendMessageThunk = createApi({
	reducerPath: 'sendMessageThunk',
	baseQuery: fetchBaseQuery({
		baseUrl: getApiBaseUrl()
	}),
	endpoints: builder => ({
		contactSendEmail: builder.mutation<TContactResponse, IContactFormFields>({
			query: data => ({
				url: `sendEmail`,
				method: 'POST',
				body: data
			})
		})
	})
})
