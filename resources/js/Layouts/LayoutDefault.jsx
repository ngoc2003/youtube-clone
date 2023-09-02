import React from "react";
import NavLayout from "./NavLayout";
import SideContentLayout from "./SideContentLayout";

const LayoutDefault = ({ children }) => {
    return (
        <>
            <NavLayout />
            <div className="flex h-screen overflow-hidden">
                <SideContentLayout />
                <div className="flex-1 overflow-scroll">
                    <div className="pt-14"></div>
                    {children}
                </div>
            </div>
        </>
    );
};

export default LayoutDefault;
