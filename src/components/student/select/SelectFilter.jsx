import React from "react";

const SelectFilter = (props) => {
    const { selectName, options, selectedValue, onChangeHandler, name, field, defaultName, defaultValue } = props;
    return (
        <div className="mb-2 w-auto">
            <label htmlFor="hs-select-label" className="block text-sm font-medium mb-2 dark:text-white">
                {selectName}
            </label>
            <select
                className="py-3 px-4 pe-9 block w-full bg-white border border-gray-300 rounded-full text-sm focus:border-green-400 
            focus:ring-green-400 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent 
            dark:text-gray-400 dark:focus:ring-gray-600"
                value={selectedValue}
                onChange={onChangeHandler}>
                <option value={defaultValue ? defaultValue : "all"}>{defaultName ? defaultName : "Tất cả"}</option>
                {options?.map((item) => (
                    <option key={item[field]} value={item[field]} className="bg-white">
                        {item[name]}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectFilter;
