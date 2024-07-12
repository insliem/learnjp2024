
@extends('layout')

@section('title', 'Hiragana')

@include('include.header')
@section('content')
<div class="Alphabet-wrap Alphabet-Hiragana">
    <?php $count=0;$line = 0;$line_main = 0; ?>
    <div class="Table-Alphabet Table-Hiragana">
            @foreach ($alphabet as $value)
            <?php $count++; ?>
            <div class="Alphabet">
                <h1 class="Alphabet-JP">{{$value->Hiragana}}</h1>
                <p class="Alphabet-Romanji">{{$value->Romanji}}</p>
            </div>
            @if($count==5) 
                </br>
                <?php $count=0;$line++;$line_main++; ?>
            @endif
            @if($line == 7) 
                </br>
                <?php $count=2;$line=5; ?>
            @endif
            @if($line_main == 10) 
                @break
            @endif
            @endforeach
    </div>
    <div class="Table-Alphabet Table-Hiragana">
            @foreach ($alphabet as $value)
                @if($line_main==10)
                    <?php $count++; ?>
                    <div class="Alphabet">
                        <h1 class="Alphabet-JP">{{$value->Hiragana}}</h1>
                        <p class="Alphabet-Romanji">{{$value->Romanji}}</p>
                    </div>
                    @if($count==5) 
                        </br>
                        <?php $count=0;$line++; ?>
                    @endif
                    @if($line == 7) 
                        </br>
                        <?php $count=2;$line=5; ?>
                    @endif
                @endif
            @endforeach
    </div>
</div>
@endsection
