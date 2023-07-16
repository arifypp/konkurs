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
        Schema::create('konkursdatas', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('konkurs_id')->max(255);
            $table->string('konkurs_name')->max(255);
            $table->string('konkurs_slug')->nullable();
            $table->unsignedBigInteger('konkurs_category_id')->nullable();
            $table->foreign('konkurs_category_id')->references('id')->on('konkurs_categories')->onDelete('cascade');
            $table->string('konkurs_industry_position')->nullable();
            $table->string('konkurs_phone')->max(255);
            $table->string('konkurs_address')->max(255);
            $table->string('konkurs_state')->max(255);
            $table->string('konkurs_zip')->max(255);
            $table->string('konkurs_advocate')->max(255);
            $table->string('konkurs_advocate_email')->max(255);
            $table->unsignedBigInteger('created_by')->nullable();
            $table->foreign('created_by')->references('id')->on('users')->onDelete('cascade');
            $table->unsignedBigInteger('updated_by')->nullable();
            $table->foreign('updated_by')->references('id')->on('users')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('konkursdatas');
    }
};
