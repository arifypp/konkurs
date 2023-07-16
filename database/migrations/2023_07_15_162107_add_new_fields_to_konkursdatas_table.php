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
        Schema::table('konkursdatas', function (Blueprint $table) {
            // add email_send status boolean
            $table->boolean('email_send')->default(false)->after('konkurs_advocate_email');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('konkursdatas', function (Blueprint $table) {
            //
            $table->dropColumn('email_send');
        });
    }
};
