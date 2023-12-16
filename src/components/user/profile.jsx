import React, { useState } from 'react';
import logo from '../../assets/images/logo.png';

function Profile() {

  return (
    <div className="w-[1920px] h-[1080px] relative bg-white">
      <div className="w-[1544px] h-[1011px] left-[341px] top-[48px] absolute rounded-[10px]">
        <div className="w-[1544px] h-[994px] left-0 top-0 absolute bg-gray-100 rounded-tr-[10px] rounded-br-[10px]" />
        <div className="w-[1136px] h-[858px] left-[44px] top-[116px] absolute">
          <div className="w-[1136px] h-[858px] left-0 top-0 absolute bg-white rounded-[10px] shadow" />
          <div className="w-12 h-12 left-[1063px] top-[287px] absolute">
            <div className="w-12 h-12 left-0 top-0 absolute bg-white rounded-[20px] shadow" />
            <div className="w-[22px] h-[22.23px] left-[13px] top-[13px] absolute" />
          </div>
          <div className="w-[661px] h-[33px] left-[24px] top-[48px] absolute justify-start items-start gap-3 inline-flex">
            <div className="self-stretch flex-col justify-start items-center gap-[9px] inline-flex">
              <div className="px-3 justify-start items-start gap-2.5 inline-flex">
                <div className="text-red-500 text-xl font-bold font-['Inter']">Account  Setting</div>
              </div>
              <div className="self-stretch h-[0px] border-2 border-orange-200"></div>
            </div>
            <div className="self-stretch flex-col justify-start items-center gap-[9px] inline-flex">
              <div className="px-3 justify-start items-start gap-3 inline-flex">
                <div className="text-slate-500 text-xl font-medium font-['Inter']">Login & Security</div>
              </div>
              <div className="self-stretch h-[0px] border-2 border-gray-200"></div>
            </div>
            <div className="self-stretch flex-col justify-start items-center gap-[9px] inline-flex">
              <div className="px-3 justify-start items-start gap-3 inline-flex">
                <div className="text-slate-500 text-xl font-medium font-['Inter']">Notifications</div>
              </div>
              <div className="self-stretch h-[0px] border-2 border-gray-200"></div>
            </div>
            <div className="self-stretch flex-col justify-start items-center gap-[9px] inline-flex">
              <div className="px-3 justify-start items-start gap-3 inline-flex">
                <div className="text-slate-500 text-xl font-medium font-['Inter']">Interface</div>
              </div>
              <div className="self-stretch h-[0px] border-2 border-gray-200"></div>
            </div>
          </div>
          <div className="left-[24px] top-[124px] absolute text-gray-600 text-base font-medium font-['Inter']">Your Profile  Picture</div>
          <div className="w-[543px] h-[186px] left-[25px] top-[354px] absolute flex-col justify-start items-start gap-6 inline-flex">
            <div className="w-[543px] h-[81px] relative">
              <div className="w-[519px] h-[52px] left-0 top-[29px] absolute bg-gray-50 rounded-lg border border-gray-200" />
              <div className="left-[15px] top-[47px] absolute text-slate-400 text-sm font-medium font-['Inter'] leading-none">Vu Hoang Anh</div>
              <div className="left-[1px] top-0 absolute text-gray-600 text-base font-medium font-['Inter'] leading-[17.98px]">Full name</div>
            </div>
            <div className="w-[543px] h-[81px] relative">
              <div className="w-[519px] h-[52px] left-0 top-[29px] absolute bg-gray-50 rounded-lg border border-gray-200" />
              <div className="left-[15px] top-[47px] absolute text-slate-400 text-sm font-medium font-['Inter'] leading-none">6022020</div>
              <div className="left-[1px] top-0 absolute text-gray-600 text-base font-medium font-['Inter'] leading-[17.98px]">Register Number</div>
            </div>
          </div>
          <div className="w-[543px] h-[186px] left-[569px] top-[354px] absolute flex-col justify-start items-start gap-6 inline-flex">
            <div className="w-[543px] h-[81px] relative">
              <div className="w-[542px] h-[52px] left-0 top-[29px] absolute bg-gray-50 rounded-lg border border-gray-200" />
              <div className="left-[15px] top-[47px] absolute text-slate-400 text-sm font-medium font-['Inter'] leading-none">hoangvuanh101@gmail.com</div>
              <div className="left-[1px] top-0 absolute text-gray-600 text-base font-medium font-['Inter'] leading-[17.98px]">College Email ID</div>
            </div>
            <div className="w-[543px] h-[81px] relative">
              <div className="w-[542px] h-[52px] left-0 top-[29px] absolute bg-gray-50 rounded-lg border border-gray-200" />
              <div className="left-[15px] top-[47px] absolute text-slate-400 text-sm font-medium font-['Manrope'] leading-none">+84</div>
              <div className="left-[53px] top-[47px] absolute text-slate-400 text-sm font-medium font-['Inter'] leading-none">0965120724</div>
              <div className="left-[1px] top-0 absolute text-gray-600 text-base font-medium font-['Inter'] leading-[17.98px]">phone number</div>
              <div className="w-[30px] h-[0px] left-[41px] top-[40px] absolute origin-top-left rotate-90 border border-gray-200"></div>
            </div>
          </div>
          <div className="w-[1087px] h-[190.20px] left-[24px] top-[575.63px] absolute">
            <div className="w-[1087px] h-[160.70px] left-0 top-[29.50px] absolute bg-gray-50 rounded-lg border border-gray-200" />
            <div className="w-[88px] h-[16.27px] left-[15px] top-[47.80px] absolute text-slate-400 text-sm font-medium font-['Inter'] leading-none">I’m a Student </div>
            <div className="w-[25px] h-[18.31px] left-[1px] top-0 absolute text-gray-600 text-base font-medium font-['Inter'] leading-[17.98px]">Bio</div>
          </div>
          <div className="w-[201px] h-[49px] left-[26px] top-[785px] absolute">
            <div className="w-[201px] h-[49px] left-0 top-0 absolute bg-red-500 rounded-lg" />
            <div className="left-[40px] top-[12px] absolute text-white text-lg font-bold font-['Inter']">Update Profile</div>
          </div>
          <div className="left-[261px] top-[797px] absolute text-gray-600 text-lg font-medium font-['Inter']">Reset</div>
          <div className="w-[116px] h-[138px] left-[37px] top-[160px] absolute">
            <div className="w-[116px] h-[25px] left-0 top-[113px] absolute text-center text-neutral-400 text-[10px] font-medium font-['Inter'] underline leading-normal">Upload New photo</div>
            <div className="w-[100px] h-[100px] left-[8px] top-0 absolute">
              <div className="w-[100px] h-[100px] left-0 top-0 absolute bg-white rounded-full shadow" />
              <div className="w-[100px] h-[100px] left-0 top-0 absolute">
                <div className="w-[100px] h-[100px] left-0 top-0 absolute bg-white rounded-full" />
                <img className="w-[117px] h-[109px] left-[-9px] top-0 absolute" src="https://via.placeholder.com/117x109" />
              </div>
            </div>
          </div>
          <div className="w-[175px] h-[149px] left-[287px] top-[134px] absolute">
            <div className="w-[175px] h-[149px] left-0 top-0 absolute bg-red-400 rounded-[10px]" />
            <div className="w-[63px] h-[39px] left-[92px] top-[25px] absolute text-white text-[32px] font-medium font-['Inter'] leading-9">120</div>
            <div className="w-[142px] h-[39px] left-[21px] top-[95px] absolute text-white text-[25px] font-medium font-['Inter'] leading-7">Readings</div>
            <div className="w-[54px] h-12 left-[15px] top-[21px] absolute">
              <div className="w-[54px] h-12 left-0 top-0 absolute bg-white rounded-[10px]" />
              <div className="w-[29px] h-[29px] left-[13px] top-[9px] absolute" />
            </div>
          </div>
          <div className="w-[197px] h-[149px] left-[494px] top-[134px] absolute">
            <div className="w-[197px] h-[149px] left-0 top-0 absolute bg-violet-500 rounded-[10px]" />
            <div className="w-[63px] h-[39px] left-[92px] top-[25px] absolute text-white text-[32px] font-medium font-['Inter'] leading-9">10</div>
            <div className="w-[154px] h-[39px] left-[21px] top-[95px] absolute text-white text-[25px] font-medium font-['Inter'] leading-7">Contribution</div>
            <div className="w-[54px] h-12 left-[15px] top-[21px] absolute">
              <div className="w-[54px] h-12 left-0 top-0 absolute bg-white rounded-[10px]" />
              <div className="w-[21px] h-[21px] left-[16px] top-[13px] absolute" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1544px] h-28 left-[341px] top-[48px] absolute">
        <div className="w-[1544px] h-28 pl-[1300px] pr-[41px] py-[31px] left-0 top-0 absolute bg-gradient-to-b from-white via-gray-100 to-gray-100 rounded-tr-[10px] border justify-end items-center inline-flex">
          <div className="w-[203px] h-[50px] relative">
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
      <div className="w-[306px] h-[994px] left-[23px] top-[48px] absolute">
        <div className="w-[306px] h-[994px] left-0 top-0 absolute bg-white rounded-tl-[10px] rounded-bl-[10px]" />
        <div className="left-[68px] top-[856px] absolute flex-col justify-start items-start gap-[15px] inline-flex">
          <div className="w-[134px] h-[19px] text-zinc-500 text-[15px] font-normal font-['Inter']">About </div>
          <div className="w-[134px] h-[19px] text-zinc-500 text-[15px] font-normal font-['Inter']">Support</div>
          <div className="w-[134px] h-[19px] text-zinc-500 text-[15px] font-normal font-['Inter']">Terms & Condition</div>
        </div>
        <div className="left-[66px] top-[212px] absolute flex-col justify-start items-center gap-[34px] inline-flex">
          <div className="w-[174px] justify-start items-center gap-3 inline-flex">
            <div className="w-[23px] h-[23px] relative" />
            <div className="w-[138px] h-[25px] text-zinc-500 text-xl font-normal font-['Inter']">Home</div>
          </div>
          <div className="justify-start items-center gap-[11px] inline-flex">
            <div className="w-[23px] h-[23px] relative">
              <div className="w-[23px] h-[23px] left-0 top-0 absolute bg-zinc-300" />
            </div>
            <div className="w-[137px] h-[25px] text-zinc-500 text-xl font-normal font-['Inter']">Search</div>
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
        <img className="w-[326px] h-[152px] left-[-10px] top-[10px] absolute" src={logo} />
      </div>
    </div>
  );
}

export default Profile;
