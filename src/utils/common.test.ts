import { getAverageFromArray, shapeDataForChart } from "./common";
import data from "../data.json";

describe("getAverageFromArray util fn", () => {
  it("gives correct average value for [2, 2] array", () => {
    expect(getAverageFromArray([2, 2])).toStrictEqual(2);
  });

  it("gives correct average value for [1, 2, 3, 2, 1] array", () => {
    expect(getAverageFromArray([1, 2, 3, 2, 1])).toStrictEqual(1.8);
  });

  it("gives correct average value for [0.1, 0.2, 0.5, 0.6] array", () => {
    expect(getAverageFromArray([0.1, 0.2, 0.5, 0.6])).toStrictEqual(0.35);
  });
});

describe("shapeDataForChart util fn", () => {
  it("gives correct shape when data provided", () => {
    expect(shapeDataForChart(data.comments)).toStrictEqual([4, 0, 0, 1, 0, 0, 3, 3, 2, 0, 2, 1]);
  });

  it("gives array with only zero values when no data provided", () => {
    expect(shapeDataForChart()).toStrictEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  });
});
