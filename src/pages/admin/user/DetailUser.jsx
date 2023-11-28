import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import moment from "moment/moment";

import usePrivateAxios from "../../../api/usePrivateAxios";
import { getAUser } from "../../../api/admin/userAPI";

import { Button} from "flowbite-react";
import { HiUser, HiCake, HiPhone, HiUserAdd, HiAtSymbol, HiCloudUpload } from "react-icons/hi";
import profileImage from "../../../assets/images/default_profile.jpg";

const DetailUser = () => {
    usePrivateAxios();

    const { userId } = useParams();

    const [user, setUser] = useState(null);

    const roleMappings = {
        ROLE_ADMIN: "ADMIN",
        ROLE_STUDENT: "SINH VIÊN",
        ROLE_LECTURER: "GIẢNG VIÊN",
        ROLE_MANAGER: "QUẢN LÝ",
    };

    useEffect(() => {
        getUserByUserId();
    }, []);

    const getUserByUserId = async () => {
        try {
            const response = await getAUser(userId);

            if (response.status === 200) {
                setUser(response.data);
            } else {
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <div className="row">
                <div className="col-12 flex">
                    <div className="card w-1/3 mr-5">
                        <div className="card__body">
                            <div className="flex flex-col items-center pb-5">
                                <img alt="ProfileBonnie image" src={user && user.image ? user.image : profileImage} className="mb-3 rounded-full shadow-lg w-24 h-24" />
                                <h5 className="mb-2 text-2xl font-medium dark:text-white">
                                    {user && user.lastName} {user && user.firstName}
                                </h5>

                                <div className="flex gap-x-1">
                                    <Button color="success" pill>
                                        {user && user.role && roleMappings[user.role.roleName]}
                                    </Button>
                                    <Button color={user && user.deleted ? "success" : "failure"} pill>
                                        {user && !user.deleted ? "Đang hoạt động" : "Đã xoá"}
                                    </Button>
                                </div>
                                <div className="mt-5">
                                    <div className="flex text-center font-bold">
                                        <span className="block text-base uppercase font-medium dark:text-white">{user && user.organization && user.organization.orgName}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <div className="mb-5">
                                    <div className="flex items-center mb-2 font-bold">
                                        <HiUser className="w-5 h-5 mr-3 text-gray-800 dark:text-white" />
                                        <span className="block text-base font-medium text-sky-500 dark:text-white">
                                            {user && user.gender === 0 && "Nam"}
                                            {user && user.gender === 1 && "Nữ"}
                                            {user && user.gender === 2 && "Khác"}
                                        </span>
                                    </div>
                                    <div className="block mb-2 text-base font-medium text-sky-500 dark:text-white"></div>
                                </div>

                                <div className="mb-5">
                                    <div className="flex items-center mb-2 font-bold">
                                        <HiCake className="w-5 h-5 mr-3 text-gray-800 dark:text-white" />
                                        <span className="block text-base font-medium text-sky-500 dark:text-white">{user && moment(user.dateOfBirth).format("DD/MM/yyyy")}</span>
                                    </div>
                                </div>

                                <div className="mb-5">
                                    <div className="flex items-center mb-2 font-bold">
                                        <HiAtSymbol className="w-5 h-5 mr-3 text-gray-800 dark:text-white" />
                                        <span className="block text-base font-medium text-sky-500 dark:text-white">{user && user.email}</span>
                                    </div>
                                </div>

                                <div className="mb-5">
                                    <div className="flex items-center mb-2 font-bold">
                                        <HiPhone className="w-5 h-5 mr-3 text-gray-800 dark:text-white" />
                                        <span className="block text-base font-medium text-sky-500 dark:text-white">{user && user.phone}</span>
                                    </div>
                                </div>

                                <div className="mb-5">
                                    <div className="flex items-center mb-2 font-bold">
                                        <HiUserAdd className="w-5 h-5 mr-3 text-gray-800 dark:text-white" />
                                        <span className="block text-base font-medium dark:text-white">Ngày tạo tài khoản</span>
                                    </div>
                                    <div className="block mb-2 text-base font-medium text-sky-500 dark:text-white">{user && moment(user.createdAt).format("DD/MM/yyyy HH:mm")}</div>
                                </div>

                                <div>
                                    <div className="flex items-center mb-2 font-bold">
                                        <HiUserAdd className="w-5 h-5 mr-3 text-gray-800 dark:text-white" />
                                        <span className="block text-base font-medium dark:text-white">Ngày cập nhật</span>
                                    </div>
                                    <div className="block text-base font-medium text-sky-500 dark:text-white">{user && moment(user.updatedAt).format("DD/MM/yyyy HH:mm")}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card w-2/3 h-min">
                        <div className="card__body">
                            <div className="mb-5">
                                <div className="flex items-center mb-2 font-bold">
                                    <HiCloudUpload className="w-8 h-8 mr-3 text-gray-800 dark:text-white" />
                                    <span className="block text-2xl font-bold uppercase dark:text-white">Đã tải lên</span>
                                </div>
                                <div className="block mb-2 text-base font-medium text-sky-500 dark:text-white"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailUser;
