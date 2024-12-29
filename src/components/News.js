import React, { useState, useEffect } from "react";

function News({ newsName }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `https://newsapi.org/v2/everything?q=${newsName}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
        );
        const data = await res.json();

        // Only keep articles that have an image
        const filteredArticles = data.articles.filter(
          (article) => article.urlToImage
        );
        setArticles(filteredArticles);
      } catch (err) {
        setError("Error fetching news. Please try again later.");
      }

      setLoading(false);
    };

    fetchNews();
  }, [newsName]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="grid">
      {articles.map((article, index) => (
        <div key={index} className="grid-item">
          <div className="card">
            <img src={article.urlToImage} alt={article.title} />
            <div className="card-body">
              <div className="card-title">{article.title}</div>
              <div className="card-description">{article.description}</div>
            </div>
            <div className="card-footer">
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                class="button-link"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default News;
