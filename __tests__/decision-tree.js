import buildTree from "../data/make-tree";
import { local_results } from "../data/results.json";

test("decisiont tree", () => {
  expect(buildTree(local_results)).toBe();
});
