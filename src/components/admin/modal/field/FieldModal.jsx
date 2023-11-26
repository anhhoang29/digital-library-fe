import { Button, Label, Modal, TextInput, Toast } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { HiExclamation, HiOutlineCloudUpload } from "react-icons/hi";

import usePrivateAxios from "../../../../api/usePrivateAxios";

import { createField, getAField, updateField } from "../../../../api/admin/fieldAPI";

const FieldModal = (props) => {
    usePrivateAxios();

    const { fieldId, openFieldModal, isCreatingNew, triggerModal, refreshFieldList } = props;

    const [openModal, setOpenModal] = useState(openFieldModal);
    const [fieldName, setFieldName] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState(0);
    const [mainMessage, setMainMessage] = useState("Đã xảy ra lỗi!");
    const [isFieldNameValid, setIsFieldNameValid] = useState(true);

    useEffect(() => {
        if (triggerModal !== 0) {
            setOpenModal(true);
            if (!isCreatingNew) {
                getFieldByFieldId();
            }
        }
    }, [triggerModal]);

    const onCloseModal = () => {
        setOpenModal(false);
        setFieldName("");
    };

    const getFieldByFieldId = async () => {
        try {
            const response = await getAField(fieldId);

            if (response.status === 200) {
                const field = response.data;
                setFieldName(field.fieldName);
            } else {
            }
        } catch (error) {
            console.log(error);
        }
    };

    const validateFieldName = () => {
        if (fieldName === "" || fieldName.trim() === "") setIsFieldNameValid(false);
        else setIsFieldNameValid(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        validateFieldName();

        if (isFieldNameValid) {
            setIsLoading(true);

            try {
                const data = {
                    fieldName: fieldName,
                };

                let response = null;
                if (isCreatingNew) response = await createField(data);
                else response = await updateField(fieldId, data);

                setIsLoading(false);

                if (response.status === 200) {
                    setStatus(1);
                    setMainMessage(isCreatingNew ? "Tạo lĩnh vực thành công!" : "Cập nhật lĩnh vực thành công!");
                    setOpenModal(false);

                    refreshFieldList();
                    setFieldName("");

                    setTimeout(() => {
                        setStatus(0);
                    }, 4000);
                } else {
                    setStatus(-1);

                    if (response.message === "Field already exists") setMainMessage("Lĩnh vực đã tồn tại!");
                    else if (response.message === "Field not found") setMainMessage("Lĩnh vực không tồn tại!");
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
                    <HiExclamation className="h-5 w-5 text-amber-400 dark:text-amber-300" />
                    <div className="pl-4 text-sm font-normal">{mainMessage}</div>
                </Toast>
            )}

            {status === 1 && (
                <Toast className="top-1/4 right-5 fixed w-100 z-50">
                    <HiOutlineCloudUpload className="h-5 w-5 text-green-600 dark:text-green-500" />
                    <div className="pl-4 text-sm font-normal">{mainMessage}</div>
                </Toast>
            )}

            <Modal show={openModal} size="md" onClose={onCloseModal} popup className="z-40">
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6">
                        <h3 className="text-3xl font-medium text-gray-900 dark:text-white">
                            {isCreatingNew && "Thêm lĩnh vực mới"}
                            {!isCreatingNew && "Cập nhật lĩnh vực"}
                        </h3>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <div className="mb-2 block">
                                    <Label htmlFor="fieldName" value="Tên lĩnh vực" />
                                </div>
                                <TextInput id="fieldName" placeholder="Công nghệ thông tin" value={fieldName} onChange={(event) => setFieldName(event.target.value)} required />
                                {!isFieldNameValid && <p className="block mt-2 text-sm font-medium text-red-600 italic">* Vui lòng nhập tên lĩnh vực</p>}
                            </div>

                            <div className="flex justify-between mt-5">
                                <Button type="submit" isProcessing={isLoading} color="success" className="w-28">
                                    Lưu
                                </Button>

                                <Button onClick={() => onCloseModal()} disabled={isLoading} color="failure" className="w-28">
                                    Huỷ bỏ
                                </Button>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default FieldModal;
