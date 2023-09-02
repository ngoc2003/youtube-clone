<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Video;
use Illuminate\Http\Request;
use Inertia\Inertia;

class VideosController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $image_file = null;
        $video_file = null;

        $video = new Video;

        $image_file = $request->file('image');
        $video_file = $request->file('video');

        $request->validate([
            'image' => 'required|mimes:jpg,jpeg,png',
            'video' => 'required|mimes:mp4'
        ]);

        $image_extension = $image_file->getClientOriginalExtension();
        $video_extension = $video_file->getClientOriginalExtension();

        $thumb_path = '/videos/thumbnails/';
        $video_path= '/videos/';

        $image_name = time() . '.' . $image_extension;
        $video_name = time() . '.' . $video_extension;

        


        $video->title = $request->input('title');
        $video->user = 'Bui Ngoc';
        $video->views = rand(10,1000);
        $video->thumbnail = $thumb_path . $image_name;
        $video->video = $video_path . $video_name;

       

        $image_file->move(public_path().$thumb_path, $image_name);
        $video_file->move(public_path().$video_path, $video_name);

        if ($video->save()) {
            return redirect()->route('home');
        } 
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        //

        return Inertia::render('Video', [
            'video' => Video::find($id),
            'comments' => Comment::all(),
            'recommendVideos' => Video::inRandomOrder()->get()
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Video $video)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Video $video)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        //
        $video = Video::find($id);
        if (file_exists(public_path().$video->video)) {
            unlink(public_path().$video->video);
        }
        if (file_exists(public_path().$video->thumbnail)) {
            unlink(public_path().$video->thumbnail);
        }
        $video->delete();

        return redirect('deleteVideo');
    }
}
