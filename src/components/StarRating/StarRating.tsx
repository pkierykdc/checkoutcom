import React from "react";
import { FaStar } from "react-icons/fa";

interface StarRatingProps {
  rating: number;
}

export const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  return (
    <div>
      {
        [1, 2, 3, 4, 5].map((value) => (
          <FaStar 
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
