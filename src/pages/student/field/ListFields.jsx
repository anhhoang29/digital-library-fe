import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import KeyCard from "../../../components/student/card/KeyCard";

import fieldImage from "../../../assets/images/field.png";

import { getAccessibleFields } from "../../../api/main/fieldAPI";

const ListFields = () => {

        const navigate = useNavigate();

        const [fieldList, setFieldList] = useState([]);

        useEffect(() => {
            getFieldList();
        }, []);

        const getFieldList = async () => {
            try {
                const response = await getAccessibleFields({
                    params: {
                        page: 0,
                        size: 100,
                    },
                });
                if (response.status === 200) {
                    setFieldList(response.data);
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
                        <img src={fieldImage} alt="" width="20%" height="20%" />
                        <h2 class="text-3xl font-semibold text-gray-500 dark:text-white mt-10">Bạn muốn tìm lĩnh vực nào?</h2>
                    </div>

                    <div className="grid grid-cols-5 gap-8 mb-20 ">
                        {fieldList.map((field) => (
                            <KeyCard name={field.fieldName} slug={field.slug} path="/fields/" icon="field" />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ListFields;
