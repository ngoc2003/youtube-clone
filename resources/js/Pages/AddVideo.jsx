import LayoutDefault from "@/Layouts/LayoutDefault";
import React, { useState } from "react";
import { router } from "@inertiajs/react";

const AddVideo = ({ errors }) => {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState();
    const [video, setVideo] = useState();

    const addVideo = (e) => {
        e.preventDefault();

        console.log(errors);

        let data = new FormData();

        data.append("title", title);
        data.append("image", image);
        data.append("video", video);

        router.post("/add-video", data);
    };

    const getTitle = (e) => {
        setTitle(e.target.value);
    };

    const getVideo = (e) => {
        setVideo(e.target.files[0]);
    };

    const getImage = (e) => {
        setImage(e.target.files[0]);
    };

    return (
        <LayoutDefault>
            <div className="max-w-xl mx-auto px-4">
                <div className="text-white font-extrabold text-3xl py-10">
                    Add video
                </div>
                <form onSubmit={addVideo}>
                    <div>
                        <div className="text-gray-200">Title</div>
                        <input
                            onChange={getTitle}
                            type="text"
                            name="title"
                            className="form-control block px-5 py-1.5 font-normal text-gray-200 bg-black placeholder-gray-400 bg-clip-padding border border-gray-600 rounded transition ease-in-out m-0 border-transparent focus:ring-0"
                            placeholder="My video"
                        />
                        <span className="text-red-500">Error</span>
                    </div>
                    <div className="mt-5">
                        <div className="text-gray-200">Thumbnails</div>
                        <input
                            onChange={getImage}
                            type="file"
                            name="image"
                            className="form-control block px-5 py-1.5 font-normal text-gray-200 bg-black placeholder-gray-400 bg-clip-padding border border-gray-600 rounded transition ease-in-out m-0 border-transparent focus:ring-0"
                        />
                        <span className="text-red-500">Error</span>
                    </div>
                    <div className="mt-5">
                        <div className="text-gray-200">Video/MP4</div>
                        <input
                            onChange={getVideo}
                            type="file"
                            name="video"
                            className="form-control block px-5 py-1.5 font-normal text-gray-200 bg-black placeholder-gray-400 bg-clip-padding border border-gray-600 rounded transition ease-in-out m-0 border-transparent focus:ring-0"
                        />
                        <span className="text-red-500">Error</span>
                    </div>
                    <div className="mt-5 float-right">
                        <button className="text-white bg-green-600 hover:bg-green-700 font-bold py-2 px-4 rounded cursor-pointer">
                            Upload video
                        </button>
                    </div>
                </form>
            </div>
        </LayoutDefault>
    );
};

export default AddVideo;
