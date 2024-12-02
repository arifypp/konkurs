<?php

use App\Http\Controllers\Admin\ProfileController as AdminProfileController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Auth/Login', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->middleware(['guest']);

/**
 * ======================================================================================================
 * 1. Middleware with Inertia and user authentication (auth) and email verification (verified) enabled
 * ======================================================================================================
 */
Route::middleware(['auth', 'verified'])->prefix('user')->name('user.')->namespace('\App\Http\Controllers\User')->group(function () {

    Route::get('/dashboard', 'DashboardController@index')->name('dashboard');

    //*================== KonkursCategory ==================*//
    Route::resource('konkurs-category', 'KonkursCategoryController');

    /* =================== Email Restrictions ==================* */
    Route::resource('email-restrictions', 'EmailRestrictionsController');

    //*================== Konkurs ==================*//
    Route::prefix('konkurs')->group(function () {
        Route::get('/', 'KonkursDataController@index')->name('konkurs.index');
        Route::get('/show/{id}', 'KonkursDataController@show')->name('konkurs.show');
        Route::get('/customSending/{id}', 'KonkursDataController@customSending')->name('konkurs.customSending');
        Route::get('/create', 'KonkursDataController@create')->name('konkurs.create');
        Route::get('/export/{id}', 'KonkursDataController@export')->name('konkurs.export');
        Route::get('/today', 'KonkursDataController@today')->name('konkurs.today');
        Route::get('/yesterday', 'KonkursDataController@yesterday')->name('konkurs.yesterday');
        Route::get('/monthly', 'KonkursDataController@monthly')->name('konkurs.monthly');
        Route::get('/yearly', 'KonkursDataController@yearly')->name('konkurs.yearly');
        Route::get('/sendmail/{id}', 'KonkursDataController@sendmail')->name('konkurs.sendmail');
        Route::post('/', 'KonkursDataController@store')->name('konkurs.store');
        Route::get('/{konkurs}', 'KonkursDataController@show')->name('konkurs.show');
        Route::get('/{konkurs}/edit', 'KonkursDataController@edit')->name('konkurs.edit');
        Route::put('/{konkurs}', 'KonkursDataController@update')->name('konkurs.update');
        Route::delete('/{konkurs}', 'KonkursDataController@destroy')->name('konkurs.destroy');
    });    
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::prefix('admin')->name('admin.')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Admin/Dashboard');
    })->middleware(['auth:admin', 'verified:admin'])->name('dashboard');

    Route::middleware('auth:admin')->group(function () {
        Route::get('/profile', [AdminProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/profile', [AdminProfileController::class, 'update'])->name('profile.update');
        Route::delete('/profile', [AdminProfileController::class, 'destroy'])->name('profile.destroy');
    });
});

require __DIR__.'/auth.php';
