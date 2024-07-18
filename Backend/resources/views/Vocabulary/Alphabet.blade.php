@extends('layout')

@section('title', 'Chữ cái tiếng Nhật')
@include('include.header')
@section('content')
<div onclick="closeAlphabet_blur()" class="Alphabet-blur"></div>
<!-- <div class="Alphabet-header"></div> -->
<div class="alphabet-body-wrap">
    <div class="alphabet-body-content-text">
        <h1>Chữ cái tiếng Nhật</h1>
        <p>Tiếng Nhật có 3 loại chữ là: Hiragana, Katakana và Kanji tức chữ Hán. </br>
        Hiragana và Katakana là chữ biểu âm, mỗi chữ thể hiện 1 âm, còn chữ Hán là chữ biểu ý, mỗi chữ có ý nghĩa nhất định.</p>
    </div>
    <div class="alphabet-body-content-alphabets">
        <div class="alphabet-headers">
            <div onclick="ClickHiragana()" class="alphabet-header alphabet-header-hiragana">
                Hiragana
            </div>
            <div onclick="ClickKatakana()" class="alphabet-header alphabet-header-katakana">
                Katakana
            </div>
            <div onclick="ClickKanji()" class="alphabet-header alphabet-header-kanji">
                Kanji
            </div>
        </div>
        <div class="alphabets-wrap">
            <div class="alphabet-hiragana">
            <div class="Table-Alphabet Table-Hiragana">
            <?php $count=0; ?>
            @foreach ($alphabet as $value)
            <?php $count++; ?>
            <div class="Alphabet-wrap-info">
                <div class="Alphabet">
                    <h1 class="Alphabet-JP">{{$value["Hiragana"]}}</h1>
                    <p class="Alphabet-Romanji">{{$value["Romanji"]}}</p>
                </div>
            </div>
            @if ($count % 5 == 0 or $count % 38 == 0 or $count==43)
                @if ($count != 40 or $count == 43)
                    @if ($count != 45)
                        </br>
                    @endif
                @endif
            @endif
            @if ($count==46)
                <?php $count=0; ?>
                @break
            @endif
            @endforeach
    </div>
    <div class="Table-Alphabet Table-Hiragana">
        <?php $countt=0;$stack = 0; ?>
            @foreach ($alphabet as $value)
                <?php $count++; ?>
                @if ($count>46)
                <?php $countt++; ?>
                <div class="Alphabet-wrap-info">
                <div class="Alphabet">
                <h1 class="Alphabet-JP">{{$value["Hiragana"]}}</h1>
                <p class="Alphabet-Romanji">{{$value["Romanji"]}}</p>
                </div>
            </div>
                @if ($countt % 5 == 0 && $countt<=25)
                        </br>
                @endif
                @if ($countt>25)
                    <?php $stack++; ?>
                @endif
                @if ($countt>25 && $stack == 3)
                        </br>
                        <?php $stack = 0; ?>
                @endif
                @endif
            @endforeach
    </div>      
            </div>
            <div class="alphabet-katakana">
            <?php $count=0; ?>
            <div class="Table-Alphabet Table-Hiragana">
            @foreach ($alphabet as $value)
            <?php $count++; ?>
            <div class="Alphabet-wrap-info">
                <div class="Alphabet">
                    <h1 class="Alphabet-JP">{{$value["Katakana"]}}</h1>
                    <p class="Alphabet-Romanji">{{$value["Romanji"]}}</p>
                </div>
            </div>
            @if ($count % 5 == 0 or $count % 38 == 0 or $count==43)
                @if ($count != 40 or $count == 43)
                    @if ($count != 45)
                        </br>
                    @endif
                @endif
            @endif
            @if ($count==46)
                <?php $count=0 ?>
                @break
            @endif
            @endforeach
    </div>
    <div class="Table-Alphabet Table-Hiragana">
        <?php $countt=0;$stack = 0; ?>
            @foreach ($alphabet as $value)
                <?php $count++; ?>
                @if ($count>46)
                <?php $countt++; ?>
                <div class="Alphabet-wrap-info">
                <div class="Alphabet">
                <h1 class="Alphabet-JP">{{$value["Katakana"]}}</h1>
                <p class="Alphabet-Romanji">{{$value["Romanji"]}}</p>
                </div>
            </div>
                @if ($countt % 5 == 0 && $countt<=25)
                        </br>
                @endif
                @if ($countt>25)
                    <?php $stack++; ?>
                @endif
                @if ($countt>25 && $stack == 3)
                        </br>
                        <?php $stack = 0; ?>
                @endif
                @endif
            @endforeach
    </div>
            </div>
            <div class="alphabet-kanji">
                <div class="kanji"></div>
            </div>
        </div>
    </div>
</div>
@endsection