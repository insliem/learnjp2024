@extends('layout')

@section('title', 'login')

@include('include.header')

@section('content')
    <h1>Kiểm Tra Từ Tiếng Nhật</h1>

    @foreach ($vocabulary as $vocabularyItem)
        <div>
            <div>{{ $vocabularyItem->vocabulary }}</div>
            <button id="start-btn{{ $vocabularyItem->id }}">Bắt Đầu Nói</button>
            <div id="result{{ $vocabularyItem->id }}"></div>

            <script>
                const startBtn{{ $vocabularyItem->id }} = document.getElementById('start-btn{{ $vocabularyItem->id }}');
                const result{{ $vocabularyItem->id }}Div = document.getElementById('result{{ $vocabularyItem->id }}');

                const recognition{{ $vocabularyItem->id }} = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
                recognition{{ $vocabularyItem->id }}.lang = 'ja-JP'; // Ngôn ngữ Nhật Bản
                recognition{{ $vocabularyItem->id }}.interimResults = false;

                startBtn{{ $vocabularyItem->id }}.addEventListener('click', () => {
                    recognition{{ $vocabularyItem->id }}.start();
                    result{{ $vocabularyItem->id }}Div.innerHTML = 'Đang nghe...';
                });

                recognition{{ $vocabularyItem->id }}.onresult = (event) => {
                    const transcript = event.results[0][0].transcript;
                    result{{ $vocabularyItem->id }}Div.innerHTML = `Bạn đã nói: ${transcript}`;
                    checkAnswer{{ $vocabularyItem->id }}(transcript);
                };

                recognition{{ $vocabularyItem->id }}.onerror = (event) => {
                    result{{ $vocabularyItem->id }}Div.innerHTML = `Lỗi: ${event.error}`;
                };

                function checkAnswer{{ $vocabularyItem->id }}(transcript) {
                    const correctAnswer = '{{ $vocabularyItem->vocabulary }}'; // Từ tiếng Nhật mà bạn muốn kiểm tra
                    if (transcript.trim() === correctAnswer.trim()) {
                        result{{ $vocabularyItem->id }}Div.innerHTML += '<br/>Đúng rồi!';
                    } else {
                        result{{ $vocabularyItem->id }}Div.innerHTML += '<br/>Sai rồi. Hãy thử lại!';
                    }
                }
            </script>
        </div>
    @endforeach

@endsection
