<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $movies = [
            [
                'name'      => 'How to Train Your Dragon',
                'slug'      => 'how-to-train-your-dragon',
                'category'  => 'Action',
                'video_url' => 'https://youtu.be/dHXVvD4FFas?si=g7lj3CvBYsCPczQx',
                'thumbnail' => 'https://wallpapercave.com/wp/KJPP508.jpg',
                'is_featured'   => 1
            ],
            [
                'name'      => 'World War II',
                'slug'      => 'world-war-II',
                'category'  => 'Action',
                'video_url' => 'https://youtu.be/elvA3v51tLs?si=pae4E4h8ek7RzAxY',
                'thumbnail' => 'https://wallpapercave.com/uwp/uwp3556224.jpeg',
                'is_featured'   => 1
            ],
            [
                'name'      => 'Transformer rise of the beasts',
                'slug'      => 'transformer-rise-of-the-beasts',
                'category'  => 'Action',
                'video_url' => 'https://youtu.be/U_-PaEjv21o?si=0wY3vg6z9LRLe1pS',
                'thumbnail' => 'https://wallpapercave.com/uwp/uwp3846699.jpeg',
                'is_featured'   => 0
            ],
        ];

        Movie::insert($movies);
    }
}
