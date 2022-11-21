type NewsResponse = {
  status: string;
  totalResults: number;
  articles: Article[];
}

type Article = {
  source: Source;
  author?: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content?: string;
}

type Source = {
  id?: any;
  name: string;
}

type SideBarRouter = string[]