import * as React from "react";
import logo from '../assets/images/logo.png';

const SidebarItem = [
    {
        name: "Trang chủ",
        icon: "https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F9d4e6d8f16d54caf1e05a19c8bb4c14c4b3dff186ef9a0738d241ab5f9136c0a?apiKey=8f3ef2aee7df426ebef0e2cd7797def8&",
        to: "/home",
    },
    {
        name: "Tìm kiếm",
        icon: "https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F09e67718945c1c8f4bfae2687d2a8a538c68d32aa5c48695b2dfde70a99e7022?apiKey=8f3ef2aee7df426ebef0e2cd7797def8&",
        to: "/user/search",
    },
    {
        name: "Sách của tôi",
        icon: "https://cdn.builder.io/api/v1/image/assets%2FTEMP%2Fb3b41baaf0a9e3a406a7a11a974c5810ba33b4957c64bea711660dcddc12c0b4?apiKey=8f3ef2aee7df426ebef0e2cd7797def8&",
        to: "/my-book",
    },
    {
        name: "Đóng góp",
        icon: "https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F2a2919fa5287790b35ca42cffa27cefc30308b9347004330ab03b70be3db20e4?apiKey=8f3ef2aee7df426ebef0e2cd7797def8&",
        to: "/contribute",
    }
]

function SidebarComponent(props) {
    return (
        // pl-10 w-full bg-gradient-to-b from-white via-gray-100 to-gray-100 rounded-tr-[10px] border justify-end inline-flex
        <div className=" w-full bg-gradient-to-b flex min-h-[994px] max-w-[480px] flex-col mx-auto rounded-xl justify-start">
            <div className="w-full overflow-hidden max-w-[369px]">
                <img src={logo} alt="Logo" />
            </div>
            <div className="items-stretch flex max-w-[174px] flex-col ml-14 mt-30">
                <ul>
                    {
                        SidebarItem.map((item, index) => (
                            <li className="items-center flex justify-between gap-3 mt-9 px-5" key={index}>
                                <a className="flex space-x-3" href={item.to}>
                                    <img
                                        loading="lazy"
                                        src={item.icon}
                                        alt=""
                                        className="aspect-square object-contain object-center w-[23px] overflow-hidden shrink-0 max-w-full" />
                                    <span className="text-zinc-500 text-xl self-stretch grow whitespace-nowrap">{item.name}</span>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default SidebarComponent;