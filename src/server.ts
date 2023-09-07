const express = require("express");
const axios = require("axios");
const app = express();

// Replace with your Naver API credentials
const clientId = "7lVgaBo6gVdzFAcWzhrA";
const clientSecret = "ai8LljpS2K";

// Define a route to proxy the API request
app.get("/api/news", async (req, res) => {
  try {
    const apiUrl = "https://openapi.naver.com/v1/search/news.json";

    // Set up headers with your API credentials
    const headers = {
      "X-Naver-Client-Id": clientId,
      "X-Naver-Client-Secret": clientSecret,
    };

    // Make the API request
    const response = await axios.get(apiUrl, {
      headers,
      params: req.query, // Pass query parameters from the client
    });

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching news data:", error);
    res.status(500).json({ error: "Failed to fetch news data" });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});