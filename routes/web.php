<?php

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

Route::get('/teme', function () {
    return view('pages/teme');
});

Route::get('/tema/{slug}', function ($slug) {
    $article = App\SubTopic::where('slug', $slug)->first();
    
    return view('pages/tema', compact(['slug', 'article']));
});

Route::get('/podrska/*', function () {
    return view('pages/podrska');
});

Route::get('/o-meni', function () {
    return view('pages/about');
});

Route::get('/citati', function () {
    return view('pages/citati');
});

Route::fallback(function () {
    return view('main');
});
