// ButtonComponent.js
import React from "react";

const ActionButton = ({ onClick, icon }) => {
    return (
        <button
            onClick={onClick}
            type="button"
            class="text-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
            <i class={icon}></i>
        </button>
    );
};

export default ActionButton;
