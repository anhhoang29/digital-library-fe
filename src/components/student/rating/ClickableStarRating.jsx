import React, { useState } from "react";
import { HiStar, HiOutlineStar } from "react-icons/hi";

const HoverableStarRating = ({ initialRating = 0, onChange }) => {
    const [rating, setRating] = useState(initialRating);
    const [hoveredRating, setHoveredRating] = useState(0);

    const handleStarClick = (clickedRating) => {
        setRating(clickedRating);
        if (onChange) {
            onChange(clickedRating);
        }
    };

    const handleStarHover = (hoveredRating) => {
        setHoveredRating(hoveredRating);
    };

    const handleMouseLeave = () => {
        setHoveredRating(0);
    };

    const renderStars = () => {
        const stars = [];

        for (let i = 1; i <= 5; i++) {
            const isFilled = i <= (hoveredRating || rating);

            stars.push(
                <div key={i} onClick={() => handleStarClick(i)} onMouseEnter={() => handleStarHover(i)} onMouseLeave={handleMouseLeave} style={{ cursor: "pointer" }}>
                    {isFilled ? <HiStar className="w-6 h-6 text-yellow-300 ml-0" /> : <HiOutlineStar className="w-6 h-6 text-yellow-300 ml-0" />}
                </div>,
            );
        }

        return stars;
    };

    return <div className="flex gap-px ml-auto">{renderStars()}</div>;
};

export default HoverableStarRating;
