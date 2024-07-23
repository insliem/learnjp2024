<?php

namespace App\Http\Controllers;

use App\Models\Lesson;
use Illuminate\Http\Request;

class LessonsController extends Controller
{
    function ShowLesson()  {
        $lesson = Lesson::all();
        return view('Lesson.ListLesson', compact('lesson'));
    }
    function Lesson($id)  {
        $lesson = Lesson::all();
        return view('Lesson.Lesson', compact('lesson'));
    }
}
