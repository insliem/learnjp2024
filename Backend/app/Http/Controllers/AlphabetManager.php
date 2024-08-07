<?php

namespace App\Http\Controllers;

use App\Models\Alphabet;
use Illuminate\Http\Request;
use Storage;

class AlphabetManager extends Controller
{
    function GetAlphabetHiragana(){
        $alphabet = Alphabet::all();
        $alphabets = json_encode($alphabet);
        Storage::put("alphabets_API.json",$alphabets);
        return view("Vocabulary/Hiragana",["alphabet"=>$alphabet]);
    }
    function GetAlphabetKatakana(){
        $alphabet = Alphabet::all();
        $alphabets = json_encode($alphabet);
        Storage::put("alphabets_API.json",$alphabets);
        return view("Vocabulary/Katakana",["alphabet"=>$alphabet]);
    }
    function GetAlphabetKanji(){

    }
}
