const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const PORT = process.env.PORT || 4000;
const NEWS_API_BASE_URL =
  process.env.SPACEFLIGHT_NEWS_API_BASE_URL ||
  'https://api.spaceflightnewsapi.net/v4/articles';

app.use(cors());
app.use(express.json());

const normalizeArticle = (article) => ({
  id: article.id,
  title: article.title,
  description: article.summary,
  summary: article.summary,
  content: article.summary,
  url: article.url,
  image: article.image_url,
  imageUrl: article.image_url,
  publishedAt: article.published_at,
  source: article.news_site,
  featured: article.featured,
});

const buildApiUrl = (baseUrl, query) => {
  const url = new URL(baseUrl);

  Object.entries(query).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      url.searchParams.set(key, value);
    }
  });

  return url;
};

app.get('/health', (_req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'News backend is running',
  });
});

app.get('/api/news/latest', async (req, res) => {
  try {
    const limit = Number.parseInt(req.query.limit, 10) || 20;

    const apiUrl = buildApiUrl(NEWS_API_BASE_URL, {
      limit,
      ordering: req.query.ordering || '-published_at',
    });

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`News API returned status ${response.status}`);
    }

    const payload = await response.json();

    const articles = (payload.results || []).map(normalizeArticle);

    res.status(200).json({
      count: payload.count || articles.length,
      next: payload.next || null,
      previous: payload.previous || null,
      articles,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Failed to fetch latest news.',
      error: error.message,
    });
  }
});

app.get('/api/news/search', async (req, res) => {
  try {
    const query = req.query.q;

    if (!query) {
      return res.status(400).json({
        message: 'Query parameter q is required.',
      });
    }

    const limit = Number.parseInt(req.query.limit, 10) || 20;

    const apiUrl = buildApiUrl(NEWS_API_BASE_URL, {
      search: query,
      limit,
      ordering: '-published_at',
    });

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`News API returned status ${response.status}`);
    }

    const payload = await response.json();

    const articles = (payload.results || []).map(normalizeArticle);

    return res.status(200).json({
      query,
      count: payload.count || articles.length,
      articles,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Failed to search news.',
      error: error.message,
    });
  }
});

app.get('/api/news/:id', async (req, res) => {
  try {
    const apiUrl = `${NEWS_API_BASE_URL}/${req.params.id}`;

    const response = await fetch(apiUrl);

    if (response.status === 404) {
      return res.status(404).json({
        message: 'Article not found.',
      });
    }

    if (!response.ok) {
      throw new Error(`News API returned status ${response.status}`);
    }

    const payload = await response.json();

    return res.status(200).json({
      article: normalizeArticle(payload),
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Failed to fetch article details.',
      error: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`News backend running on http://localhost:${PORT}`);
});
