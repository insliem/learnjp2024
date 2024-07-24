@extends('layout')

@section('title', 'login')

@include('include.header')
@section('content')
    <style>
        body {
            margin: 0;
            font-family: Open-sans, sans-serif;
        }

        .full-screen-bg {
            background: url({{ asset('img/backgroundLesson.jpeg') }}) no-repeat center center fixed;
            background-size: cover;
            height: 100vh;
            /* Chiều cao 100% của viewport */
            width: 100%;
            /* Chiều rộng 100% của viewport */
            overflow: hidden;
            /* Nếu cần */
        }

        h1,
        h2,
        h3 {
            font-family: Raleway, Helvetica, sans-serif;
        }

        h2 {
            font-size: 28px;
            font-weight: bold;
            margin-bottom: 30px;
            margin-top: 0;
        }

        .padded {
            padding: 100px 0;
        }

        .wrapper-grey {
            background: #F4F4F4;
        }

        .avatar {
            width: 30px;
            border-radius: 50%;
        }

        .avatar-bordered {
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
            border: white 1px solid;
        }

        .avatar-large {
            width: 50px;
        }


        .card {
            height: 250px;
            text-shadow: 0 1px 3px rgba(0, 0, 0, 0.6);
            background-size: cover !important;
            color: white;
            position: relative;
            border-radius: 5px;
            margin-bottom: 20px;
        }

        .card-user {
            position: absolute;
            right: 10px;
            top: 10px;
        }

        .card-category {
            position: absolute;
            top: 10px;
            left: 10px;
            font-size: 20px;
        }

        .card-description {
            position: absolute;
            bottom: 10px;
            left: 10px;
        }

        .card-description h2 {
            font-size: 22px;
        }

        .card-description p {
            font-size: 15px;
        }

        .card-link {
            position: absolute;
            top: 0;
            bottom: 0;
            width: 100%;
            z-index: 2;
            background: black;
            opacity: 0;
        }

        .card-link:hover {
            opacity: 0.1;
        }

        .features img {
            width: 100px;
        }

        .features h2 {
            font-size: 20px;
            margin-bottom: 10px;
        }

        .features p {
            font-size: 15px;
            font-weight: lighter;
        }
    </style>
    <div class="full-screen-bg ">
        <div class="container bg-light mt-4">
            <div class="mt-4">
                <h2 class="text-left">Bài 0{{ $lesson->id }} - Từ vựng</h2>
            </div>
            <div class="container ">
                <table class="table ">
                    <thead class="thead-dark">
                        <tr>
                            <th>Từ Vựng</th>
                            <th>Hán Tự</th>
                            <th>Phát âm</th>
                            <th>Nghĩa</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($vocabulary as $vocabularies)
                            <tr>
                                <td scope="row">{{ $vocabularies->vocabulary }}</td>
                                <td>{{ $vocabularies->kanji }}</td>
                                <td></td>
                                <td>{{ $vocabularies->Vietnamese }}</td>
                            </tr>
                        @endforeach


                    </tbody>
                </table>

            </div>


        </div>
    </div>


    </div>
@endsection
