// ButtonComponent.js
import React from "react";
import { Tooltip } from "flowbite-react";
import "./action-button.css";

const ActionButton = ({ onClick, icon, color, content }) => {
    return (
        <>
            <Tooltip content={`${content}`} style="light">
                <button onClick={onClick} type="button" className={`text-${color}-500 hover:text-white focus:outline-none font-medium rounded-lg text-xl p-1 text-center inline-flex items-center action-button`}>
                    <i className={icon}></i>
                </button>
            </Tooltip>
        </>
    );
};

export default ActionButton;
