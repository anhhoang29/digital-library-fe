import React, {useState} from "react";
import Select from "../../../components/admin/select/Select";

const NewDocument = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const options = [
        { value: 1, name: "Option 1" },
        { value: 2, name: "Option 2" },
        { value: 3, name: "Option 3" },
    ];

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };

    return (
        <div className="grid place-items-center">
            <h1 class="mb-4 text-3xl font-extrabold dark:text-white ">
                 Tài liệu mới
            </h1>
            
            <div className="row w-2/3">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <form>
                                <div className="mb-6">
                                    <label for="website-admin" className="block mb-2 text-sm font-medium dark:text-white">
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
                                            className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Nhập tên tài liệu..."
                                        />
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label for="message" className="block mb-2 text-sm font-medium dark:text-white">
                                        Mô tả
                                    </label>
                                    <textarea
                                        id="message"
                                        rows="4"
                                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Nhập mô tả..."
                                        required></textarea>
                                </div>

                                <Select selectName="Trường học" options={options} />

                                <Select selectName="Danh mục" options={options} />

                                <Select selectName="Lĩnh vực" options={options} />

                                <div className="mb-6">
                                    <label className="block mb-2 text-sm font-medium dark:text-white">Chọn đối tượng xem tài liệu</label>
                                    <label className="block mb-2 text-xs font-normal italic dark:text-white">* Công khai dành cho tất cả mọi người, nội bộ chỉ dành cho trong trường</label>
                                    <div class="flex gap-x-6">
                                        <div class="flex">
                                            <input
                                                type="radio"
                                                name="hs-radio-group"
                                                class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                                id="hs-radio-group-1"
                                                checked
                                            />
                                            <label for="hs-radio-group-1" class="text-sm text-gray-500 ms-2 dark:text-gray-400">
                                                Công khai
                                            </label>
                                        </div>

                                        <div class="flex">
                                            <input
                                                type="radio"
                                                name="hs-radio-group"
                                                class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                                id="hs-radio-group-2"
                                            />
                                            <label for="hs-radio-group-2" class="text-sm text-gray-500 ms-2 dark:text-gray-400">
                                                Nội bộ
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label for="dropzone-file" className="block mb-2 text-sm font-medium dark:text-white">
                                        Chọn tệp
                                    </label>
                                    <div className="flex items-center justify-center w-full">
                                        <label
                                            for="dropzone-file"
                                            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                                </svg>
                                                <p className="mb-2 text-medium text-green-500 dark:text-gray-400">
                                                    <span className="font-semibold">Nhấn để tải lên</span> hoặc kéo thả
                                                </p>
                                                <p className="text-sm text-gray-500 dark:text-gray-400">{selectedFile ? `Selected file: ${selectedFile.name}` : "PDF (tối đa 100MB)"}</p>
                                            </div>
                                            <input id="dropzone-file" type="file" className="hidden" accept=".pdf" onChange={handleFileChange} />
                                        </label>
                                    </div>
                                </div>

                                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    Đăng tài liệu
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewDocument;
