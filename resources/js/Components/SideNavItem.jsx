import { Link } from "@inertiajs/react";
import React from "react";

const SideNavItem = ({ text, icon, href }) => {
    return (
        <Link href={href}>
            <div className="text-white text-sm font-semibold hover:bg-gray-800 rounded-lg cursor-pointer flex items-center p-2 m-2">
                <span className="material-symbols-outlined w-[40px]">
                    {icon}
                </span>
                {text}
            </div>
        </Link>
    );
};

export default SideNavItem;
