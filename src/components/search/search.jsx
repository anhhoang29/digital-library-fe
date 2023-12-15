import { React } from 'react';



function Search() {
    return (
        <div className="w-[1920px] h-[1080px] relative bg-white">
            <div className="w-[1544px] h-[994px] left-[341px] top-[48px] absolute rounded-[10px]">
                <div className="w-[1544px] h-[1957px] left-0 top-0 absolute bg-gray-100 rounded-tr-[10px] rounded-br-[10px]" />
                <div className="w-[1158px] h-[29px] left-[44px] top-[239px] absolute">
                    <div className="w-[90px] h-[29px] left-0 top-0 absolute text-neutral-600 text-xl font-medium font-['Inter'] leading-relaxed">Title</div>
                    <div className="w-[72px] h-[29px] left-[442px] top-0 absolute text-neutral-600 text-xl font-medium font-['Inter'] leading-relaxed">Ratings</div>
                    <div className="w-[90px] h-[29px] left-[575px] top-0 absolute text-neutral-600 text-xl font-medium font-['Inter'] leading-relaxed">Category</div>
                    <div className="w-[105px] h-[29px] left-[843px] top-0 absolute text-neutral-600 text-xl font-medium font-['Inter'] leading-relaxed">Availability</div>
                    <div className="w-[105px] h-[26px] left-[1053px] top-0 absolute text-neutral-600 text-xl font-medium font-['Inter'] leading-relaxed">Status</div>
                </div>
                <div className="w-[1454px] h-[125px] left-[44px] top-[291px] absolute">
                    <div className="w-[1454px] h-[125px] left-0 top-0 absolute bg-white rounded-[10px]" />
                    <div className="w-[1397px] h-[99px] left-[23px] top-[13px] absolute justify-start items-center gap-[90px] inline-flex">
                        <div className="justify-start items-center gap-[47px] flex">
                            <img className="w-[75px] h-[99px] rounded-[5px] border border-zinc-100" src="https://via.placeholder.com/75x99" />
                            <div className="flex-col justify-start items-start gap-2.5 inline-flex">
                                <div className="flex-col justify-start items-start gap-5 flex">
                                    <div className="w-[207px] h-3.5 text-neutral-600 text-xl font-normal font-['Inter'] leading-relaxed">Don’t Make Me Think </div>
                                    <div className="w-[140px] h-3.5 text-neutral-600 text-[15px] font-normal font-['Inter'] leading-tight">Steve Krug, 2000</div>
                                </div>
                                <div className="w-[140px] h-3.5 text-neutral-600 text-[10px] font-normal font-['Inter'] leading-[12.85px]">Second Edition</div>
                            </div>
                        </div>
                        <div className="justify-start items-center gap-[72px] flex">
                            <div className="w-[60px] h-[27px]"><span style="text-neutral-600 text-xl font-normal font-['Inter'] leading-relaxed">4.5</span><span style="text-neutral-400 text-[15px] font-normal font-['Inter'] leading-tight">/5</span></div>
                            <div className="w-[180px] relative">
                                <div className="w-[180px] h-[27px] left-0 top-0 absolute text-neutral-600 text-xl font-normal font-['Inter'] leading-relaxed">Computer Science</div>
                                <div className="w-[180px] h-[19px] left-0 top-[38px] absolute text-neutral-600 text-[15px] font-normal font-['Inter'] leading-tight">UX Design</div>
                            </div>
                        </div>
                        <div className="justify-start items-center gap-[102px] flex">
                            <div className="flex-col justify-start items-start gap-2 inline-flex">
                                <div className="justify-start items-center gap-2 inline-flex">
                                    <div className="w-[84px] h-[18px] text-neutral-600 text-[15px] font-normal font-['Inter']">Hard Copy</div>
                                </div>
                                <div className="justify-start items-center gap-[7px] inline-flex">
                                    <div className="w-[84px] h-5 text-neutral-600 text-[15px] font-normal font-['Inter'] leading-snug">E - Book</div>
                                </div>
                                <div className="justify-start items-center gap-1.5 inline-flex">
                                    <div className="w-[84px] h-5 text-neutral-600 text-[15px] font-normal font-['Inter'] leading-snug">Audio book</div>
                                </div>
                            </div>
                            <div className="flex-col justify-start items-start gap-[13px] inline-flex">
                                <div className="w-[85px] h-[26px] relative">
                                    <div className="w-[85px] h-[26px] left-0 top-0 absolute bg-green-500 rounded-[5px]" />
                                    <div className="w-[85px] h-[17px] left-0 top-[5px] absolute text-center text-white text-[15px] font-normal font-['Inter']">In-Shelf</div>
                                </div>
                                <div className="justify-start items-start gap-px inline-flex">
                                    <div className="w-5 h-5 relative">
                                        <img className="w-3.5 h-[17px] left-[3px] top-[2px] absolute" src="https://via.placeholder.com/14x17" />
                                    </div>
                                    <div className="w-[77px] h-6 text-neutral-600 text-[15px] font-normal font-['Inter'] leading-snug"> CS A-15</div>
                                </div>
                            </div>
                        </div>
                        <div className="justify-start items-start gap-16 flex">
                            <div className="w-[30px] h-[30px] p-[3px] justify-center items-center flex">
                                <div className="w-6 h-6 relative flex-col justify-start items-start flex" />
                            </div>
                            <div className="w-[85px] h-[30px] relative">
                                <div className="w-[85px] h-[30px] left-0 top-0 absolute rounded-[5px] border border-red-400" />
                                <div className="w-[60px] h-[18px] left-[13px] top-[6px] absolute text-center text-red-400 text-[15px] font-normal font-['Inter']">Preview</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[1454px] h-[125px] left-[44px] top-[439px] absolute">
                    <div className="w-[1454px] h-[125px] left-0 top-0 absolute bg-white rounded-[10px]" />
                    <div className="w-[329px] h-[99px] left-[23px] top-[13px] absolute justify-start items-center gap-[47px] inline-flex">
                        <img className="w-[75px] h-[99px] rounded-[5px] border border-zinc-100" src="https://via.placeholder.com/75x99" />
                        <div className="h-[92px] flex-col justify-between items-start inline-flex">
                            <div className="flex-col justify-start items-start gap-1.5 flex">
                                <div className="w-[207px] h-[54px] text-neutral-600 text-xl font-normal font-['Inter'] leading-relaxed">The Design of EveryDay Things</div>
                                <div className="w-[207px] h-3.5 text-neutral-600 text-[15px] font-normal font-['Inter'] leading-tight">Don Norman, 1988</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[312px] h-[57px] left-[442px] top-[34px] absolute justify-start items-center gap-[72px] inline-flex">
                        <div className="w-[60px] h-[27px]"><span style="text-neutral-600 text-xl font-normal font-['Inter'] leading-relaxed">4.5</span><span style="text-neutral-400 text-[15px] font-normal font-['Inter'] leading-tight">/5</span></div>
                        <div className="w-[180px] relative">
                            <div className="w-[180px] h-[27px] left-0 top-0 absolute text-neutral-600 text-xl font-normal font-['Inter'] leading-relaxed">Computer Science</div>
                            <div className="w-[180px] h-[19px] left-0 top-[38px] absolute text-neutral-600 text-[15px] font-normal font-['Inter'] leading-tight">UX Design</div>
                        </div>
                    </div>
                    <div className="w-[311px] h-[74px] left-[844px] top-[25.50px] absolute justify-start items-center gap-[103px] inline-flex">
                        <div className="flex-col justify-start items-start gap-2 inline-flex">
                            <div className="justify-start items-center gap-[5px] inline-flex">
                                <div className="w-[84px] h-[18px] text-neutral-600 text-[15px] font-normal font-['Inter']">Hard Copy</div>
                            </div>
                            <div className="justify-start items-center gap-1.5 inline-flex">
                                <div className="w-[84px] h-5 text-neutral-600 text-[15px] font-normal font-['Inter'] leading-snug">E - Book</div>
                            </div>
                            <div className="justify-start items-center gap-1.5 inline-flex">
                                <div className="w-[84px] h-5 text-neutral-600 text-[15px] font-normal font-['Inter'] leading-snug">Audio book</div>
                            </div>
                        </div>
                        <div className="flex-col justify-start items-start gap-[13px] inline-flex">
                            <div className="w-[85px] h-[26px] relative">
                                <div className="w-[85px] h-[26px] left-0 top-0 absolute bg-green-500 rounded-[5px]" />
                                <div className="w-[85px] h-[17px] left-0 top-[5px] absolute text-center text-white text-[15px] font-normal font-['Inter']">Borrowed</div>
                            </div>
                            <div className="justify-start items-start gap-[5px] inline-flex">
                                <div className="w-5 h-5 relative" />
                                <div className="w-[77px] h-6 text-neutral-600 text-[15px] font-normal font-['Inter'] leading-snug">Sriram </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-[179px] h-[30px] left-[1241px] top-[47.50px] absolute justify-start items-start gap-16 inline-flex">
                        <div className="w-[30px] h-[30px] p-[3px] justify-center items-center flex">
                            <div className="w-6 h-6 relative flex-col justify-start items-start flex" />
                        </div>
                        <div className="w-[85px] h-[30px] relative">
                            <div className="w-[85px] h-[30px] left-0 top-0 absolute rounded-[5px] border border-red-400" />
                            <div className="w-[60px] h-[18px] left-[13px] top-[6px] absolute text-center text-red-400 text-[15px] font-normal font-['Inter']">Preview</div>
                        </div>
                    </div>
                </div>
                <div className="w-[1454px] h-[125px] left-[44px] top-[587px] absolute">
                    <div className="w-[1454px] h-[125px] left-0 top-0 absolute bg-white rounded-[10px]" />
                    <div className="w-[1397px] h-[99px] left-[23px] top-[13px] absolute justify-start items-center gap-[90px] inline-flex">
                        <div className="justify-start items-center gap-[47px] flex">
                            <img className="w-[75px] h-[99px] rounded-[5px] border border-zinc-100" src="https://via.placeholder.com/75x99" />
                            <div className="flex-col justify-start items-start gap-2.5 inline-flex">
                                <div className="flex-col justify-start items-start gap-5 flex">
                                    <div className="w-[207px] h-3.5 text-neutral-600 text-xl font-normal font-['Inter'] leading-relaxed">Rich Dad Poor Dad</div>
                                    <div className="w-[202px] h-3.5 text-neutral-600 text-[15px] font-normal font-['Inter'] leading-tight">Robert T.Kiyosaki, 1997</div>
                                </div>
                            </div>
                        </div>
                        <div className="justify-start items-center gap-[72px] flex">
                            <div className="w-[60px] h-[27px]"><span style="text-neutral-600 text-xl font-normal font-['Inter'] leading-relaxed">4.5</span><span style="text-neutral-400 text-[15px] font-normal font-['Inter'] leading-tight">/5</span></div>
                            <div className="w-[180px] h-[27px] text-neutral-600 text-xl font-normal font-['Inter'] leading-relaxed">Financial MGMT</div>
                        </div>
                        <div className="justify-start items-center gap-[102px] flex">
                            <div className="flex-col justify-start items-start gap-2 inline-flex">
                                <div className="justify-start items-center gap-2 inline-flex">
                                    <div className="w-[84px] h-[18px] text-neutral-600 text-[15px] font-normal font-['Inter']">Hard Copy</div>
                                </div>
                                <div className="justify-start items-center gap-[7px] inline-flex">
                                    <div className="w-[84px] h-5 text-neutral-600 text-[15px] font-normal font-['Inter'] leading-snug">E - Book</div>
                                </div>
                                <div className="justify-start items-center gap-1.5 inline-flex">
                                    <div className="w-[84px] h-5 text-neutral-600 text-[15px] font-normal font-['Inter'] leading-snug">Audio book</div>
                                </div>
                            </div>
                            <div className="flex-col justify-start items-start gap-[13px] inline-flex">
                                <div className="w-[85px] h-[26px] relative">
                                    <div className="w-[85px] h-[26px] left-0 top-0 absolute bg-green-500 rounded-[5px]" />
                                    <div className="w-[85px] h-[17px] left-0 top-[5px] absolute text-center text-white text-[15px] font-normal font-['Inter']">In-Shelf</div>
                                </div>
                                <div className="justify-start items-start gap-px inline-flex">
                                    <div className="w-5 h-5 relative">
                                        <img className="w-3.5 h-[17px] left-[3px] top-[2px] absolute" src="https://via.placeholder.com/14x17" />
                                    </div>
                                    <div className="w-[77px] h-6 text-neutral-600 text-[15px] font-normal font-['Inter'] leading-snug"> CS A-15</div>
                                </div>
                            </div>
                        </div>
                        <div className="justify-start items-start gap-16 flex">
                            <div className="w-[30px] h-[30px] p-[3px] justify-center items-center flex">
                                <div className="w-6 h-6 relative flex-col justify-start items-start flex" />
                            </div>
                            <div className="w-[85px] h-[30px] relative">
                                <div className="w-[85px] h-[30px] left-0 top-0 absolute rounded-[5px] border border-red-400" />
                                <div className="w-[60px] h-[18px] left-[13px] top-[6px] absolute text-center text-red-400 text-[15px] font-normal font-['Inter']">Preview</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[1454px] h-[125px] left-[44px] top-[735px] absolute">
                    <div className="w-[1454px] h-[125px] left-0 top-0 absolute bg-white rounded-[10px]" />
                    <div className="w-[1397px] h-[99px] left-[23px] top-[13px] absolute justify-start items-center gap-[90px] inline-flex">
                        <div className="justify-start items-center gap-[47px] flex">
                            <img className="w-[75px] h-[99px] rounded-[5px] border border-zinc-100" src="https://via.placeholder.com/75x99" />
                            <div className="flex-col justify-start items-start gap-2.5 inline-flex">
                                <div className="flex-col justify-start items-start gap-5 flex">
                                    <div className="w-[207px] h-3.5 text-neutral-600 text-xl font-normal font-['Inter'] leading-relaxed">Don’t Make Me Think </div>
                                    <div className="w-[140px] h-3.5 text-neutral-600 text-[15px] font-normal font-['Inter'] leading-tight">Steve Krug, 2000</div>
                                </div>
                                <div className="w-[140px] h-3.5 text-neutral-600 text-[10px] font-normal font-['Inter'] leading-[12.85px]">Second Edition</div>
                            </div>
                        </div>
                        <div className="justify-start items-center gap-[72px] flex">
                            <div className="w-[60px] h-[27px]"><span style="text-neutral-600 text-xl font-normal font-['Inter'] leading-relaxed">4.5</span><span style="text-neutral-400 text-[15px] font-normal font-['Inter'] leading-tight">/5</span></div>
                            <div className="w-[180px] relative">
                                <div className="w-[180px] h-[27px] left-0 top-0 absolute text-neutral-600 text-xl font-normal font-['Inter'] leading-relaxed">Computer Science</div>
                                <div className="w-[180px] h-[19px] left-0 top-[38px] absolute text-neutral-600 text-[15px] font-normal font-['Inter'] leading-tight">UX Design</div>
                            </div>
                        </div>
                        <div className="justify-start items-center gap-[102px] flex">
                            <div className="flex-col justify-start items-start gap-2 inline-flex">
                                <div className="justify-start items-center gap-2 inline-flex">
                                    <div className="w-[84px] h-[18px] text-neutral-600 text-[15px] font-normal font-['Inter']">Hard Copy</div>
                                </div>
                                <div className="justify-start items-center gap-[7px] inline-flex">
                                    <div className="w-[84px] h-5 text-neutral-600 text-[15px] font-normal font-['Inter'] leading-snug">E - Book</div>
                                </div>
                                <div className="justify-start items-center gap-1.5 inline-flex">
                                    <div className="w-[84px] h-5 text-neutral-600 text-[15px] font-normal font-['Inter'] leading-snug">Audio book</div>
                                </div>
                            </div>
                            <div className="flex-col justify-start items-start gap-[13px] inline-flex">
                                <div className="w-[85px] h-[26px] relative">
                                    <div className="w-[85px] h-[26px] left-0 top-0 absolute bg-green-500 rounded-[5px]" />
                                    <div className="w-[85px] h-[17px] left-0 top-[5px] absolute text-center text-white text-[15px] font-normal font-['Inter']">In-Shelf</div>
                                </div>
                                <div className="justify-start items-start gap-px inline-flex">
                                    <div className="w-5 h-5 relative">
                                        <img className="w-3.5 h-[17px] left-[3px] top-[2px] absolute" src="https://via.placeholder.com/14x17" />
                                    </div>
                                    <div className="w-[77px] h-6 text-neutral-600 text-[15px] font-normal font-['Inter'] leading-snug"> CS A-15</div>
                                </div>
                            </div>
                        </div>
                        <div className="justify-start items-start gap-16 flex">
                            <div className="w-[30px] h-[30px] p-[3px] justify-center items-center flex">
                                <div className="w-6 h-6 relative flex-col justify-start items-start flex" />
                            </div>
                            <div className="w-[85px] h-[30px] relative">
                                <div className="w-[85px] h-[30px] left-0 top-0 absolute rounded-[5px] border border-red-400" />
                                <div className="w-[60px] h-[18px] left-[13px] top-[6px] absolute text-center text-red-400 text-[15px] font-normal font-['Inter']">Preview</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[1454px] h-[125px] left-[44px] top-[883px] absolute">
                    <div className="w-[1454px] h-[125px] left-0 top-0 absolute bg-white rounded-[10px]" />
                    <div className="w-[1397px] h-[99px] left-[23px] top-[13px] absolute justify-start items-center gap-[90px] inline-flex">
                        <div className="justify-start items-center gap-[47px] flex">
                            <img className="w-[75px] h-[99px] rounded-[5px] border border-zinc-100" src="https://via.placeholder.com/75x99" />
                            <div className="flex-col justify-start items-start gap-2.5 inline-flex">
                                <div className="flex-col justify-start items-start gap-5 flex">
                                    <div className="w-[207px] h-3.5 text-neutral-600 text-xl font-normal font-['Inter'] leading-relaxed">Don’t Make Me Think </div>
                                    <div className="w-[140px] h-3.5 text-neutral-600 text-[15px] font-normal font-['Inter'] leading-tight">Steve Krug, 2000</div>
                                </div>
                                <div className="w-[140px] h-3.5 text-neutral-600 text-[10px] font-normal font-['Inter'] leading-[12.85px]">Second Edition</div>
                            </div>
                        </div>
                        <div className="justify-start items-center gap-[72px] flex">
                            <div className="w-[60px] h-[27px]"><span style="text-neutral-600 text-xl font-normal font-['Inter'] leading-relaxed">4.5</span><span style="text-neutral-400 text-[15px] font-normal font-['Inter'] leading-tight">/5</span></div>
                            <div className="w-[180px] relative">
                                <div className="w-[180px] h-[27px] left-0 top-0 absolute text-neutral-600 text-xl font-normal font-['Inter'] leading-relaxed">Computer Science</div>
                                <div className="w-[180px] h-[19px] left-0 top-[38px] absolute text-neutral-600 text-[15px] font-normal font-['Inter'] leading-tight">UX Design</div>
                            </div>
                        </div>
                        <div className="justify-start items-center gap-[102px] flex">
                            <div className="flex-col justify-start items-start gap-2 inline-flex">
                                <div className="justify-start items-center gap-2 inline-flex">
                                    <div className="w-[84px] h-[18px] text-neutral-600 text-[15px] font-normal font-['Inter']">Hard Copy</div>
                                </div>
                                <div className="justify-start items-center gap-[7px] inline-flex">
                                    <div className="w-[84px] h-5 text-neutral-600 text-[15px] font-normal font-['Inter'] leading-snug">E - Book</div>
                                </div>
                                <div className="justify-start items-center gap-1.5 inline-flex">
                                    <div className="w-[84px] h-5 text-neutral-600 text-[15px] font-normal font-['Inter'] leading-snug">Audio book</div>
                                </div>
                            </div>
                            <div className="flex-col justify-start items-start gap-[13px] inline-flex">
                                <div className="w-[85px] h-[26px] relative">
                                    <div className="w-[85px] h-[26px] left-0 top-0 absolute bg-green-500 rounded-[5px]" />
                                    <div className="w-[85px] h-[17px] left-0 top-[5px] absolute text-center text-white text-[15px] font-normal font-['Inter']">In-Shelf</div>
                                </div>
                                <div className="justify-start items-start gap-px inline-flex">
                                    <div className="w-5 h-5 relative">
                                        <img className="w-3.5 h-[17px] left-[3px] top-[2px] absolute" src="https://via.placeholder.com/14x17" />
                                    </div>
                                    <div className="w-[77px] h-6 text-neutral-600 text-[15px] font-normal font-['Inter'] leading-snug"> CS A-15</div>
                                </div>
                            </div>
                        </div>
                        <div className="justify-start items-start gap-16 flex">
                            <div className="w-[30px] h-[30px] p-[3px] justify-center items-center flex">
                                <div className="w-6 h-6 relative flex-col justify-start items-start flex" />
                            </div>
                            <div className="w-[85px] h-[30px] relative">
                                <div className="w-[85px] h-[30px] left-0 top-0 absolute rounded-[5px] border border-red-400" />
                                <div className="w-[60px] h-[18px] left-[13px] top-[6px] absolute text-center text-red-400 text-[15px] font-normal font-['Inter']">Preview</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[1454px] h-[125px] left-[44px] top-[1031px] absolute">
                    <div className="w-[1454px] h-[125px] left-0 top-0 absolute bg-white rounded-[10px]" />
                    <div className="w-[1397px] h-[99px] left-[23px] top-[13px] absolute justify-start items-center gap-[90px] inline-flex">
                        <div className="justify-start items-center gap-[47px] flex">
                            <img className="w-[75px] h-[99px] rounded-[5px] border border-zinc-100" src="https://via.placeholder.com/75x99" />
                            <div className="flex-col justify-start items-start gap-2.5 inline-flex">
                                <div className="flex-col justify-start items-start gap-5 flex">
                                    <div className="w-[207px] h-3.5 text-neutral-600 text-xl font-normal font-['Inter'] leading-relaxed">Don’t Make Me Think </div>
                                    <div className="w-[140px] h-3.5 text-neutral-600 text-[15px] font-normal font-['Inter'] leading-tight">Steve Krug, 2000</div>
                                </div>
                                <div className="w-[140px] h-3.5 text-neutral-600 text-[10px] font-normal font-['Inter'] leading-[12.85px]">Second Edition</div>
                            </div>
                        </div>
                        <div className="justify-start items-center gap-[72px] flex">
                            <div className="w-[60px] h-[27px]"><span style="text-neutral-600 text-xl font-normal font-['Inter'] leading-relaxed">4.5</span><span style="text-neutral-400 text-[15px] font-normal font-['Inter'] leading-tight">/5</span></div>
                            <div className="w-[180px] relative">
                                <div className="w-[180px] h-[27px] left-0 top-0 absolute text-neutral-600 text-xl font-normal font-['Inter'] leading-relaxed">Computer Science</div>
                                <div className="w-[180px] h-[19px] left-0 top-[38px] absolute text-neutral-600 text-[15px] font-normal font-['Inter'] leading-tight">UX Design</div>
                            </div>
                        </div>
                        <div className="justify-start items-center gap-[102px] flex">
                            <div className="flex-col justify-start items-start gap-2 inline-flex">
                                <div className="justify-start items-center gap-2 inline-flex">
                                    <div className="w-[84px] h-[18px] text-neutral-600 text-[15px] font-normal font-['Inter']">Hard Copy</div>
                                </div>
                                <div className="justify-start items-center gap-[7px] inline-flex">
                                    <div className="w-[84px] h-5 text-neutral-600 text-[15px] font-normal font-['Inter'] leading-snug">E - Book</div>
                                </div>
                                <div className="justify-start items-center gap-1.5 inline-flex">
                                    <div className="w-[84px] h-5 text-neutral-600 text-[15px] font-normal font-['Inter'] leading-snug">Audio book</div>
                                </div>
                            </div>
                            <div className="flex-col justify-start items-start gap-[13px] inline-flex">
                                <div className="w-[85px] h-[26px] relative">
                                    <div className="w-[85px] h-[26px] left-0 top-0 absolute bg-green-500 rounded-[5px]" />
                                    <div className="w-[85px] h-[17px] left-0 top-[5px] absolute text-center text-white text-[15px] font-normal font-['Inter']">In-Shelf</div>
                                </div>
                                <div className="justify-start items-start gap-px inline-flex">
                                    <div className="w-5 h-5 relative">
                                        <img className="w-3.5 h-[17px] left-[3px] top-[2px] absolute" src="https://via.placeholder.com/14x17" />
                                    </div>
                                    <div className="w-[77px] h-6 text-neutral-600 text-[15px] font-normal font-['Inter'] leading-snug"> CS A-15</div>
                                </div>
                            </div>
                        </div>
                        <div className="justify-start items-start gap-16 flex">
                            <div className="w-[30px] h-[30px] p-[3px] justify-center items-center flex">
                                <div className="w-6 h-6 relative flex-col justify-start items-start flex" />
                            </div>
                            <div className="w-[85px] h-[30px] relative">
                                <div className="w-[85px] h-[30px] left-0 top-0 absolute rounded-[5px] border border-red-400" />
                                <div className="w-[60px] h-[18px] left-[13px] top-[6px] absolute text-center text-red-400 text-[15px] font-normal font-['Inter']">Preview</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[1454px] h-[125px] left-[44px] top-[1179px] absolute">
                    <div className="w-[1454px] h-[125px] left-0 top-0 absolute bg-white rounded-[10px]" />
                    <div className="w-[1397px] h-[99px] left-[23px] top-[13px] absolute justify-start items-center gap-[90px] inline-flex">
                        <div className="justify-start items-center gap-[47px] flex">
                            <img className="w-[75px] h-[99px] rounded-[5px] border border-zinc-100" src="https://via.placeholder.com/75x99" />
                            <div className="flex-col justify-start items-start gap-2.5 inline-flex">
                                <div className="flex-col justify-start items-start gap-5 flex">
                                    <div className="w-[207px] h-3.5 text-neutral-600 text-xl font-normal font-['Inter'] leading-relaxed">Don’t Make Me Think </div>
                                    <div className="w-[140px] h-3.5 text-neutral-600 text-[15px] font-normal font-['Inter'] leading-tight">Steve Krug, 2000</div>
                                </div>
                                <div className="w-[140px] h-3.5 text-neutral-600 text-[10px] font-normal font-['Inter'] leading-[12.85px]">Second Edition</div>
                            </div>
                        </div>
                        <div className="justify-start items-center gap-[72px] flex">
                            <div className="w-[60px] h-[27px]"><span style="text-neutral-600 text-xl font-normal font-['Inter'] leading-relaxed">4.5</span><span style="text-neutral-400 text-[15px] font-normal font-['Inter'] leading-tight">/5</span></div>
                            <div className="w-[180px] relative">
                                <div className="w-[180px] h-[27px] left-0 top-0 absolute text-neutral-600 text-xl font-normal font-['Inter'] leading-relaxed">Computer Science</div>
                                <div className="w-[180px] h-[19px] left-0 top-[38px] absolute text-neutral-600 text-[15px] font-normal font-['Inter'] leading-tight">UX Design</div>
                            </div>
                        </div>
                        <div className="justify-start items-center gap-[102px] flex">
                            <div className="flex-col justify-start items-start gap-2 inline-flex">
                                <div className="justify-start items-center gap-2 inline-flex">
                                    <div className="w-[84px] h-[18px] text-neutral-600 text-[15px] font-normal font-['Inter']">Hard Copy</div>
                                </div>
                                <div className="justify-start items-center gap-[7px] inline-flex">
                                    <div className="w-[84px] h-5 text-neutral-600 text-[15px] font-normal font-['Inter'] leading-snug">E - Book</div>
                                </div>
                                <div className="justify-start items-center gap-1.5 inline-flex">
                                    <div className="w-[84px] h-5 text-neutral-600 text-[15px] font-normal font-['Inter'] leading-snug">Audio book</div>
                                </div>
                            </div>
                            <div className="flex-col justify-start items-start gap-[13px] inline-flex">
                                <div className="w-[85px] h-[26px] relative">
                                    <div className="w-[85px] h-[26px] left-0 top-0 absolute bg-green-500 rounded-[5px]" />
                                    <div className="w-[85px] h-[17px] left-0 top-[5px] absolute text-center text-white text-[15px] font-normal font-['Inter']">In-Shelf</div>
                                </div>
                                <div className="justify-start items-start gap-px inline-flex">
                                    <div className="w-5 h-5 relative">
                                        <img className="w-3.5 h-[17px] left-[3px] top-[2px] absolute" src="https://via.placeholder.com/14x17" />
                                    </div>
                                    <div className="w-[77px] h-6 text-neutral-600 text-[15px] font-normal font-['Inter'] leading-snug"> CS A-15</div>
                                </div>
                            </div>
                        </div>
                        <div className="justify-start items-start gap-16 flex">
                            <div className="w-[30px] h-[30px] p-[3px] justify-center items-center flex">
                                <div className="w-6 h-6 relative flex-col justify-start items-start flex" />
                            </div>
                            <div className="w-[85px] h-[30px] relative">
                                <div className="w-[85px] h-[30px] left-0 top-0 absolute rounded-[5px] border border-red-400" />
                                <div className="w-[60px] h-[18px] left-[13px] top-[6px] absolute text-center text-red-400 text-[15px] font-normal font-['Inter']">Preview</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[1454px] h-[125px] left-[44px] top-[1327px] absolute">
                    <div className="w-[1454px] h-[125px] left-0 top-0 absolute bg-white rounded-[10px]" />
                    <div className="w-[1397px] h-[99px] left-[23px] top-[13px] absolute justify-start items-center gap-[90px] inline-flex">
                        <div className="justify-start items-center gap-[47px] flex">
                            <img className="w-[75px] h-[99px] rounded-[5px] border border-zinc-100" src="https://via.placeholder.com/75x99" />
                            <div className="flex-col justify-start items-start gap-2.5 inline-flex">
                                <div className="flex-col justify-start items-start gap-5 flex">
                                    <div className="w-[207px] h-3.5 text-neutral-600 text-xl font-normal font-['Inter'] leading-relaxed">Don’t Make Me Think </div>
                                    <div className="w-[140px] h-3.5 text-neutral-600 text-[15px] font-normal font-['Inter'] leading-tight">Steve Krug, 2000</div>
                                </div>
                                <div className="w-[140px] h-3.5 text-neutral-600 text-[10px] font-normal font-['Inter'] leading-[12.85px]">Second Edition</div>
                            </div>
                        </div>
                        <div className="justify-start items-center gap-[72px] flex">
                            <div className="w-[60px] h-[27px]"><span style="text-neutral-600 text-xl font-normal font-['Inter'] leading-relaxed">4.5</span><span style="text-neutral-400 text-[15px] font-normal font-['Inter'] leading-tight">/5</span></div>
                            <div className="w-[180px] relative">
                                <div className="w-[180px] h-[27px] left-0 top-0 absolute text-neutral-600 text-xl font-normal font-['Inter'] leading-relaxed">Computer Science</div>
                                <div className="w-[180px] h-[19px] left-0 top-[38px] absolute text-neutral-600 text-[15px] font-normal font-['Inter'] leading-tight">UX Design</div>
                            </div>
                        </div>
                        <div className="justify-start items-center gap-[102px] flex">
                            <div className="flex-col justify-start items-start gap-2 inline-flex">
                                <div className="justify-start items-center gap-2 inline-flex">
                                    <div className="w-[84px] h-[18px] text-neutral-600 text-[15px] font-normal font-['Inter']">Hard Copy</div>
                                </div>
                                <div className="justify-start items-center gap-[7px] inline-flex">
                                    <div className="w-[84px] h-5 text-neutral-600 text-[15px] font-normal font-['Inter'] leading-snug">E - Book</div>
                                </div>
                                <div className="justify-start items-center gap-1.5 inline-flex">
                                    <div className="w-[84px] h-5 text-neutral-600 text-[15px] font-normal font-['Inter'] leading-snug">Audio book</div>
                                </div>
                            </div>
                            <div className="flex-col justify-start items-start gap-[13px] inline-flex">
                                <div className="w-[85px] h-[26px] relative">
                                    <div className="w-[85px] h-[26px] left-0 top-0 absolute bg-green-500 rounded-[5px]" />
                                    <div className="w-[85px] h-[17px] left-0 top-[5px] absolute text-center text-white text-[15px] font-normal font-['Inter']">In-Shelf</div>
                                </div>
                                <div className="justify-start items-start gap-px inline-flex">
                                    <div className="w-5 h-5 relative">
                                        <img className="w-3.5 h-[17px] left-[3px] top-[2px] absolute" src="https://via.placeholder.com/14x17" />
                                    </div>
                                    <div className="w-[77px] h-6 text-neutral-600 text-[15px] font-normal font-['Inter'] leading-snug"> CS A-15</div>
                                </div>
                            </div>
                        </div>
                        <div className="justify-start items-start gap-16 flex">
                            <div className="w-[30px] h-[30px] p-[3px] justify-center items-center flex">
                                <div className="w-6 h-6 relative flex-col justify-start items-start flex" />
                            </div>
                            <div className="w-[85px] h-[30px] relative">
                                <div className="w-[85px] h-[30px] left-0 top-0 absolute rounded-[5px] border border-red-400" />
                                <div className="w-[60px] h-[18px] left-[13px] top-[6px] absolute text-center text-red-400 text-[15px] font-normal font-['Inter']">Preview</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[1454px] h-[125px] left-[44px] top-[1475px] absolute">
                    <div className="w-[1454px] h-[125px] left-0 top-0 absolute bg-white rounded-[10px]" />
                    <div className="w-[1397px] h-[99px] left-[23px] top-[13px] absolute justify-start items-center gap-[90px] inline-flex">
                        <div className="justify-start items-center gap-[47px] flex">
                            <img className="w-[75px] h-[99px] rounded-[5px] border border-zinc-100" src="https://via.placeholder.com/75x99" />
                            <div className="flex-col justify-start items-start gap-2.5 inline-flex">
                                <div className="flex-col justify-start items-start gap-5 flex">
                                    <div className="w-[207px] h-3.5 text-neutral-600 text-xl font-normal font-['Inter'] leading-relaxed">Don’t Make Me Think </div>
                                    <div className="w-[140px] h-3.5 text-neutral-600 text-[15px] font-normal font-['Inter'] leading-tight">Steve Krug, 2000</div>
                                </div>
                                <div className="w-[140px] h-3.5 text-neutral-600 text-[10px] font-normal font-['Inter'] leading-[12.85px]">Second Edition</div>
                            </div>
                        </div>
                        <div className="justify-start items-center gap-[72px] flex">
                            <div className="w-[60px] h-[27px]"><span style="text-neutral-600 text-xl font-normal font-['Inter'] leading-relaxed">4.5</span><span style="text-neutral-400 text-[15px] font-normal font-['Inter'] leading-tight">/5</span></div>
                            <div className="w-[180px] relative">
                                <div className="w-[180px] h-[27px] left-0 top-0 absolute text-neutral-600 text-xl font-normal font-['Inter'] leading-relaxed">Computer Science</div>
                                <div className="w-[180px] h-[19px] left-0 top-[38px] absolute text-neutral-600 text-[15px] font-normal font-['Inter'] leading-tight">UX Design</div>
                            </div>
                        </div>
                        <div className="justify-start items-center gap-[102px] flex">
                            <div className="flex-col justify-start items-start gap-2 inline-flex">
                                <div className="justify-start items-center gap-2 inline-flex">
                                    <div className="w-[84px] h-[18px] text-neutral-600 text-[15px] font-normal font-['Inter']">Hard Copy</div>
                                </div>
                                <div className="justify-start items-center gap-[7px] inline-flex">
                                    <div className="w-[84px] h-5 text-neutral-600 text-[15px] font-normal font-['Inter'] leading-snug">E - Book</div>
                                </div>
                                <div className="justify-start items-center gap-1.5 inline-flex">
                                    <div className="w-[84px] h-5 text-neutral-600 text-[15px] font-normal font-['Inter'] leading-snug">Audio book</div>
                                </div>
                            </div>
                            <div className="flex-col justify-start items-start gap-[13px] inline-flex">
                                <div className="w-[85px] h-[26px] relative">
                                    <div className="w-[85px] h-[26px] left-0 top-0 absolute bg-green-500 rounded-[5px]" />
                                    <div className="w-[85px] h-[17px] left-0 top-[5px] absolute text-center text-white text-[15px] font-normal font-['Inter']">In-Shelf</div>
                                </div>
                                <div className="justify-start items-start gap-px inline-flex">
                                    <div className="w-5 h-5 relative">
                                        <img className="w-3.5 h-[17px] left-[3px] top-[2px] absolute" src="https://via.placeholder.com/14x17" />
                                    </div>
                                    <div className="w-[77px] h-6 text-neutral-600 text-[15px] font-normal font-['Inter'] leading-snug"> CS A-15</div>
                                </div>
                            </div>
                        </div>
                        <div className="justify-start items-start gap-16 flex">
                            <div className="w-[30px] h-[30px] p-[3px] justify-center items-center flex">
                                <div className="w-6 h-6 relative flex-col justify-start items-start flex" />
                            </div>
                            <div className="w-[85px] h-[30px] relative">
                                <div className="w-[85px] h-[30px] left-0 top-0 absolute rounded-[5px] border border-red-400" />
                                <div className="w-[60px] h-[18px] left-[13px] top-[6px] absolute text-center text-red-400 text-[15px] font-normal font-['Inter']">Preview</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[1454px] h-[125px] left-[44px] top-[1623px] absolute">
                    <div className="w-[1454px] h-[125px] left-0 top-0 absolute bg-white rounded-[10px]" />
                    <div className="w-[1397px] h-[99px] left-[23px] top-[13px] absolute justify-start items-center gap-[90px] inline-flex">
                        <div className="justify-start items-center gap-[47px] flex">
                            <img className="w-[75px] h-[99px] rounded-[5px] border border-zinc-100" src="https://via.placeholder.com/75x99" />
                            <div className="flex-col justify-start items-start gap-2.5 inline-flex">
                                <div className="flex-col justify-start items-start gap-5 flex">
                                    <div className="w-[207px] h-3.5 text-neutral-600 text-xl font-normal font-['Inter'] leading-relaxed">Don’t Make Me Think </div>
                                    <div className="w-[140px] h-3.5 text-neutral-600 text-[15px] font-normal font-['Inter'] leading-tight">Steve Krug, 2000</div>
                                </div>
                                <div className="w-[140px] h-3.5 text-neutral-600 text-[10px] font-normal font-['Inter'] leading-[12.85px]">Second Edition</div>
                            </div>
                        </div>
                        <div className="justify-start items-center gap-[72px] flex">
                            <div className="w-[60px] h-[27px]"><span style="text-neutral-600 text-xl font-normal font-['Inter'] leading-relaxed">4.5</span><span style="text-neutral-400 text-[15px] font-normal font-['Inter'] leading-tight">/5</span></div>
                            <div className="w-[180px] relative">
                                <div className="w-[180px] h-[27px] left-0 top-0 absolute text-neutral-600 text-xl font-normal font-['Inter'] leading-relaxed">Computer Science</div>
                                <div className="w-[180px] h-[19px] left-0 top-[38px] absolute text-neutral-600 text-[15px] font-normal font-['Inter'] leading-tight">UX Design</div>
                            </div>
                        </div>
                        <div className="justify-start items-center gap-[102px] flex">
                            <div className="flex-col justify-start items-start gap-2 inline-flex">
                                <div className="justify-start items-center gap-2 inline-flex">
                                    <div className="w-[84px] h-[18px] text-neutral-600 text-[15px] font-normal font-['Inter']">Hard Copy</div>
                                </div>
                                <div className="justify-start items-center gap-[7px] inline-flex">
                                    <div className="w-[84px] h-5 text-neutral-600 text-[15px] font-normal font-['Inter'] leading-snug">E - Book</div>
                                </div>
                                <div className="justify-start items-center gap-1.5 inline-flex">
                                    <div className="w-[84px] h-5 text-neutral-600 text-[15px] font-normal font-['Inter'] leading-snug">Audio book</div>
                                </div>
                            </div>
                            <div className="flex-col justify-start items-start gap-[13px] inline-flex">
                                <div className="w-[85px] h-[26px] relative">
                                    <div className="w-[85px] h-[26px] left-0 top-0 absolute bg-green-500 rounded-[5px]" />
                                    <div className="w-[85px] h-[17px] left-0 top-[5px] absolute text-center text-white text-[15px] font-normal font-['Inter']">In-Shelf</div>
                                </div>
                                <div className="justify-start items-start gap-px inline-flex">
                                    <div className="w-5 h-5 relative">
                                        <img className="w-3.5 h-[17px] left-[3px] top-[2px] absolute" src="https://via.placeholder.com/14x17" />
                                    </div>
                                    <div className="w-[77px] h-6 text-neutral-600 text-[15px] font-normal font-['Inter'] leading-snug"> CS A-15</div>
                                </div>
                            </div>
                        </div>
                        <div className="justify-start items-start gap-16 flex">
                            <div className="w-[30px] h-[30px] p-[3px] justify-center items-center flex">
                                <div className="w-6 h-6 relative flex-col justify-start items-start flex" />
                            </div>
                            <div className="w-[85px] h-[30px] relative">
                                <div className="w-[85px] h-[30px] left-0 top-0 absolute rounded-[5px] border border-red-400" />
                                <div className="w-[60px] h-[18px] left-[13px] top-[6px] absolute text-center text-red-400 text-[15px] font-normal font-['Inter']">Preview</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[1454px] h-[125px] left-[44px] top-[1771px] absolute">
                    <div className="w-[1454px] h-[125px] left-0 top-0 absolute bg-white rounded-[10px]" />
                    <div className="w-[1397px] h-[99px] left-[23px] top-[13px] absolute justify-start items-center gap-[90px] inline-flex">
                        <div className="justify-start items-center gap-[47px] flex">
                            <img className="w-[75px] h-[99px] rounded-[5px] border border-zinc-100" src="https://via.placeholder.com/75x99" />
                            <div className="flex-col justify-start items-start gap-2.5 inline-flex">
                                <div className="flex-col justify-start items-start gap-5 flex">
                                    <div className="w-[207px] h-3.5 text-neutral-600 text-xl font-normal font-['Inter'] leading-relaxed">Don’t Make Me Think </div>
                                    <div className="w-[140px] h-3.5 text-neutral-600 text-[15px] font-normal font-['Inter'] leading-tight">Steve Krug, 2000</div>
                                </div>
                                <div className="w-[140px] h-3.5 text-neutral-600 text-[10px] font-normal font-['Inter'] leading-[12.85px]">Second Edition</div>
                            </div>
                        </div>
                        <div className="justify-start items-center gap-[72px] flex">
                            <div className="w-[60px] h-[27px]"><span style="text-neutral-600 text-xl font-normal font-['Inter'] leading-relaxed">4.5</span><span style="text-neutral-400 text-[15px] font-normal font-['Inter'] leading-tight">/5</span></div>
                            <div className="w-[180px] relative">
                                <div className="w-[180px] h-[27px] left-0 top-0 absolute text-neutral-600 text-xl font-normal font-['Inter'] leading-relaxed">Computer Science</div>
                                <div className="w-[180px] h-[19px] left-0 top-[38px] absolute text-neutral-600 text-[15px] font-normal font-['Inter'] leading-tight">UX Design</div>
                            </div>
                        </div>
                        <div className="justify-start items-center gap-[102px] flex">
                            <div className="flex-col justify-start items-start gap-2 inline-flex">
                                <div className="justify-start items-center gap-2 inline-flex">
                                    <div className="w-[84px] h-[18px] text-neutral-600 text-[15px] font-normal font-['Inter']">Hard Copy</div>
                                </div>
                                <div className="justify-start items-center gap-[7px] inline-flex">
                                    <div className="w-[84px] h-5 text-neutral-600 text-[15px] font-normal font-['Inter'] leading-snug">E - Book</div>
                                </div>
                                <div className="justify-start items-center gap-1.5 inline-flex">
                                    <div className="w-[84px] h-5 text-neutral-600 text-[15px] font-normal font-['Inter'] leading-snug">Audio book</div>
                                </div>
                            </div>
                            <div className="flex-col justify-start items-start gap-[13px] inline-flex">
                                <div className="w-[85px] h-[26px] relative">
                                    <div className="w-[85px] h-[26px] left-0 top-0 absolute bg-green-500 rounded-[5px]" />
                                    <div className="w-[85px] h-[17px] left-0 top-[5px] absolute text-center text-white text-[15px] font-normal font-['Inter']">In-Shelf</div>
                                </div>
                                <div className="justify-start items-start gap-px inline-flex">
                                    <div className="w-5 h-5 relative">
                                        <img className="w-3.5 h-[17px] left-[3px] top-[2px] absolute" src="https://via.placeholder.com/14x17" />
                                    </div>
                                    <div className="w-[77px] h-6 text-neutral-600 text-[15px] font-normal font-['Inter'] leading-snug"> CS A-15</div>
                                </div>
                            </div>
                        </div>
                        <div className="justify-start items-start gap-16 flex">
                            <div className="w-[30px] h-[30px] p-[3px] justify-center items-center flex">
                                <div className="w-6 h-6 relative flex-col justify-start items-start flex" />
                            </div>
                            <div className="w-[85px] h-[30px] relative">
                                <div className="w-[85px] h-[30px] left-0 top-0 absolute rounded-[5px] border border-red-400" />
                                <div className="w-[60px] h-[18px] left-[13px] top-[6px] absolute text-center text-red-400 text-[15px] font-normal font-['Inter']">Preview</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[1544px] h-[173px] left-[341px] top-[48px] absolute">
                <div className="w-[1544px] h-[173px] left-0 top-0 absolute bg-gradient-to-b from-white via-gray-100 to-gray-100 rounded-tr-[10px] border">
                    <div className="w-[170px] h-[47px] left-[44px] top-[119px] absolute">
                        <div className="w-[170px] h-[47px] left-0 top-0 absolute bg-white rounded-[30px] shadow" />
                        <div className="w-[91px] h-[26px] left-[27px] top-[11px] absolute text-center text-neutral-600 text-xl font-normal font-['Inter'] leading-relaxed">Browse</div>
                    </div>
                    <div className="w-[203px] h-[50px] left-[1289px] top-[37px] absolute">
                        <div className="w-[203px] h-[50px] left-0 top-0 absolute bg-white rounded-[33px] shadow" />
                        <img className="w-[45px] h-[45px] left-[3px] top-[3px] absolute rounded-full border border-white" src="https://via.placeholder.com/45x45" />
                        <div className="w-[134px] h-[27px] left-[51px] top-[14px] absolute text-neutral-600 text-xl font-normal font-['Inter'] leading-relaxed">Hoang Anh</div>
                    </div>
                </div>
                <div className="w-[455px] h-[46px] left-[812px] top-[39px] absolute">
                    <div className="w-[455px] h-[46px] left-0 top-0 absolute bg-white rounded-[40px] shadow shadow-inner" />
                    <div className="w-[133px] h-[19px] left-[57px] top-[14px] absolute justify-start items-start gap-[5px] inline-flex">
                        <div className="w-[19px] h-[19px] relative" />
                        <div className="w-[109px] h-[19px] text-center text-neutral-600 text-[15px] font-normal font-['Digital Numbers'] leading-tight">09:00 hrs</div>
                    </div>
                    <div className="w-[149px] h-[19px] left-[254px] top-[14px] absolute justify-start items-start gap-[5px] inline-flex">
                        <div className="w-[125px] h-[19px] text-center text-neutral-600 text-[15px] font-normal font-['Digital Numbers'] leading-tight">4-Mar-2023</div>
                    </div>
                </div>
                <div className="w-[541px] h-[49px] left-[46px] top-[38px] absolute">
                    <div className="w-[541px] h-[49px] left-0 top-0 absolute bg-white rounded-[40px] shadow" />
                    <div className="w-[102px] h-[49px] left-0 top-0 absolute">
                        <div className="w-[102px] h-[49px] left-0 top-0 absolute bg-gray-50 rounded-tl-[40px] rounded-bl-[40px]" />
                        <div className="w-[27px] h-6 left-[37px] top-[12px] absolute text-neutral-600 text-xl font-normal font-['Inter'] leading-relaxed">All</div>
                    </div>
                    <div className="w-5 h-5 left-[504px] top-[14px] absolute" />
                    <div className="w-5 h-5 left-[464px] top-[15px] absolute" />
                    <div className="w-[33px] h-[0px] left-[493px] top-[8px] absolute origin-top-left rotate-90 border border-zinc-300"></div>
                    <div className="w-[229px] h-6 left-[123px] top-[12px] absolute text-stone-300 text-xl font-normal font-['Inter'] leading-relaxed">Search</div>
                </div>
                <div className="w-[170px] h-[47px] left-[615px] top-[38px] absolute">
                    <div className="w-[170px] h-[47px] left-0 top-0 absolute bg-white rounded-[30px] shadow" />
                    <div className="w-5 h-5 left-[25px] top-[14px] absolute" />
                    <div className="w-[91px] h-[22.12px] left-[40px] top-[12px] absolute text-center text-neutral-600 text-xl font-normal font-['Inter'] leading-relaxed">Lang</div>
                </div>
            </div>
            <div className="w-[306px] h-[994px] left-[35px] top-[48px] absolute">
                <div className="w-[306px] h-[994px] left-0 top-0 absolute">
                    <div className="w-[306px] h-[994px] left-0 top-0 absolute bg-white rounded-tl-[10px] rounded-bl-[10px]" />
                    <div className="w-[174px] h-[202px] left-[66px] top-[212px] absolute flex-col justify-start items-center gap-[34px] inline-flex">
                        <div className="w-[174px] justify-start items-center gap-3 inline-flex">
                            <div className="w-[23px] h-[23px] relative" />
                            <div className="w-[138px] h-[25px] text-zinc-500 text-xl font-normal font-['Inter']">Home</div>
                        </div>
                        <div className="justify-start items-center gap-[11px] inline-flex">
                            <div className="w-[23px] h-[23px] relative">
                                <div className="w-[23px] h-[23px] left-0 top-0 absolute bg-zinc-300" />
                            </div>
                            <div className="w-[137px] h-[25px] text-neutral-600 text-xl font-normal font-['Inter']">Search</div>
                        </div>
                        <div className="justify-start items-center gap-3 inline-flex">
                            <div className="w-5 h-5 relative" />
                            <div className="w-[136px] h-[25px] text-zinc-500 text-xl font-normal font-['Inter']">My Shelf</div>
                        </div>
                        <div className="w-[169px] justify-start items-center gap-3 inline-flex">
                            <div className="w-[21px] h-[21px] relative" />
                            <div className="w-[137px] h-[25px] text-zinc-500 text-xl font-normal font-['Inter']">Contribute</div>
                        </div>
                    </div>
                </div>
                <div className="left-[68px] top-[856px] absolute flex-col justify-start items-start gap-[15px] inline-flex">
                    <div className="w-[134px] h-[19px] text-zinc-500 text-[15px] font-normal font-['Inter']">About </div>
                    <div className="w-[134px] h-[19px] text-zinc-500 text-[15px] font-normal font-['Inter']">Support</div>
                    <div className="w-[134px] h-[19px] text-zinc-500 text-[15px] font-normal font-['Inter']">Terms & Condition</div>
                </div>
                <img className="w-[326px] h-[152px] left-[-20px] top-[25px] absolute" src="https://via.placeholder.com/326x152" />
            </div>
        </div>
    )
}

export default Search;