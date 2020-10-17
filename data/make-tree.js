import dt from "./decision-tree";

function buildTree(local_results) {
  let config = {
    trainingSet: local_results,
    categoryAttr: "title",
    ignoredAttributes: [
      "position",
      "data_id",
      "gps_coordinates",
      "description",
    ],
  };
  let decisionTree = new dt.DecisionTree(config);
  // example
  let data = {
    position: 17,
    // "title": "Arriba Peru",
    data_id: "0x89c25819f262b967:0xc00aa5eccf8346b0",
    gps_coordinates: {
      latitude: 40.784404599999995,
      longitude: -74.0195273,
    },
    place_id_search:
      "https://serpapi.com/search.json?data=%214m5%213m4%211s0x89c25819f262b967%3A0xc00aa5eccf8346b0%218m2%213d40.784404599999995%214d-74.0195273&engine=google_maps&google_domain=google.com&hl=en&type=place",
    rating: 4.1,
    reviews: 120,
    type: "Peruvian restaurant",
    address: "5218 Bergenline Ave, West New York, NJ 07093",
    hours: "Open until 10:00 PM",
    phone: "(201) 583-1616",
    thumbnail: "",
  };

  const predictedTitle = decisionTree.predict(data);

  console.log(predictedTitle);
  return decisionTree;
}

export default buildTree;
