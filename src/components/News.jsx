import React from "react";

const News = ({ news }) => {
  return (
    <div className="news">
      <ul>
        {news.map((article, index) => (
          <li key={index}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <h2>{article.title}</h2>
              {article.urlToImage && <img src={article.urlToImage} alt={article.title} />}
              {article.image && <img src={article.image} alt={article.title} />}
              <p>
                <strong>Author:</strong> {article.author || "Unknown"}
              </p>
              <p>
                <strong>Published at:</strong>{" "}
                {new Date(article.publishedAt).toLocaleString()}
              </p>
              <p>{article.description}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;


