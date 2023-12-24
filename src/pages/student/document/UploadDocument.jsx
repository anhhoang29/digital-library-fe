import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "../../../components/management/select/Select";

import { getAccessibleCategories } from "../../../api/main/categoryAPI";
import { uploadNewDocument } from "../../../api/main/documentAPI";
import { getAccessibleFields } from "../../../api/main/fieldAPI";
import usePrivateAxios from "../../../api/usePrivateAxios";

import { Button, Toast } from "flowbite-react";
import { HiChevronLeft, HiChevronUp, HiExclamation, HiOutlineCloudUpload } from "react-icons/hi";

const StudentNewDocument = () => {
    usePrivateAxios();

    const navigate = useNavigate();

    // const currentUser = useSelector((state) => state.LoginReducer.user);
    const currentUser = JSON.parse(sessionStorage.getItem("profile"));

    const [name, setName] = useState("");
    const [introduction, setIntroduction] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [fieldId, setFieldId] = useState("");
    const [isInternal, setIsInternal] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [categoryList, setCategoryList] = useState([]);
    const [fieldList, setFieldList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState(0);

    const [isNameValid, setIsNameValid] = useState(true);
    const [isIntroductionValid, setIsIntroductionValid] = useState(true);
    const [isCategoryValid, setIsCategoryValid] = useState(true);
    const [isFieldValid, setIsFieldValid] = useState(true);
    const [isFileValid, setIsFileValid] = useState(true);
    const [fileMessage, setFileMessage] = useState("");

    const [isInfoSectionValid, setIsInfoSectionValid] = useState(true);
    const [isFileSectionValid, setIsFileSectionValid] = useState(true);

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
            console.log(error);
        }
    };

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
            throw error;
        }
    };

    useEffect(() => {
        getCategoryList();
        getFieldList();
    }, []);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };

    const validateName = () => {
        if (name === "" || name.trim() === "") {
            setIsNameValid(false);
        } else {
            setIsNameValid(true);
        }
    };

    const validateIntroduction = () => {
        if (introduction === "" || introduction.trim() === "") {
            setIsIntroductionValid(false);
        } else {
            setIsIntroductionValid(true);
        }
    };

    const validateCategory = () => {
        if (categoryId === "") {
            setIsCategoryValid(false);
        } else {
            setIsCategoryValid(true);
        }
    };

    const validateField = () => {
        if (fieldId === "") {
            setIsFieldValid(false);
        } else {
            setIsFieldValid(true);
        }
    };

    const validateFile = () => {
        if (selectedFile === null) {
            setFileMessage("Vui lòng chọn tệp");
            return false;
        } else if (selectedFile.size > 100 * 1024 * 1024 || selectedFile.size === 0) {
            setFileMessage("Vui lòng chọn tệp hợp lệ và nhỏ hơn 100MB");
            return false;
        } else {
            return true;
        }
    };

    const validateInput = () => {
        validateName();
        validateIntroduction();
        validateCategory();
        validateField();
        setIsFileValid(validateFile());

        if (!isNameValid || !isIntroductionValid || !isCategoryValid || !isFieldValid || !validateFile()) {
            return false;
        } else {
            return true;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateInput()) {
            setIsLoading(true);

            try {
                const document = {
                    docName: name,
                    docIntroduction: introduction,
                    internal: isInternal,
                    orgId: currentUser.organization.orgId,
                    categoryId: categoryId,
                    fieldId: fieldId,
                };

                const formData = new FormData();
                formData.append("document", JSON.stringify(document));
                formData.append("file", selectedFile);

                const config = {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                };

                const response = await uploadNewDocument(formData, config);

                setIsLoading(false);

                if (response.status === 200) {
                    setStatus(1);
                    setTimeout(() => {
                        navigate(-1);
                    }, 2000);
                } else {
                    setStatus(-1);
                    setTimeout(() => {
                        setStatus(0);
                    }, 2000);
                }
            } catch (error) {
                navigate("/error-500")
            }
        } else {
            setIsLoading(false);
        }
    };

    return (
        <div className="p-4 bg-gray-50 overflow-auto">
            <div className=" w-full grid place-items-center ">
                <h1 className="mb-10 text-3xl font-bold dark:text-white mt-10 ">Chia sẻ tài liệu với bạn bè</h1>

                {status === -1 && (
                    <Toast className="top-1/4 right-5 w-100 fixed z-50">
                        <HiExclamation className="h-5 w-5 text-amber-400 dark:text-amber-300" />
                        <div className="pl-4 text-sm font-normal">Đã xảy ra lỗi! Xin vui lòng thử lại!</div>
                    </Toast>
                )}

                {status === 1 && (
                    <Toast className="top-1/4 right-5 fixed w-100 z-50">
                        <HiOutlineCloudUpload className="h-5 w-5 text-green-600 dark:text-green-500" />
                        <div className="pl-4 text-sm font-normal">Tải lên thành công!</div>
                    </Toast>
                )}

                <div className="flex w-7/12">
                    <div className="w-full rounded-lg shadow-lg bg-white p-10 border border-gray-50 mb-10">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-6">
                                <label htmlFor="website-admin" className="block mb-2 text-sm font-medium dark:text-white">
                                    Tên tài liệu
                                </label>
                                <div className="flex">
                                    <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                        <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                            <path d="M18 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3.546l3.2 3.659a1 1 0 0 0 1.506 0L13.454 14H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-8 10H5a1 1 0 0 1 0-2h5a1 1 0 1 1 0 2Zm5-4H5a1 1 0 0 1 0-2h10a1 1 0 1 1 0 2Z" />
                                        </svg>
                                    </span>
                                    <input
                                        type="text"
                                        id="website-admin"
                                        className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-200 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Nhập tên tài liệu..."
                                        minLength={1}
                                        maxLength={255}
                                        required
                                        onChange={(e) => {
                                            setName(e.target.value);
                                        }}
                                        value={name}
                                    />
                                </div>
                                {!isNameValid && <p className="block mt-2 text-sm font-medium text-red-600 italic">* Vui lòng nhập tên</p>}
                            </div>

                            <div className="mb-6">
                                <label htmlFor="message" className="block mb-2 text-sm font-medium dark:text-white">
                                    Giới thiệu
                                </label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Nhập giới thiệu..."
                                    required
                                    onChange={(e) => {
                                        setIntroduction(e.target.value);
                                    }}
                                    value={introduction}></textarea>
                                {!isIntroductionValid && <p className="block mt-2 text-sm font-medium text-red-600 italic">* Vui lòng nhập mô tả</p>}
                            </div>

                            <div className="mb-6">
                                {" "}
                                <Select
                                    selectName="Danh mục"
                                    options={categoryList}
                                    selectedValue={categoryId}
                                    onChangeHandler={(e) => {
                                        setCategoryId(e.target.value);
                                    }}
                                    name="categoryName"
                                    field="categoryId"
                                    required
                                />
                                {!isCategoryValid && <p className="block mt-2 text-sm font-medium text-red-600 italic">* Vui lòng chọn danh mục</p>}
                            </div>

                            <div className="mb-6">
                                <Select
                                    selectName="Lĩnh vực"
                                    options={fieldList}
                                    selectedValue={fieldId}
                                    onChangeHandler={(e) => {
                                        setFieldId(e.target.value);
                                    }}
                                    name="fieldName"
                                    field="fieldId"
                                    required
                                />
                                {!isFieldValid && <p className="block mt-2 text-sm font-medium text-red-600 italic">* Vui lòng chọn lĩnh vực</p>}
                            </div>

                            <div className="mb-6 mt-6">
                                <label className="block mb-2 text-sm font-medium dark:text-white">Chọn đối tượng xem tài liệu</label>
                                <label className="block mb-2 text-xs font-normal italic dark:text-white">* Công khai dành cho tất cả mọi người, nội bộ chỉ dành cho trong trường</label>
                                <div className="flex gap-x-6">
                                    <div className="flex">
                                        <input
                                            type="radio"
                                            name="hs-radio-group"
                                            className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                            id="hs-radio-group-1"
                                            checked={!isInternal}
                                            value="false"
                                            onChange={() => setIsInternal(false)}
                                        />
                                        <label htmlFor="hs-radio-group-1" className="text-sm text-gray-500 ms-2 dark:text-gray-400">
                                            Công khai
                                        </label>
                                    </div>

                                    <div className="flex">
                                        <input
                                            type="radio"
                                            name="hs-radio-group"
                                            className="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                            id="hs-radio-group-2"
                                            checked={isInternal}
                                            value="true"
                                            onChange={() => setIsInternal(true)}
                                        />
                                        <label htmlFor="hs-radio-group-2" className="text-sm text-gray-500 ms-2 dark:text-gray-400">
                                            Nội bộ
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-6">
                                <label htmlFor="dropzone-file" className="block mb-2 text-sm font-medium dark:text-white">
                                    Chọn tệp <span className="font-normal text-xs"> (Ảnh xem trước sẽ được tạo tự động)</span>
                                </label>
                                <div className="flex items-center justify-center w-full">
                                    <label
                                        htmlFor="dropzone-file"
                                        className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                            </svg>
                                            <p className="mb-2 text-medium text-green-500 dark:text-gray-400">
                                                <span className="font-semibold">Nhấn để tải lên</span>
                                            </p>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">{selectedFile ? `Tệp đã chọn: ${selectedFile.name}` : "PDF (tối đa 100MB)"}</p>
                                        </div>
                                        <input id="dropzone-file" type="file" className="hidden" accept=".pdf" onChange={handleFileChange} />
                                    </label>
                                </div>
                                {!isFileValid && <p className="block mt-2 text-sm font-medium text-red-600 italic">* {fileMessage}</p>}
                            </div>

                            <div className="flex flex-wrap gap-2">
                                <Button disabled={isLoading} color="failure" className="w-auto rounded-full" onClick={() => navigate(-1)}>
                                    <HiChevronLeft className="mr-2 h-5 w-5" />
                                    Huỷ bỏ
                                </Button>

                                <Button type="submit" isProcessing={isLoading} className="w-auto rounded-full bg-green-400  enabled:hover:bg-green-600 focus:ring-green-600">
                                    Tải lên
                                    <HiChevronUp className="ml-2 h-5 w-5" />
                                </Button>
                            </div>
                        </form>
                    </div>

                    {/* <div className="w-[15%] fixed rounded-lg shadow-lg bg-white p-10 ml-4 right-5 border border-gray-50">
                        <ol className="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">
                            <li className="mb-20 ms-6 flex items-center">
                                <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
                                    <svg className="w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                                    </svg>
                                </span>
                                <h3 className="font-medium leading-tight ">Thông tin</h3>
                            </li>
                            <li className="mb-20 ms-6 flex items-center">
                                <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                                    <svg className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                                    </svg>
                                </span>
                                <h3 className="font-medium leading-tight">Tệp</h3>
                            </li>
                            <li className="ms-6 flex items-center">
                                <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
                                    <svg className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
                                    </svg>
                                </span>
                                <h3 className="font-medium leading-tight">Hoàn tất</h3>
                            </li>
                        </ol>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default StudentNewDocument;
