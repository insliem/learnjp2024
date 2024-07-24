<?php

namespace Database\Seeders;

use App\Models\Conversation;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ConversationsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $conversation = [
            [
                'idLesson' => '1',
                'conversation' => '1',
                'speaker' => 'A',
                'Vietnamese' => 'Xin chào. Tôi là Tam.',
                'sentence' => 'こんにちは。わたしはタムです。',
                'sentence_order'=>'1',
            ],[
                'idLesson' => '1',
                'conversation' => '1',
                'speaker' => 'B',
                'Vietnamese' => '- Xin chào, Tam. Tôi là An.',
                'sentence' => 'こんにちは、タムさん。わたしはアンです。',
                'sentence_order'=>'2',
            ],[
                'idLesson' => '1',
                'conversation' => '1',
                'speaker' => 'A',
                'Vietnamese' => 'An có phải là học sinh không?',
                'sentence' => 'アンさんは学生ですか？',
                'sentence_order'=>'3',
            ],[
                'idLesson' => '1',
                'conversation' => '1',
                'speaker' => 'B',
                'Vietnamese' => 'Vâng, tôi là học sinh.',
                'sentence' => 'はい、学生です。',
                'sentence_order'=>'4',
            ],[
                'idLesson' => '1',
                'conversation' => '1',
                'speaker' => 'A',
                'Vietnamese' => 'タムさんは？',
                'sentence' => 'Còn Tam thì sao?',
                'sentence_order'=>'5',
            ],[
                'idLesson' => '1',
                'conversation' => '1',
                'speaker' => 'B',
                'Vietnamese' => 'Tôi cũng là học sinh.',
                'sentence' => 'わたしも学生です。',
                'sentence_order'=>'6',
            ],
            [
                'idLesson' => '2',
                'conversation' => '1',
                'speaker' => 'A',
                'Vietnamese' => 'Bây giờ là mấy giờ?',
                'sentence' => '今何時ですか？。',
                'sentence_order'=>'1',
            ],[
                'idLesson' => '2',
                'conversation' => '1',
                'speaker' => 'B',
                'Vietnamese' => 'Bây giờ là 4 giờ.',
                'sentence' => '今は4時です。。',
                'sentence_order'=>'2',
            ],[
                'idLesson' => '2',
                'conversation' => '1',
                'speaker' => 'A',
                'Vietnamese' => 'Cảm ơn.',
                'sentence' => ' ありがとう。',
                'sentence_order'=>'3',
            ],[
                'idLesson' => '2',
                'conversation' => '1',
                'speaker' => 'B',
                'Vietnamese' => 'Không có gì.',
                'sentence' => 'どういたしまして。',
                'sentence_order'=>'4',
            ],
            [
                'idLesson' => '3',
                'conversation' => '1',
                'speaker' => 'A',
                'Vietnamese' => 'Gia đình Tam có bao nhiêu người?',
                'sentence' => 'タムさんの家族は何人ですか？ ',
                'sentence_order'=>'1',
            ],[
                'idLesson' => '3',
                'conversation' => '1',
                'speaker' => 'B',
                'Vietnamese' => 'Gia đình tôi có 5 người.',
                'sentence' => 'わたしの家族は5人です。',
                'sentence_order'=>'2',
            ],[
                'idLesson' => '3',
                'conversation' => '1',
                'speaker' => 'A',
                'Vietnamese' => 'Bạn có anh chị em không?',
                'sentence' => '兄弟はいますか？',
                'sentence_order'=>'3',
            ],[
                'idLesson' => '3',
                'conversation' => '1',
                'speaker' => 'B',
                'Vietnamese' => 'Vâng, tôi có một chị gái.',
                'sentence' => 'はい、姉が一人います。 ',
                'sentence_order'=>'4',
            ],
            [
                'idLesson' => '4',
                'conversation' => '1',
                'speaker' => 'A',
                'Vietnamese' => 'Tam thích gì?',
                'sentence' => 'タムさんは何が好きですか？ ',
                'sentence_order'=>'1',
            ],[
                'idLesson' => '4',
                'conversation' => '1',
                'speaker' => 'B',
                'Vietnamese' => 'Tôi thích trái cây.',
                'sentence' => 'わたしは果物が好きです。 ',
                'sentence_order'=>'2',
            ],[
                'idLesson' => '4',
                'conversation' => '1',
                'speaker' => 'A',
                'Vietnamese' => 'Bạn thích loại trái cây nào?',
                'sentence' => 'どんな果物が好きですか？ ',
                'sentence_order'=>'3',
            ],[
                'idLesson' => '4',
                'conversation' => '1',
                'speaker' => 'B',
                'Vietnamese' => 'Tôi thích táo',
                'sentence' => 'りんごが好きです。 ',
                'sentence_order'=>'4',
            ],
            
           
        ];

        Conversation::insert($conversation);
    }
}
