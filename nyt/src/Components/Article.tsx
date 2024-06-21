import React from "react";
import "./Article.css"; // Import the CSS file for Article styles

interface ArticleProps {
  title: string;
  imageUrl: string;
}

const Article: React.FC<ArticleProps> = ({ title, imageUrl }) => {
  return (
    <div className="article-card">
      <img className="article-image" src={imageUrl} alt="Article Thumbnail" />
      <div className="article-content">
        <h1 className="article-title">{title}</h1>
      </div>
    </div>
  );
};

export default Article;
