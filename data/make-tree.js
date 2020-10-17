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
  return decisionTree;
}

export default buildTree;
