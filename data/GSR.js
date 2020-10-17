const GSR = require("google-search-results-nodejs");
const client = new GSR.GoogleSearchResults("secret_api_key");

const params = {
  engine: "google_maps",
  q: "coffee austin tx 78747",
  google_domain: "google.com",
  ll: "Peru",
  type: "search",
  hl: "en",
};

const callback = function (data) {
  console.log(data);
};

// Show result as JSON
client.json(params, callback);
