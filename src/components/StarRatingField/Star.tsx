import React from "react";
import { FaStar } from "react-icons/fa";

interface StarProps {
  filled: boolean;
  onClick?: () => void;
}

export function Star({ filled, onClick }: StarProps) {
  return (
    <FaStar 
      color={filled ? "#ffa500" : "#d8d9dc"} 
      onClick={onClick} 
      size={25}
      style={{ cursor: "pointer", marginRight: 5 }}
    />
  );
}
