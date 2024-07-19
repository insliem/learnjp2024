
@extends('layout')

@section('title', 'TestManagement')

@include('include.header')
@section('content')
<div class="Alphabet-wrap Alphabet-Hiragana">
<h1>Danh sách Bài Test</h1>
        <table>
            <thead>
                <tr>
                    <th>Chủ đề</th>
                    <th>Câu hỏi</th>
                    <th>Câu trả lời</th>
                    <th>Điểm</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($testmanagement as $test)
                    <tr>
                        <td>{{ $test->topic }}</td>
                        <td>{{ $test->question }}</td>
                        <td>{{ $test->answer }}</td>
                        <td>{{ $test->score }}</td>
                    </tr>
                @endforeach
            </tbody>
        </table>
</div>
@endsection
