const BACKEND_URL =
  process.env.EXPO_PUBLIC_BACKEND_URL || "http://localhost:4000";

const mapArticle = (article) => ({
  id: String(article.id),
  title: article.title,
  description: article.description || article.summary || "No description available.",
  content: article.content || article.summary || "",
  image: article.image || article.imageUrl || "https://via.placeholder.com/300x200?text=News",
  source: article.source || "News",
  publishedAt: article.publishedAt || null,
  url: article.url || null,
  featured: Boolean(article.featured),
});

async function request(path) {
  const response = await fetch(`${BACKEND_URL}${path}`);

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return response.json();
}

export async function fetchLatestNews(limit = 20) {
  const payload = await request(`/api/news/latest?limit=${limit}`);
  return (payload.articles || []).map(mapArticle);
}

export async function searchNews(query, limit = 20) {
  const payload = await request(
    `/api/news/search?q=${encodeURIComponent(query)}&limit=${limit}`
  );
  return (payload.articles || []).map(mapArticle);
}

export { BACKEND_URL };
