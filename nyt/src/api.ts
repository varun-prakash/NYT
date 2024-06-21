import axios from "axios";

export async function getMostPopularArticle(apiKey: string) {
  try {
    const response = await axios.get(
      `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${apiKey}`
    );
    console.log(response.data);
    return response.data.results; // Assuming the data you want is in results
  } catch (error) {
    console.error("Error fetching articles:", error);
    return []; // Return an empty array in case of error
  }
}
