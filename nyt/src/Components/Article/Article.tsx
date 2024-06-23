import React from "react";
import "./Article.css"; // Import the CSS file for Article styles

interface ArticleProps {
  title: string;
  imageUrl?: string;
  url: string;
}

const Article: React.FC<ArticleProps> = ({ title, imageUrl, url }) => {
  return (
    <div className="article-card">
      <img
        className="article-image"
        src={imageUrl}
        alt="Article Thumbnail"
        onClick={() => {
          window.location.href = url;
        }}
      />
      <div className="article-content">
        <h1 className="article-title">{title}</h1>
      </div>
    </div>
  );
};

export default Article;
