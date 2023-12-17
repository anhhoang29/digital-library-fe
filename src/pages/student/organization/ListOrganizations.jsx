import React from "react";

import OrganizationCard from "../../../components/student/card/OrganizationCard";

import institutionImage from "../../../assets/images/institution.png";

const ListOrganizations = () => {
    return (
        <>
            <div className="bg-gray-50 h-full w-full overflow-auto">
                <div className="px-[10%]">
                    <div className="grid place-items-center mt-20 mb-20">
                        <img src={institutionImage} alt="" width="20%" height="20%" />
                        <h2 class="text-3xl font-semibold text-gray-500 dark:text-white">Bạn muốn tìm trường nào?</h2>
                    </div>

                    <div className="grid grid-cols-2 gap-5 mb-20">
                        <OrganizationCard />
                        <OrganizationCard />
                        <OrganizationCard />
                        <OrganizationCard />
                        <OrganizationCard />
                        <OrganizationCard />
                        <OrganizationCard />
                        <OrganizationCard />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ListOrganizations;
