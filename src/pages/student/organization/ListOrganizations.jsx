import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import OrganizationCard from "../../../components/student/card/OrganizationCard";

import { searchOrganizations } from "../../../api/main/organizationAPI";
import institutionImage from "../../../assets/images/institution.png";

const ListOrganizations = () => {
    const navigate = useNavigate();

    const [organizationList, setOrganizationList] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        getOrganizationList();
    }, [search]);

    const getOrganizationList = async () => {
        try {
            const response = await searchOrganizations({
                params: {
                    page: 0,
                    size: 100,
                    s: search,
                },
            });
            if (response.status === 200) {
                setOrganizationList(response.data.content);
            } else {
            }
        } catch (error) {
            navigate("/error-500");
        }
    };

    return (
        <>
            <div className="bg-gray-50 h-full w-full overflow-auto">
                <div className="px-[5%]">
                    <div className="grid place-items-center mt-20 mb-10">
                        <img src={institutionImage} alt="" width="20%" height="20%" />
                        <h2 class="text-3xl font-semibold text-gray-500 dark:text-white">Bạn muốn tìm trường nào?</h2>
                    </div>

                    <div className="w-2/3 mb-10 m-auto">
                        <div className="relative rounded-full">
                            <input
                                type="text"
                                id="home-search"
                                className="text-lg font-normal block w-full p-4 ps-5 text-gray-900 border border-gray-300 bg-white focus:ring-2 focus:ring-green-200 focus:border focus:border-green-400 rounded-full"
                                placeholder="Tìm kiếm"
                                required
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />

                            <div className="absolute inset-y-0 end-0 flex items-center pe-5  cursor-pointer">
                                <svg className="w-6 h-6 text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-5 mb-20 place-items-center">
                        {organizationList.map((organization) => (
                            <OrganizationCard key={organization.orgId} orgName={organization.orgName} slug={organization.slug} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ListOrganizations;
