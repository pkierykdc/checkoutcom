import { QueryKeys } from "./queryKeys";
import { Review } from "./types";
import { createReviewObject } from "./utils";
import { getRandomArbitrary } from "../utils/common";

export const addNewReview = (data: Omit<Review, "date">) => {
  return new Promise<Review>((resolve, reject) => {
    setTimeout(() => {
      const existingDataString = localStorage.getItem(QueryKeys.REVIEWS);
      let existingDataParsed: Review[] = [];
      
      if (existingDataString) {
        const obj = createReviewObject(data);
        existingDataParsed = JSON.parse(existingDataString);
        const newData = [...existingDataParsed, obj];
        localStorage.setItem(QueryKeys.REVIEWS, JSON.stringify(newData));    
        resolve(obj);
      } else {
        return reject();
      }
    }, getRandomArbitrary(100, 2000));
  });
};

export const getReviews = () => {
  return new Promise<Review[]>((resolve, reject) => {
    setTimeout(() => {
      const existingDataString = localStorage.getItem(QueryKeys.REVIEWS);
  
      if (existingDataString) {
        resolve(JSON.parse(existingDataString));
      } else {
        return reject();
      }
    }, getRandomArbitrary(100, 2000));
  });
};
