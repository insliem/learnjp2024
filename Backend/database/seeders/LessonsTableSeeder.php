<?php

namespace Database\Seeders;

use App\Models\Lesson;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LessonsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $lessons = [
            [
                'idLesson' => '1',
                'title' => '自己紹介',
                'Vietnamese' => 'Giới thiệu bản thân',
                'Romaji' => 'Jikoshoukai ',
                'voicetalk' => '',
                'imageLesson'=>'minna-no-nihongoLesson1.jpeg',
            ],
            [
                'idLesson' => '2',
                'title' => '数と時間',
                'Vietnamese' => 'Số đếm và thời gian',
                'Romaji' => 'Suu to Jikan',
                'voicetalk' => '',
                'imageLesson'=>'minna-no-nihongoLesson2.jpeg',
            ],
            [
                'idLesson' => '3',
               'title' => '家族',
                'Vietnamese' => 'Gia đình',
                'Romaji' => 'Kazoku',
                'voicetalk' => '',
                'imageLesson'=>'minna-no-nihongoLesson3.jpeg',
            ], [
                'idLesson' => '4',
               'title' => '食べ物と飲み物',
                'Vietnamese' => 'Thức ăn và đồ uống',
                'Romaji' => 'Tabemono to Nomimono',
                'voicetalk' => '',
                'imageLesson'=>'minna-no-nihongoLesson4.jpeg',
            ],
        ];

        Lesson::insert($lessons);
    }
}
