import React, { useState } from "react";
import SideBar from "./SideBar";
import { Link } from "@inertiajs/react";

const NavLayout = () => {
    const [isActiveSidebar, setIsActiveSidebar] = useState(false);

    const handleActiveSidebar = () => {
        setIsActiveSidebar(true);
    };

    const handleHideSidebar = () => {
        setIsActiveSidebar(false);
    };

    return (
        <>
            <div className="fixed bg-black z-20 flex justify-between items-center text-white w-full px-4 py-2">
                <div className="flex items-center justify-center ">
                    <span
                        className="material-symbols-outlined p-2 rounded-full hover:bg-gray-800 cursor-pointer mr-3"
                        onClick={handleActiveSidebar}
                    >
                        menu
                    </span>
                    <div className="mx-2"></div>
                    <Link
                        href={route("home")}
                        className="grid place-items-center mr-10 cursor-pointer font-semibold"
                    >
                        YOUTUBE
                    </Link>
                </div>
                <div className="w-full max-w-[600px] md:block hidden">
                    <div className="rounded-full flex items-center bg-[#222] border border-gray-700">
                        <input
                            type="text"
                            placeholder="Search"
                            className="form-control block w-full  px-5 py-1.5 text-base font-normal text-gray-200 bg-black placeholder-gray-400 bg-clip-padding border-r border-r-gray-700 rounded-l-full transition ease-in-out m-0 border-transparent outline-none focus:ring-0"
                        />
                        <span className="material-symbols-outlined mx-6">
                            search
                        </span>
                    </div>
                </div>
                <div>
                    <img
                        className="rounded-full mx-8 object-cover"
                        width={35}
                        height={35}
                        src="https://www.animesenpai.net/wp-content/uploads/2023/08/Picsart_23-08-16_19-41-32-902_tFboSq275F.jpeg.webp"
                        alt=""
                    />
                </div>
                {isActiveSidebar && (
                    <div className="layer" onClick={handleHideSidebar}></div>
                )}

                <SideBar
                    handleHideSidebar={handleHideSidebar}
                    isActive={isActiveSidebar}
                />
            </div>
        </>
    );
};

export default NavLayout;
