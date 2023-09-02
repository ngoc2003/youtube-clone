import React from "react";
import { DATA } from "./SideBar";
import { Link } from "@inertiajs/react";

const SideContentLayout = () => {
    return (
        <ul className="mt-2 pt-14">
            {DATA.map(({ text, iconName, href }) => (
                <Link key={text} href={href}>
                    <div className="text-white text-xs font-semibold hover:bg-gray-800 rounded-lg cursor-pointer p-2 m-2 ml-1.5 mb-3 text-center w-16">
                        <span className="material-symbols-outlined w-[40px]">
                            {iconName}
                        </span>
                        <p>{text}</p>
                    </div>
                </Link>
            ))}
        </ul>
    );
};

export default SideContentLayout;
