@extends('layout')

@section('title', 'Kiểm Tra Từ Tiếng Nhật')

@include('include.header')

@section('content')
<div class="container mt-5">
    <h1 class="text-center">Kiểm Tra Phát Âm Tiếng Nhật</h1>
    
    <div class="card mt-4">
        <div class="card-body">
            <h5 class="card-title">Nhập từ tiếng Nhật bạn muốn kiểm tra:</h5>
            <div class="input-group mb-3">
                <input type="text" id="user-input" class="form-control" placeholder="Nhập từ tiếng Nhật của bạn" aria-label="Nhập từ tiếng Nhật của bạn">
                <div class="input-group-append">
                    <button id="start-btn" class="btn btn-primary" type="button">
                        <i class="fas fa-microphone"></i> Bắt Đầu Nói
                    </button>
                </div>
            </div>
            <div id="result" class="mt-3"></div>
        </div>
    </div>
</div>

<script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
<script>
    const startBtn = document.getElementById('start-btn');
    const userInput = document.getElementById('user-input');
    const resultDiv = document.getElementById('result');

    const recognition = new(window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'ja-JP'; // Ngôn ngữ Nhật Bản
    recognition.interimResults = false;

    startBtn.addEventListener('click', () => {
        const inputText = userInput.value.trim();
        if (inputText === '') {
            resultDiv.innerHTML = `<div class="alert alert-warning" role="alert">
                Vui lòng nhập từ tiếng Nhật mà bạn muốn kiểm tra.
            </div>`;
            return;
        }

        recognition.start();
        resultDiv.innerHTML = '<div class="alert alert-info" role="alert">Đang nghe...</div>';
    });

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        resultDiv.innerHTML = `<div class="alert alert-success" role="alert">Bạn đã nói: ${transcript}</div>`;
        checkAnswer(transcript);
    };

    recognition.onerror = (event) => {
        resultDiv.innerHTML = `<div class="alert alert-danger" role="alert">Lỗi: ${event.error}</div>`;
    };

    function checkAnswer(transcript) {
        const correctAnswer = userInput.value.trim(); // Lấy từ đã nhập
        if (transcript.trim() === correctAnswer) {
            resultDiv.innerHTML += '<div class="alert alert-success mt-2" role="alert">Đúng rồi!</div>';
        } else {
            resultDiv.innerHTML += '<div class="alert alert-danger mt-2" role="alert">Sai rồi. Hãy thử lại!</div>';
        }
    }
</script>
@endsection