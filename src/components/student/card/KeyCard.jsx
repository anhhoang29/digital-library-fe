import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { HiOutlineTag, HiOutlineBookOpen } from "react-icons/hi";

import colors from "../../../assets/JsonData/colors.json";

import "./card.css";

const KeyCard = (props) => {
    const { path, name, slug, icon } = props;

    const navigate = useNavigate();

    const randomIndex = Math.floor(Math.random() * colors.length);

    const [randomColor, setRandomColor] = useState(colors[randomIndex]);

    return (
        <>
            <div
                className="key-card rounded-2xl shadow-lg bg-red-400 grid place-items-center h-auto p-5 hover:bg-red-200 cursor-pointer"
                style={{ backgroundColor: randomColor.bg, "--hover-color": randomColor.hover, "--active-color": randomColor.active }}
                onClick={() => {
                    navigate(path + slug);
                }}>
                {icon === "category" && <HiOutlineTag className="h-10 w-10 mb-2 text-white" />}

                {icon === "field" && <HiOutlineBookOpen className="h-10 w-10 mb-2 text-white" />}

                <h4 class="text-xl font-bold text-white text-center">{name}</h4>
            </div>
        </>
    );
};

export default KeyCard;
