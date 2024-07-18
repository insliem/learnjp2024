<?php

namespace App\Http\Controllers;

use App\Models\Alphabet;
use Illuminate\Http\Request;
use Storage;

class AlphabetManager extends Controller
{
    function GetAlphabet(){
        // $alphabet = Alphabet::all();
        // $alphabets = json_encode($alphabet);
        // Storage::put("alphabets_API.json",$alphabets);
        $alphabet = Storage::get("alphabets_API.json");
        $s = json_decode($alphabet,true);
        return view("Vocabulary/Alphabet",["alphabet"=>$s]);
    }

}
