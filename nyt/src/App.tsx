import { useEffect, useState } from "react";
import Article from "./Components/Article/Article"; // Adjust path as per your project structure
import { getMostPopularArticle } from "./api"; // Adjust path as per your project structure
import "./App.css"; // Import the CSS file for custom styles

interface ArticleType {
  title: string;
  media: {
    "media-metadata": {
      url: string;
    }[];
  }[];
}

function App() {
  const [articles, setArticles] = useState<ArticleType[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await getMostPopularArticle(
          "7Ruw7RZTs6A6VaRjqrlLty2wlI7WJ1tR"
        );
        setArticles(res);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };
    fetchArticles();
  }, []);

  return (
    <>
      <div className="container">
        <div className="articles-grid">
          {articles.map((article, index) => (
            <Article
              key={index}
              title={article.title}
              imageUrl={article.media[0]["media-metadata"][2].url}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
