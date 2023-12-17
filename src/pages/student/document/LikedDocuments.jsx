import React from "react";

import { Pagination } from "flowbite-react";

import SelectFilter from "../../../components/student/select/SelectFilter";
import DocumentCard from "../../../components/student/card/Card";

const LikedDocument = () => {
    return (
        <>
            <div className="flex-1 p-4 bg-gray-50 h-full">
                <div className="rounded-lg bg-white py-5 px-10">
                    <div className="flex justify-between ">
                        <SelectFilter selectName={"Danh mục"} />
                        <SelectFilter selectName={"Lĩnh vực"} />
                        <SelectFilter selectName={"Trường"} />
                        <SelectFilter selectName={"Sắp xếp theo"} />
                    </div>
                </div>

                <div className="rounded-lg bg-white py-8 px-8 mt-5 ">
                    <div>
                        <p>Kết quả 1 trong 20</p>
                    </div>

                    <div className="grid grid-cols-4 gap-8">
                        <DocumentCard />
                    </div>

                    <div className="flex overflow-x-auto sm:justify-center">
                        <Pagination previousLabel="Trước" nextLabel="Sau" currentPage={0} totalPages={10} onPageChange={""} showIcons />
                    </div>
                </div>
            </div>
        </>
    );
};

export default LikedDocument;
