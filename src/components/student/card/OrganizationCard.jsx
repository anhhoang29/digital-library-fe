import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { HiOutlineLibrary } from "react-icons/hi";

import colors from "../../../assets/JsonData/colors.json";

const OrganizationCard = (props) => {
    const { orgName, slug } = props;

    const navigate = useNavigate();

    const randomIndex = Math.floor(Math.random() * colors.length);

    const [randomColor, setRandomColor] = useState(colors[randomIndex]);

    return (
        <>
            <div
                className="card-organization flex justify-around w-fit items-center rounded-full shadow-lg h-auto p-4 cursor-pointer"
                style={{ backgroundColor: randomColor.bg, "--hover-color":randomColor.hover, "--active-color":randomColor.active}}
                onClick={() => {navigate("/institutions/" + slug)}}
                >
                <HiOutlineLibrary className="h-5 w-5 text-bold text-white mr-2" />

                <h4 class="text-sm text-white text-center font-medium">{orgName}</h4>
            </div>
        </>
    );
};

export default OrganizationCard;
