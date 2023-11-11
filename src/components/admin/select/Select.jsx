import React from "react";

const Select = (props) => {
    const { selectName, options, selectedValue } = props;
    return (
        <div class="mb-6">
            <label for="hs-select-label" class="block text-sm font-medium mb-2 dark:text-white">
                {selectName}
            </label>
            <select
                class="py-3 px-4 pe-9 block w-full bg-gray-100 border border-gray-300 rounded-lg text-sm focus:border-blue-500 
            focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent 
            dark:text-gray-400 dark:focus:ring-gray-600"
                selectedValue={selectedValue}>
                <option selected>Chọn</option>
                {options.map((item, index) => (
                    <option key={index} value={item.value}>
                        {item.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
