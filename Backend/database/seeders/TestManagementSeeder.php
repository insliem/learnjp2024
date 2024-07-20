<?php

namespace Database\Seeders;

use App\Models\excercise;
use App\Models\Exercise;
use App\Models\TestManager;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use DB;

class TestManagementSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $excercise = [
            ["topic" => "Test Hiragana", "question" => "Hiragana cho âm “ka” là gì?", "answer" => "か", "score" => 10],
            ["topic" => "Test Hiragana", "question" => "Chữ Hiragana nào biểu diễn âm “su”?", "answer" => "す", "score" => 10],
            ["topic" => "Test Hiragana", "question" => "Âm “shi” được viết như thế nào trong Hiragana?", "answer" => "し", "score" => 10],
            ["topic" => "Test Hiragana", "question" => "Tìm Hiragana cho âm “ne”.", "answer" => "ね", "score" => 10],
            ["topic" => "Test Hiragana", "question" => "Âm “ku” trong Hiragana là chữ nào?", "answer" => "く", "score" => 10],
            ["topic" => "Test Hiragana", "question" => "Chữ Hiragana nào đại diện cho âm “sa”?", "answer" => "さ", "score" => 10],
            ["topic" => "Test Hiragana", "question" => "Làm thế nào để viết âm “te” bằng Hiragana?", "answer" => "て", "score" => 10],
            ["topic" => "Test Hiragana", "question" => "Chữ nào trong Hiragana tương ứng với âm “ni”?", "answer" => "に", "score" => 10],
            ["topic" => "Test Hiragana", "question" => "Âm “ha” được thể hiện như thế nào trong Hiragana?", "answer" => "は", "score" => 10],
            ["topic" => "Test Hiragana", "question" => "Tìm chữ Hiragana cho âm “me”.", "answer" => "め", "score" => 10]
        ];
        foreach($excercise as $value)
        {
               excercise ::create($value); 
        }
    }
}
