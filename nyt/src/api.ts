import axios from "axios";

export async function getMostPopularArticle(apiKey: string) {
  try {
    const response = await axios.get(
      `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${apiKey}`
    );
    console.log(response.data.results[0].media[0]["media-metadata"][2].url);
    return response.data.results; // Assuming the data you want is in results
  } catch (error) {
    console.error("Error fetching articles:", error);
    return []; // Return an empty array in case of error
  }
}

export async function getLatestBooks(apiKey: string) {
  try {
    const response = await axios.get(
      `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${apiKey}`
    );
    return response.data.results.books; // Assuming the data you want is in results
  } catch (error) {
    console.error("Error fetching books:", error);
    return []; // Return an empty array in case of error
  }
}
