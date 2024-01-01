const useApi = () => {
  const baseURL = 'http://localhost:5173/'
  const getRouters = (url: string, query: Record<string, string> = {}) => {
    const requestUrl = new URL(url, baseURL)
    if (query) {
      requestUrl.search = new URLSearchParams(query).toString()
    }
    return requestUrl.toString()
  }
  return {
    getRouters
  }
}