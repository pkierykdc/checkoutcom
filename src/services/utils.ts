import { Review } from "./types";

export const createReviewObject = (obj: Omit<Review, "date">): Review => ({
  ...obj,
  date: Date.now()
});
