<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class VideoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('videos')->insert([
            'title' => 'Car from the future',
            'thumbnail' => '/videos/thumbnails/Auto.png',
            'video' => '/videos/Auto.mp4',
            'user' => 'Bui Ngoc',
            'views' => 34000,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);

        DB::table('videos')->insert([
            'title' => 'Car in Race - FAST!!!',
            'thumbnail' => '/videos/thumbnails/Car.png',
            'video' => '/videos/Car.mp4',
            'user' => 'Bui Ngoc',
            'views' => 89000,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);

        DB::table('videos')->insert([
            'title' => 'Cool red car',
            'thumbnail' => '/videos/thumbnails/Car1.png',
            'video' => '/videos/Car1.mp4',
            'user' => 'Bui Ngoc',
            'views' => 4000,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);

        DB::table('videos')->insert([
            'title' => '5 things that you dont know about Naruto',
            'thumbnail' => '/videos/thumbnails/naruto.png',
            'video' => '/videos/naruto.mp4',
            'user' => 'Bui Ngoc',
            'views' => 12000,
            'created_at' => Carbon::now(),
            'updated_at' => Carbon::now()
        ]);
    }
}
