import { QueryKeys } from "./queryKeys";
import { Review } from "./types";
import { createReviewObject } from "./utils";
import { getRandomArbitrary } from "../utils/common";

export const addNewReview = (data: Omit<Review, "date">) => {
  return new Promise<Review>((resolve, reject) => {
    setTimeout(() => {
      const existingDataString = localStorage.getItem(QueryKeys.REVIEWS);
      
      if (existingDataString) {
        const reviewObj = createReviewObject(data);
        const newData = [...JSON.parse(existingDataString), reviewObj];
        localStorage.setItem(QueryKeys.REVIEWS, JSON.stringify(newData));    
        resolve(reviewObj);
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
