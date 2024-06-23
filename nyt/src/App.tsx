import { useEffect, useState } from "react";
import Article from "./Components/Article/Article"; // Adjust path as per your project structure
import { getMostPopularArticle } from "./api"; // Adjust path as per your project structure
import "./App.css"; // Import the CSS file for custom styles

interface ArticleType {
  uri: string;
  url: string;
  id: number;
  asset_id: number;
  source: string;
  published_date: string;
  updated: string;
  section: string;
  subsection: string;
  nytdsection: string;
  adx_keywords: string;
  column: string | null;
  byline: string;
  type: string;
  title: string;
  abstract: string;
  des_facet: string[];
  org_facet: string[];
  per_facet: string[];
  geo_facet: string[];
  media: {
    type: string;
    subtype: string;
    caption: string;
    copyright: string;
    approved_for_syndication: number;
    "media-metadata": {
      url: string;
      format: string;
      height: number;
      width: number;
    }[];
  }[];
  eta_id: number;
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
              imageUrl={
                article.media.length > 0 && // Check if media array has items
                article.media[0]["media-metadata"].length > 2 // Check if "media-metadata" array has at least 3 items
                  ? article.media[0]["media-metadata"][2].url // Access the third item's URL
                  : ""
              }
              url={article.url}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
