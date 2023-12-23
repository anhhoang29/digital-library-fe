import { Button, Label, Modal, TextInput, Toast } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { HiChevronLeft, HiChevronUp, HiOutlineCheck, HiX } from "react-icons/hi";

import usePrivateAxios from "../../../../../api/usePrivateAxios";

import { createOrganization, getAnOrganization, updateOrganization } from "../../../../../api/main/organizationAPI";

const OrganizationModal = (props) => {
    usePrivateAxios();

    const { organizationId, openOrganizationModal, isCreatingNew, triggerModal, refreshOrganizationList } = props;

    const [openModal, setOpenModal] = useState(openOrganizationModal);
    const [organizationName, setOrganizationName] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState(0);
    const [mainMessage, setMainMessage] = useState("Đã xảy ra lỗi!");
    const [isOrganizationNameValid, setIsOrganizationNameValid] = useState(true);

    useEffect(() => {
        if (triggerModal !== 0) {
            setOpenModal(true);
            if (!isCreatingNew) {
                getOrganizationByOrganizationId();
            }
        }
    }, [triggerModal]);

    const onCloseModal = () => {
        setOpenModal(false);
        setOrganizationName("");
    };

    const getOrganizationByOrganizationId = async () => {
        try {
            const response = await getAnOrganization(organizationId);

            if (response.status === 200) {
                const organization = response.data;
                setOrganizationName(organization.orgName);
            } else {
            }
        } catch (error) {
            console.log(error);
        }
    };

    const validateOrganizationName = () => {
        if (organizationName === "" || organizationName.trim() === "") setIsOrganizationNameValid(false);
        else setIsOrganizationNameValid(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        validateOrganizationName();

        if (isOrganizationNameValid) {
            setIsLoading(true);

            try {
                const data = {
                    orgName: organizationName,
                };

                let response = null;
                if (isCreatingNew) response = await createOrganization(data);
                else response = await updateOrganization(organizationId, data);

                setIsLoading(false);

                if (response.status === 200) {
                    setStatus(1);
                    setMainMessage(isCreatingNew ? "Tạo trường học thành công!" : "Cập nhật trường học thành công!");
                    setOpenModal(false);

                    refreshOrganizationList();

                    setOrganizationName("");

                    setTimeout(() => {
                        setStatus(0);
                    }, 4000);
                } else {
                    setStatus(-1);

                    if (response.message === "Organization already exists") setMainMessage("Trường học đã tồn tại!");
                    else if (response.message === "Organization not found") setMainMessage("Trường học không tồn tại!");
                    else setMainMessage("Đã xảy ra lỗi!");

                    setTimeout(() => {
                        setStatus(0);
                    }, 4000);
                }
            } catch (error) {
                setStatus(-1);
                setMainMessage("Đã xảy ra lỗi!");
                setTimeout(() => {
                    setStatus(0);
                }, 2000);
            }
        }
    };

    return (
        <>
            {status === -1 && (
                <Toast className="top-1/4 right-5 w-100 fixed z-50">
                    <HiX className="h-5 w-5 bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200" />
                    <div className="pl-4 text-sm font-normal">{mainMessage}</div>
                </Toast>
            )}

            {status === 1 && (
                <Toast className="top-1/4 right-5 fixed w-100 z-50">
                    <HiOutlineCheck className="h-5 w-5 bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200" />
                    <div className="pl-4 text-sm font-normal">{mainMessage}</div>
                </Toast>
            )}

            <Modal show={openModal} size="md" onClose={onCloseModal} popup className="z-40">
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6">
                        <h3 className="text-3xl font-medium text-gray-900 dark:text-white">
                            {isCreatingNew && "Thêm trường học mới"}
                            {!isCreatingNew && "Cập nhật trường học"}
                        </h3>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <div className="mb-2 block">
                                    <Label htmlFor="organizationName" value="Tên trường học" />
                                </div>
                                <TextInput id="organizationName" placeholder="Trường Đại học Sư phạm Kỹ thuật TP. HCM" value={organizationName} onChange={(event) => setOrganizationName(event.target.value)} required />
                                {!isOrganizationNameValid && <p className="block mt-2 text-sm font-medium text-red-600 italic">* Vui lòng nhập tên trường học</p>}
                            </div>

                            <div className="flex justify-between mt-5 gap-2">
                                <Button onClick={() => onCloseModal()} disabled={isLoading} color="failure" className="w-auto">
                                    <HiChevronLeft className="mr-2 h-5 w-5" />
                                    Huỷ bỏ
                                </Button>

                                <Button type="submit" isProcessing={isLoading} color="success" className="w-auto">
                                    Lưu
                                    <HiChevronUp className="ml-2 h-5 w-5" />
                                </Button>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default OrganizationModal;
