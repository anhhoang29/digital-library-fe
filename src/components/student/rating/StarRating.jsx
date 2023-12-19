import React from "react";
import { HiStar, HiOutlineStar } from "react-icons/hi";

const StarRating = ({ rating }) => {
    const fullStars = Array.from({ length: Math.floor(rating) }, (_, index) => index + 1);
    const remainingStars = Array.from({ length: 5 - Math.floor(rating) }, (_, index) => index + Math.floor(rating) + 1);

    return (
        <div className="flex gap-px ml-auto">
            {fullStars.map((star) => (
                <HiStar key={star} className="w-5 h-5 text-yellow-300 ml-0" />
            ))}
            {remainingStars.map((star) => (
                <HiOutlineStar key={star} className="w-5 h-5 text-yellow-300 ml-0 stroke-current" />
            ))}
        </div>
    );
};

export default StarRating;