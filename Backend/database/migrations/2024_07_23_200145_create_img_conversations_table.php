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
        Schema::create('img_conversations', function (Blueprint $table) {
            $table->id();
            $table->integer('conversation'); 
            $table->integer('idLesson'); // Khóa ngoại tham chiếu đến bài học
            $table->string('ImgConversation'); 
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('img_conversations');
    }
};
