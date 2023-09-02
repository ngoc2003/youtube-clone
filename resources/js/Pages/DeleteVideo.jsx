import LayoutDefault from "@/Layouts/LayoutDefault";
import { Link } from "@inertiajs/react";
import React from "react";

const DeleteVideo = ({ videos }) => {
    return (
        <LayoutDefault>
            <div className="max-w-2xl mx-auto p-4">
                <table className="w-full">
                    <thead className="border-b ">
                        <tr className="text-white flex justify-between">
                            <th
                                scope="col"
                                className="text-sm font-medium px-6 py-4 text-left"
                            >
                                Videos
                            </th>
                            <th
                                scope="col"
                                className="text-sm font-medium px-6 py-4 text-left"
                            >
                                Options
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {videos.length &&
                            videos.map((video) => (
                                <tr
                                    key={video.id}
                                    className="border-b flex justify-between"
                                >
                                    <td className="px-6 py-4 w-7/12 text-sm font-medium text-gray-900">
                                        <video
                                            src={video.video}
                                            width={320}
                                            type="video/mp4"
                                            controls
                                        ></video>
                                    </td>
                                    <td className="px-6 py-4 w-5/12 text-sm font-medium text-gray-900 relative">
                                        <div className="text-white font-extrabold mb-4">
                                            {video.title}
                                        </div>
                                        <div className="w-full">
                                            <Link
                                                href={route("videos.destroy", {
                                                    id: video.id,
                                                })}
                                            >
                                                <button className="text-white absolute top-4 right-4 text-xs bg-red-600 hover:bg-red-700 font-bold p-1 rounded cursor-pointer">
                                                    Delete
                                                </button>
                                            </Link>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </LayoutDefault>
    );
};

export default DeleteVideo;
