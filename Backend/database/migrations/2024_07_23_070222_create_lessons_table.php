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
        Schema::create('lessons', function (Blueprint $table) {
            $table->bigIncrements('id'); 
            $table->integer('idLesson')->notNull(); 
            $table->string('title', 255)->notNull(); 
            $table->string('Vietnamese', 255)->notNull();
            $table->string('Romaji', 255)->notNull();
            $table->string('voicetalk', 255);
            $table->timestamps(); 
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lessons');
    }
};
