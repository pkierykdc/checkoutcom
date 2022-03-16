import React from "react";
import { FaStar } from "react-icons/fa";

export interface StarRatingProps {
  rating: number;
}

export const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  return (
    <div data-testid="StarRatingComponent">
      {
        [1, 2, 3, 4, 5].map((value) => (
          <FaStar 
            data-testid={value <= rating ? "StarRatingComponentStarFilled" : "StarRatingComponentStarUnfilled"}
            key={value}
            color={value <= rating ? "#ffa500" : "#d8d9dc"}
            size={18}
            style={{ marginRight: 5 }} 
          />
        ))
      }
    </div>
  );
};
