
@extends('layout')

@section('title', 'Hiragana')

@include('include.header')
@section('content')
<div class="Alphabet-background">
</div>
<div onclick="closeAlphabet_blur()" class="Alphabet-blur"></div>
<div class="Alphabet-header">
    <h1>Bảng chữ cái Hiragana</h1>
</div>
<div class="Alphabet-wrap Alphabet-Hiragana">
    <?php $count=0;$line = 0;$line_main = 0; ?>
    <div class="Table-Alphabet Table-Hiragana">
            @foreach ($alphabet as $value)
            <?php $count++; ?>
            <div class="Alphabet-wrap-info">
                <div class="Alphabet">
                    <h1 class="Alphabet-JP">{{$value->Katakana}}</h1>
                    <p class="Alphabet-Romanji">{{$value->Romanji}}</p>
                </div>
                <div class="Alphabet-example">
                    <p>Các từ vựng liên quan</p>
                    <ul>
                        <li>Aki: sdaaa></>s</li>
                        <li>Aka: ákdj</li>
                        <li>Aku: ádasmkd</li>
                    </ul>
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
                    <p class="Alphabet-JP">{{$value->Katakana}}</p>
                    <p class="Alphabet-Romanji">{{$value->Romanji}}</p>
                </div>
                <div class="Alphabet-example">
                    <p>Các từ vựng liên quan</p>
                    <ul>
                        <li>Aki: sdaaa></>s</li>
                        <li>Aka: ákdj</li>
                        <li>Aku: ádasmkd</li>
                    </ul>
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
<div id="Alphabet-Infomation">
    <div class="alphabet-big">

    </div>
    <div class="alphabet-info">

    </div>
</div>
@endsection
