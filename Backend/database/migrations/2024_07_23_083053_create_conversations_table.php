<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('conversations', function (Blueprint $table) {
            $table->id();
            $table->integer('idLesson'); // Khóa ngoại tham chiếu đến bài học
            $table->integer('conversation'); 
            $table->string('speaker'); // Người nói
            $table->text('sentence'); // Câu
            $table->text('Vietnamese')->nullable(); // Nghĩa
            $table->integer('sentence_order'); // Thứ tự câu
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('conversations');
    }
};
