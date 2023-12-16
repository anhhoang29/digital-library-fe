import * as React from "react";

function Menu(props) {
    return (
        // pl-10 w-full bg-gradient-to-b from-white via-gray-100 to-gray-100 rounded-tr-[10px] border justify-end inline-flex
        <div className="pl-12 pr-7 py-7 bg-gradient-to-b rounded-none max-md:px-5">
            <header className="header gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <section className="section flex flex-col items-stretch w-[49%] max-md:w-full max-md:ml-0">
                    <div className="shadow-sm bg-white flex w-full grow items-stretch justify-between gap-5 mt-2 mx-auto pr-3 rounded-[40px] max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                        <div className="flex items-stretch justify-between gap-5">
                            <div className="bg-slate-50 flex items-stretch justify-between gap-5 pl-10 pr-3 py-4 rounded-[40px_0px_0px_40px] max-md:pl-5">
                                <h1 className="text-neutral-600 text-xl leading-6">All</h1>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4601a289aa75a63b3d2caf3aa03afc25497e232ca3bb704d17085ab7ad468df0?apiKey=8f3ef2aee7df426ebef0e2cd7797def8&"
                                    className="aspect-[1.57] object-contain object-center w-[11px] fill-neutral-600 overflow-hidden self-center shrink-0 max-w-full my-auto"
                                    alt="all"
                                />
                            </div>
                            <input
                                type="search"
                                placeholder="Search"
                                className=" w-full text-stone-300 text-xl leading-6 my-auto border-none" />
                        </div>
                        <div className="self-center flex items-stretch gap-2.5 my-auto max-md:justify-center">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf31d901d39d74a47f360d4681f5ae0f62b3b060c113786b1bd37df2dcf9bb47?apiKey=8f3ef2aee7df426ebef0e2cd7797def8&"
                                className="aspect-square object-contain object-center w-5 overflow-hidden self-center shrink-0 max-w-full my-auto"
                                alt="image1"
                            />
                            <div className="bg-zinc-300 w-px shrink-0 h-[33px]" />
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/950017870bb80037a4314e24000cf90e3c3135c2e7cdc1b41e2d21443332c21c?apiKey=8f3ef2aee7df426ebef0e2cd7797def8&"
                                className="aspect-square object-contain object-center w-5 overflow-hidden self-center shrink-0 max-w-full my-auto"
                                alt="image2"
                            />
                        </div>
                    </div>
                </section>
                <section className="section flex flex-col items-stretch w-[51%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="flex grow justify-between gap-5 items-start max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                        <div className="shadow-sm bg-white flex items-stretch justify-between gap-5 mt-2 pl-14 pr-12 py-3.5 rounded-[40px] max-md:max-w-full max-md:flex-wrap max-md:px-5">
                            <div className="items-stretch flex justify-between gap-1.5">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7de3cd33f7e8a7b32e423c88c748bc9b14af2a7583f3756e518c68afc3d77d45?apiKey=8f3ef2aee7df426ebef0e2cd7797def8&"
                                    className="aspect-square object-contain object-center w-[19px] overflow-hidden shrink-0 max-w-full"
                                    alt="image3"
                                />
                                <div className="text-neutral-600 text-center text-base leading-5 tracking-tighter grow whitespace-nowrap">
                                    09:00 AM
                                </div>
                            </div>
                            <div className="items-stretch flex justify-between gap-1.5">
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec4e64b8458ff26e6325236f57b06611c6130038827ac9600342bbd7103d1dc9?apiKey=8f3ef2aee7df426ebef0e2cd7797def8&"
                                    className="aspect-square object-contain object-center w-[19px] fill-red-400 overflow-hidden shrink-0 max-w-full"
                                    alt="image4"
                                />
                                <div className="text-neutral-600 text-center text-base leading-5 tracking-tighter grow whitespace-nowrap">
                                    4-Mar-2023
                                </div>
                            </div>
                        </div>
                        <div className="shadow-sm bg-white flex items-stretch gap-1 pl-1 pr-8 py-1 rounded-[33px] max-md:justify-center max-md:pr-5">
                            <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1d6970563b53d250797f57f4cf0dcca676b5a942de8a7c6ef483bfce6b5af316?apiKey=8f3ef2aee7df426ebef0e2cd7797def8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d6970563b53d250797f57f4cf0dcca676b5a942de8a7c6ef483bfce6b5af316?apiKey=8f3ef2aee7df426ebef0e2cd7797def8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d6970563b53d250797f57f4cf0dcca676b5a942de8a7c6ef483bfce6b5af316?apiKey=8f3ef2aee7df426ebef0e2cd7797def8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d6970563b53d250797f57f4cf0dcca676b5a942de8a7c6ef483bfce6b5af316?apiKey=8f3ef2aee7df426ebef0e2cd7797def8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d6970563b53d250797f57f4cf0dcca676b5a942de8a7c6ef483bfce6b5af316?apiKey=8f3ef2aee7df426ebef0e2cd7797def8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d6970563b53d250797f57f4cf0dcca676b5a942de8a7c6ef483bfce6b5af316?apiKey=8f3ef2aee7df426ebef0e2cd7797def8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d6970563b53d250797f57f4cf0dcca676b5a942de8a7c6ef483bfce6b5af316?apiKey=8f3ef2aee7df426ebef0e2cd7797def8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1d6970563b53d250797f57f4cf0dcca676b5a942de8a7c6ef483bfce6b5af316?apiKey=8f3ef2aee7df426ebef0e2cd7797def8&" className="aspect-square object-contain object-center w-[45px] overflow-hidden shrink-0 max-w-full rounded-[50%]"
                                alt="image5"
                            />
                            <div className="text-neutral-600 text-xl leading-6 my-auto">
                                Hoang Anh
                            </div>
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4601a289aa75a63b3d2caf3aa03afc25497e232ca3bb704d17085ab7ad468df0?apiKey=8f3ef2aee7df426ebef0e2cd7797def8&"
                                className="aspect-[1.57] object-contain object-center w-[11px] fill-neutral-600 overflow-hidden self-center shrink-0 max-w-full my-auto"
                                alt="image6"
                            />
                        </div>
                    </div>
                </section>
            </header>
        </div>
    );
}

export default Menu;