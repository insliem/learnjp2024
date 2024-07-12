
@extends('layout')

@section('title', 'Katakana')
@include('include.header')
@section('content')
<div class="Alphabet-warp Alphabet-Hiragana">
    <div class="Table-Alphabet Table-Hiragana">
        <div class="Alphabet">
            @foreach ($alphabet as $value)
                <h1 class="Alphabet-JP">{{$value->Katakana}}</h1>
                <p class="Alphabet-Romanji">{{$value->Romanji}}</p>
            @endforeach
        </div>
    </div>
</div>
@endsection
