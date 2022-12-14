import axios, { AxiosRequestConfig, AxiosError } from "axios";

export const useAPI = () => {
  const baseUrl = 'https://jsonplaceholder.typicode.com'
  const token = window.localStorage.getItem('authToken')

  const client = axios.create({
    baseURL: baseUrl,
    headers: {
      'Authorization': token || '',
      "Access-Control-Allow-Origin": baseUrl,
    }
  })
  const responseErrorHandler = (err: AxiosError): Promise<AxiosError> => {
    const isStatus404 = err.response?.status === 404
    const isStatus500 = err.response?.status === 500
    if (isStatus404) {
      // 404 error
    }
    return Promise.reject(err)
  }
  client.interceptors.response.use(null, responseErrorHandler)

  const getRouters = (url: string, query?: Record<string, string>) => {
    if (!url) {
      throw new Error('please provide a validate router')
    }
    const requestURL = new URL(url, baseUrl)
    console.log({ requestURL })
    if (query) {
      requestURL.search = new URLSearchParams(query).toString()
    }

    return requestURL.toString()
  }
  return {
    client,
    getRouters
  }
}