import React, { useState, useEffect } from "react";

const DetailDocument = () => {
    const [pdfUrl, setPdfUrl] = useState("");

    useEffect(() => {
        const fetchPdf = async () => {
            const fileId = "1dCzcoQ0qUjaLwR5oGCZG0P8M-rLn1tKc";
            const driveUrl = `https://drive.google.com/uc?id=${fileId}`;

            try {
                const response = await fetch(driveUrl);
                const blob = await response.blob();
                const blobUrl = URL.createObjectURL(blob);
                setPdfUrl(blobUrl);
            } catch (error) {
                console.error("Error fetching PDF from Google Drive:", error);
            }
        };

        fetchPdf();
    }, []);

    return (
        <div>
            <div className="row">
                <div className="col-12 flex">
                    <div className="card w-1/3 mr-5">
                        <div className="card__body">
                            <div class="mb-8 ">
                                <h2 class="max-w-xl mt-2 mb-6 text-2xl font-bold dark:text-gray-400 md:text-2xl">Cấu trúc dữ liệu và giải thuật</h2>
                                <div class="flex items-center mb-6">
                                    <ul class="flex mr-2">
                                        <li>
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star " viewBox="0 0 16 16">
                                                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star " viewBox="0 0 16 16">
                                                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star " viewBox="0 0 16 16">
                                                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                                </svg>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star " viewBox="0 0 16 16">
                                                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                                </svg>
                                            </a>
                                        </li>
                                    </ul>
                                    <p class="text-xs dark:text-gray-400 ">(2 customer reviews)</p>
                                </div>
                                <p class="max-w-md mb-8 text-gray-700 dark:text-gray-400 text-sm">Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet Lorem ispum dor amet</p>

                                <p class="text-green-600 dark:text-green-300 ">7 in stock</p>
                            </div>

                            <div className="mb-5">
                                <div class="flex items-center mb-2 font-bold">
                                    <svg className="w-4 h-4 mr-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                        <path d="M17 16h-1V2a1 1 0 1 0 0-2H2a1 1 0 0 0 0 2v14H1a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM5 4a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4Zm0 5V8a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1Zm6 7H7v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3Zm2-7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1Zm0-4a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1Z" />
                                    </svg>
                                    <span className="block text-base font-medium dark:text-white">Trường</span>
                                </div>
                                <div className="block mb-2 text-base font-medium text-sky-500 dark:text-white">Trường ĐHSPKT TPHCM</div>
                            </div>

                            <div className="mb-5">
                                <div class="flex items-center mb-2 font-bold">
                                    <svg className="w-4 h-4 mr-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                        <path d="M18 5H0v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5Zm-7.258-2L9.092.8a2.009 2.009 0 0 0-1.6-.8H2.049a2 2 0 0 0-2 2v1h10.693Z" />
                                    </svg>
                                    <span className="block text-base font-medium dark:text-white">Danh mục</span>
                                </div>
                                <div className="block mb-2 text-base font-medium text-sky-500 dark:text-white">Giáo trình</div>
                            </div>

                            <div className="mb-5">
                                <div class="flex items-center mb-2 font-bold">
                                    <svg className="w-4 h-4 mr-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h3V0H2Zm16 0h-3v16h3a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 0H7v16h6V0Z" />
                                    </svg>
                                    <span className="block text-base font-medium dark:text-white">Lĩnh vực</span>
                                </div>
                                <div className="block mb-2 text-base font-medium text-sky-500 dark:text-white">Công nghệ thông tin</div>
                            </div>

                            <div className="mb-5">
                                <div class="flex items-center mb-2 font-bold">
                                    <svg className="w-4 h-4 mr-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 18">
                                        <path d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                                    </svg>
                                    <span className="block text-base font-medium dark:text-white">Người tải lên</span>
                                </div>
                                <div className="block mb-2 text-base font-medium text-sky-500 dark:text-white">Lê Anh Tú </div>
                            </div>

                            <div className="mb-5">
                                <div class="flex items-center mb-2 font-bold">
                                    <svg className="w-4 h-4 mr-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                        <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z" />
                                    </svg>
                                    <span className="block text-base font-medium dark:text-white">Lượt thích</span>
                                </div>
                                <div className="block mb-2 text-base font-medium text-sky-500 dark:text-white">Lê Anh Tú </div>
                            </div>

                            <div className="mb-5">
                                <div class="flex items-center mb-2 font-bold">
                                    <svg className="w-4 h-4 mr-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                        <path d="M18 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3.546l3.2 3.659a1 1 0 0 0 1.506 0L13.454 14H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-8 10H5a1 1 0 0 1 0-2h5a1 1 0 1 1 0 2Zm5-4H5a1 1 0 0 1 0-2h10a1 1 0 1 1 0 2Z" />
                                    </svg>
                                    <span className="block text-base font-medium dark:text-white">Lượt đánh giá</span>
                                </div>
                                <div className="block mb-2 text-base font-medium text-sky-500 dark:text-white">Lê Anh Tú </div>
                            </div>
                        </div>
                    </div>

                    <div>

                    </div>

                    <div className="w-2/3">
                        <iframe title="Hiển thị tài liệu PDF" className="h-300" src="https://drive.google.com/uc?id=1dCzcoQ0qUjaLwR5oGCZG0P8M-rLn1tKc" width="100%" height="500px"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailDocument;
