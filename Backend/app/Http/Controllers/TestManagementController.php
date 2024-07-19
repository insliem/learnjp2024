<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TestManager;
use Storage;

class TestManagementController extends Controller
{
    // Lấy danh sách các bài test
    public function TestManagement()
    {
        $test = TestManager::all();
        $tests = json_encode($test);
        Storage::put("TestManagement_API.json", $tests);
        return view("JPExcercise/TestManagement", ["testmanagement"=>$test]);
    }

}
