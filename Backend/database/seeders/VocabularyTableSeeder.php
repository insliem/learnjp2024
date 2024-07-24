<?php

namespace Database\Seeders;

use App\Models\Vocabulary;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class VocabularyTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $Vocabulary = [
            [
                'idLesson' => '1',
                'vocabulary' => 'わたし',
                'kanji' => '',
                'Romaji' => 'watashi ',
                'Vietnamese' => 'Tôi',
                'voice' => '',
            ],
            [
                'idLesson' => '1',
                'vocabulary' => 'あなた ',
                'kanji' => '',
                'Romaji' => 'anata ',
                'Vietnamese' => 'Bạn',
                'voice' => '',
            ], [
                'idLesson' => '1',
                'vocabulary' => 'なまえ',
                'kanji' => '名前 ',
                'Romaji' => 'namae ',
                'Vietnamese' => 'Tên',
                'voice' => '',
            ], [
                'idLesson' => '1',
                'vocabulary' => 'がくせい',
                'kanji' => '学生',
                'Romaji' => 'gakusei ',
                'Vietnamese' => 'Học sinh, sinh viên',
                'voice' => '',
            ], [
                'idLesson' => '1',
                'vocabulary' => 'せんせい',
                'kanji' => '先生',
                'Romaji' => 'sensei',
                'Vietnamese' => 'Giáo viên',
                'voice' => '',
            ], [
                'idLesson' => '1',
                'vocabulary' => 'にほん',
                'kanji' => '日本',
                'Romaji' => 'nihon',
                'Vietnamese' => 'Nhật Bản',
                'voice' => '',
            ], [
                'idLesson' => '1',
                'vocabulary' => 'しゅっしん',
                'kanji' => '出身',
                'Romaji' => 'shusshin',
                'Vietnamese' => 'Quê quán, nơi sinh ra',
                'voice' => '',
            ], [
                'idLesson' => '1',
                'vocabulary' => 'しゅみ',
                'kanji' => '趣味',
                'Romaji' => 'shumi',
                'Vietnamese' => 'Sở thích',
                'voice' => '',
            ],
            [
                'idLesson' => '2',
                'vocabulary' => 'いち',
                'kanji' => '一',
                'Romaji' => 'ichi',
                'Vietnamese' => 'Một',
                'voice'=>'',
            ],[
                'idLesson' => '2',
                'vocabulary' => '(に',
                'kanji' => '二',
                'Romaji' => 'ni',
                'Vietnamese' => 'Hai',
                'voice'=>'',
            ],[
                'idLesson' => '2',
                'vocabulary' => 'さん',
                'kanji' => ' 三',
                'Romaji' => 'san',
                'Vietnamese' => 'Ba',
                'voice'=>'',
            ],[
                'idLesson' => '2',
                'vocabulary' => 'し/よん',
                'kanji' => '四',
                'Romaji' => 'shi/yon',
                'Vietnamese' => 'Bốn',
                'voice'=>'',
            ],[
                'idLesson' => '2',
                'vocabulary' => 'ご',
                'kanji' => '五',
                'Romaji' => 'go',
                'Vietnamese' => 'Năm',
                'voice'=>'',
            ],[
                'idLesson' => '2',
                'vocabulary' => 'ろく',
                'kanji' => '六',
                'Romaji' => 'roku',
                'Vietnamese' => 'Sáu',
                'voice'=>'',
            ],[
                'idLesson' => '2',
                'vocabulary' => 'しち/なな',
                'kanji' => '七',
                'Romaji' => 'shichi/nana',
                'Vietnamese' => 'Bảy',
                'voice'=>'',
            ],[
                'idLesson' => '2',
                'vocabulary' => 'はち',
                'kanji' => '八',
                'Romaji' => 'hachi',
                'Vietnamese' => 'Tám',
                'voice'=>'',
            ],[
                'idLesson' => '2',
                'vocabulary' => 'きゅう',
                'kanji' => '九',
                'Romaji' => 'kyuu',
                'Vietnamese' => 'Chín',
                'voice'=>'',
            ],[
                'idLesson' => '2',
                'vocabulary' => 'じゅう',
                'kanji' => '十',
                'Romaji' => 'juu',
                'Vietnamese' => 'Mười',
                'voice'=>'',
            ],
            [
                'idLesson' => '3',
                'vocabulary' => 'ちち',
                'kanji' => '父',
                'Romaji' => 'chichi',
                'Vietnamese' => 'Bố',
                'voice'=>'',
            ],[
                'idLesson' => '3',
                'vocabulary' => 'はは',
                'kanji' => '母',
                'Romaji' => 'haha',
                'Vietnamese' => 'Mẹ',
                'voice'=>'',
            ],[
                'idLesson' => '3',
                'vocabulary' => 'あに',
                'kanji' => '兄',
                'Romaji' => 'ani',
                'Vietnamese' => 'Anh trai',
                'voice'=>'',
            ],[
                'idLesson' => '3',
                'vocabulary' => 'あね',
                'kanji' => '姉',
                'Romaji' => 'ane',
                'Vietnamese' => 'Chị gái',
                'voice'=>'',
            ],[
                'idLesson' => '3',
                'vocabulary' => 'おとうと',
                'kanji' => '弟',
                'Romaji' => 'otouto',
                'Vietnamese' => 'Em trai',
                'voice'=>'',
            ],[
                'idLesson' => '3',
                'vocabulary' => 'いもうと',
                'kanji' => '妹',
                'Romaji' => 'imouto',
                'Vietnamese' => 'Em gái',
                'voice'=>'',
            ],[
                'idLesson' => '3',
                'vocabulary' => 'そふ',
                'kanji' => '祖父',
                'Romaji' => 'sofu',
                'Vietnamese' => 'Ông',
                'voice'=>'',
            ],[
                'idLesson' => '3',
                'vocabulary' => 'そぼ',
                'kanji' => '祖母',
                'Romaji' => 'sobo',
                'Vietnamese' => 'Bà',
                'voice'=>'',
            ],
            [
                'idLesson' => '4',
                'vocabulary' => 'ごはん',
                'kanji' => '',
                'Romaji' => 'gohan',
                'Vietnamese' => 'Cơm',
                'voice'=>'',
            ],[
                'idLesson' => '4',
                'vocabulary' => 'パン',
                'kanji' => '',
                'Romaji' => 'pan',
                'Vietnamese' => 'Bánh mì',
                'voice'=>'',
            ],[
                'idLesson' => '4',
                'vocabulary' => 'にく',
                'kanji' => '肉',
                'Romaji' => 'niku',
                'Vietnamese' => 'Thịt',
                'voice'=>'',
            ],[
                'idLesson' => '4',
                'vocabulary' => 'さかな',
                'kanji' => '魚',
                'Romaji' => 'sakana',
                'Vietnamese' => 'Cá',
                'voice'=>'',
            ],[
                'idLesson' => '4',
                'vocabulary' => 'やさい',
                'kanji' => '野菜',
                'Romaji' => 'yasai',
                'Vietnamese' => 'Rau',
                'voice'=>'',
            ],[
                'idLesson' => '4',
                'vocabulary' => 'くだもの',
                'kanji' => '果物',
                'Romaji' => 'kudamono',
                'Vietnamese' => 'Trái cây',
                'voice'=>'',
            ],[
                'idLesson' => '4',
                'vocabulary' => 'みず',
                'kanji' => '水',
                'Romaji' => 'mizu',
                'Vietnamese' => 'Nước',
                'voice'=>'',
            ],[
                'idLesson' => '4',
                'vocabulary' => 'おちゃ',
                'kanji' => 'お茶',
                'Romaji' => 'ocha',
                'Vietnamese' => 'Trà',
                'voice'=>'',
            ],[
                'idLesson' => '4',
                'vocabulary' => 'コーヒー',
                'kanji' => '',
                'Romaji' => 'koohii',
                'Vietnamese' => 'Cà phê',
                'voice'=>'',
            ],
        ];

        Vocabulary::insert($Vocabulary);
    }
}
