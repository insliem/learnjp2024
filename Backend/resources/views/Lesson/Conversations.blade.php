@extends('layout')

@section('title', 'login')

@include('include.header')
@section('content')
    <style>
        body {
            margin: 0;
            font-family: Open-sans, sans-serif;
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

        /* Ví dụ: */
        .imgConversation {
            width: 100%;
            /* Để hình ảnh rộng bằng phần tử cha */
            height: auto;
            /* Đảm bảo tỷ lệ khung hình tự động */
            margin: auto;
            /* Khoảng cách ngoài */
            padding: 5px;
            /* Khoảng cách trong */
            justify-content: center;
            text-align: center;
            /* Canh giữa */
        }
    </style>
    <div class="full-screen-bg ">
        <div class="container bg-light mt-4">
            <div class="mt-4">
                <h2 class="text-left">Bài 0{{ $lesson->id }} - Ngữ pháp</h2>
            </div>
            <div class="container ">
                <div class="row">

                    @foreach ($img as $image)
                        <div class="col-md-6 offset-md-3">

                            <img class="imgConversation" src="{{ asset('img/' . $image->ImgConversation) }}" alt="">
                        </div>
                    @endforeach
                </div>

                <div class="container mt-5">
                    <h2 class="mb-4">Voice Player</h2>
                    <div class="text-center">
                        <audio id="myAudio" src="{{ asset('audio/' . $lesson->voicetalk) }}" preload="auto"></audio>
                        <div class="mejs__container">
                            <div class="mejs__controls">
                                <div class="mejs__time-rail">
                                    <span class="mejs__currenttime">00:00</span>
                                    <input type="range" class="mejs__time-slider" value="0" min="0"
                                        max="100" step="1">
                                    <span class="mejs__duration">00:00</span>
                                </div>
                                <button type="button" id="playButton" class="mejs__playpause-button mejs__button">
                                    <span class="mejs__play" aria-hidden="true"></span>
                                    <span class="mejs__pause" aria-hidden="true"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>




                <table class="table ">

                    <tbody>
                        @foreach ($conversations as $conversation)
                            <tr>
                                <td scope="row">{{ $conversation->speaker }}:</td>
                                <div class="translate">
                                    <td>{{ $conversation->sentence }}</td>
                                </div>
                                <div class="abc">
                                    <td>{{ $conversation->Vietnamese }}</td>
                                </div>
                            </tr>
                        @endforeach


                    </tbody>
                </table>

            </div>


        </div>
    </div>
    <!-- Thêm mã JavaScript để khởi tạo MediaElement.js -->
    {{-- <script src="https://cdnjs.cloudflare.com/ajax/libs/mediaelement/4.2.13/mediaelement-and-player.min.js"></script> --}}
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            var mediaElement = new MediaElement('myAudio', {
                features: ['playpause', 'current', 'progress', 'duration', 'tracks', 'volume',
                    'fullscreen'],
                startVolume: 0.8,
                clickToPlayPause: true,
                success: function(media) {
                    media.addEventListener('loadedmetadata', function() {
                        var duration = media.duration;
                        var durationText = Math.floor(duration / 60) + ':' + ('0' + Math.floor(
                            duration % 60)).slice(-2);
                        $('.mejs__duration').text(durationText);
                    });
                }
            });

            $('#playButton').on('click', function() {
                if (mediaElement.paused) {
                    mediaElement.play();
                    $(this).find('.mejs__play').hide();
                    $(this).find('.mejs__pause').show();
                } else {
                    mediaElement.pause();
                    $(this).find('.mejs__pause').hide();
                    $(this).find('.mejs__play').show();
                }
            });

            mediaElement.addEventListener('timeupdate', function() {
                var currentTime = mediaElement.currentTime;
                var currentTimeText = Math.floor(currentTime / 60) + ':' + ('0' + Math.floor(currentTime %
                    60)).slice(-2);
                $('.mejs__currenttime').text(currentTimeText);
            });
        });
    </script>
  <script>
    var audio = document.getElementById('myAudio');
    var playButton = document.getElementById('playButton');

    playButton.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            playButton.querySelector('.mejs__play').style.display = 'none';
            playButton.querySelector('.mejs__pause').style.display = 'block';
        } else {
            audio.pause();
            playButton.querySelector('.mejs__pause').style.display = 'none';
            playButton.querySelector('.mejs__play').style.display = 'block';
        }
    });
</script>


    </div>
@endsection
