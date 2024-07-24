<?php

namespace App\Http\Controllers;

use App\Models\Conversation;
use App\Models\ImgConversation;
use App\Models\Lesson;
use App\Models\Vocabulary;
use Illuminate\Http\Request;

class LessonsController extends Controller
{
    function ShowLesson()  {
        $lesson = Lesson::all();
        return view('Lesson.ListLesson', compact('lesson'));
    }
    function Lesson($id)  {
        $lesson = Lesson::find($id);
        return view('Lesson.Lesson', compact('lesson'));
    }
    function Vocabulary($id)  {
        $lesson = Lesson::find($id);
        $vocabulary = Vocabulary::where('idLesson', $id)->get();
        return view('Lesson.Vocabulary', compact('lesson','vocabulary'));
    }
    function Conversations($id)  {
        $lesson = Lesson::find($id);
        $conversations = Conversation::where('idLesson', $id)->get();
        // $conversation=$conversations->pluck('conversation')->toArray();
        $img = ImgConversation::where('idLesson', $id)->get();
        return view('Lesson.Conversations', compact('lesson','conversations','img'));
    }
    function voicetalk($id)  {
        $lesson = Lesson::find($id);
        $vocabulary = Vocabulary::where('idLesson', $id)->get();
        return view('Lesson.VoiceTalk', compact('lesson','vocabulary'));
    }
    function checkvoice()  {

        return view('checkvoice');
    }
}
