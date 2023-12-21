import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import KeyCard from "../../../components/student/card/KeyCard";

import categoryImage from "../../../assets/images/category.webp";

import { getAccessibleCategories } from "../../../api/main/categoryAPI";

const ListCategories = () => {

    const navigate = useNavigate();
    
    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        getCategoryList();
    }, []);

    const getCategoryList = async () => {
        try {
            const response = await getAccessibleCategories({
                params: {
                    page: 0,
                    size: 100,
                },
            });
            if (response.status === 200) {
                setCategoryList(response.data);
            } else {
            }
        } catch (error) {
            navigate("/error-500");
        }
    };

    return (
        <>
            <div className="bg-gray-50 h-full w-full overflow-auto">
                <div className="px-[10%]">
                    <div className="grid place-items-center mt-20 mb-20">
                        <img src={categoryImage} alt="" width="20%" height="20%" />
                        <h2 class="text-3xl font-semibold text-gray-500 dark:text-white">Bạn muốn tìm danh mục nào?</h2>
                    </div>

                    <div className="grid grid-cols-5 gap-8 mb-20">
                        {categoryList.map((category) => (
                            <KeyCard name={category.categoryName} slug={category.slug} path="/categories/" icon="category"/>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ListCategories;
