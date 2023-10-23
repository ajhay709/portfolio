<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/projects/stream', function () {
    return Inertia::render('Projects/Stream');
});

Route::get('/projects/powiswood-kennels', function () {
    return Inertia::render('Projects/Powiswood');
});

Route::get('/projects/glycation-database', function () {
    return Inertia::render('Projects/GlycationDb');
});

Route::get('/ahay-cv-pdf', function () {
    return response()->file('a-hay-cv.pdf');
});
