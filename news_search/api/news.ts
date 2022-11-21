let baseURL = `https://newsapi.org/v2/top-headlines?country=tw&apiKey=${process.env.NEXT_PUBLIC_APIKEY}`
export const getNewsArticle = async () => {
  const articles = await fetch(baseURL).then(res => res.json())
  return articles as NewsResponse
}

export const setNewCategoryToStorage = (type: string) => localStorage.setItem('news', type)
export const getNewCategoryToStorage = () => localStorage.getItem('news')