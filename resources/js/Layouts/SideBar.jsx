import React from "react";
import SideNavItem from "@/Components/SideNavItem";
import { Link } from "@inertiajs/react";

export const DATA = [
    {
        text: "Home",
        iconName: "home",
        href: "/",
    },
    {
        text: "Add",
        iconName: "video_call",
        href: "/add-video",
    },
    {
        text: "Library",
        iconName: "video_library",
        href: "/",
    },
    {
        text: "Like",
        iconName: "thumb_up",
        href: "/",
    },
    {
        text: "History",
        iconName: "history",
        href: "/",
    },
];

const SideBar = ({ isActive, handleHideSidebar }) => {
    return (
        <>
            <div
                id="SideNav"
                className={`fixed left-0 top-0 bottom-0 z-1 tansition duration-150 bg-black w-[240px]  ${
                    isActive ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="flex items-center pl-2 p-4 ">
                    <span
                        className="material-symbols-outlined p-2 rounded-full hover:bg-gray-800 cursor-pointer mr-3"
                        onClick={handleHideSidebar}
                    >
                        menu
                    </span>
                    <div className="mx-2"></div>
                    <Link
                        href={route("home")}
                        className="grid place-items-center cursor-pointer font-semibold"
                    >
                        YOUTUBE
                    </Link>
                </div>
                <ul className="mt-2 w-full">
                    {DATA.map(({ text, iconName, href }) => (
                        <SideNavItem
                            key={text}
                            text={text}
                            href={href}
                            icon={iconName}
                        />
                    ))}
                </ul>
            </div>
        </>
    );
};

export default SideBar;
