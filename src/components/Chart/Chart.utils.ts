import { Review } from "../../services/types";
import { getAverageFromArray } from "../../utils/common";

export const shapeDataForChart = (data?: Review[]) => {
  const trendData: {
    [key: number]: number[]
  } = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
    10: [],
    11: []
  };
  data?.forEach(review => {
    const monthIdx = new Date(review.date).getMonth();
    trendData[monthIdx as keyof typeof trendData].push(review.rating);
  });

  return Object.values(trendData).map((obj) => obj.length > 0 ? getAverageFromArray(obj) : 0);  
};
