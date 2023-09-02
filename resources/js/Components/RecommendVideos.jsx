import { Link } from "@inertiajs/react";
import React from "react";

const RecommendVideos = ({ vid }) => {
    return (
        <Link
            href={route("videos.show", { id: vid.id })}
            className="flex mb-3 w-full"
        >
            <div className="rounded-lg flex-1 h-[100px] w-[150px] overflow-hidden">
                <img
                    src={vid.thumbnail || ""}
                    className=" cursor-pointer aspect-video w-full object-cover"
                    alt=""
                />
            </div>
            <div className="px-1.5 text-white mt-1 flex-1 pl-3">
                <div className="text-[15px] pb-1.5 font-extrabold w-full cursor-pointer">
                    {vid.title.substring(0, 50)}
                </div>
                <div className="text-sm font-semibold text-gray-500 flex gap-1 items-center cursor-pointer">
                    {vid.user}
                </div>
                <div className="text-sm mb-1 text-gray-500 font-semibold cursor-pointer">
                    {vid.views} views
                </div>
            </div>
        </Link>
    );
};

export default RecommendVideos;
