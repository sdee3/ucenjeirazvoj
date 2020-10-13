<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/topics', 'TopicController@fetch');
Route::post('/topics', 'TopicController@submit');
Route::put('/topics', 'TopicController@update');
Route::delete('/topics/{id}', 'TopicController@delete');

Route::get('/subtopics', 'SubTopicController@fetch');
Route::get('/subtopics/latest', 'SubTopicController@fetchLatest');
Route::get('/tema/{slug}', 'SubTopicController@fetch');
Route::post('/subtopics', 'SubTopicController@submit');
Route::put('/tema/{slug}', 'SubTopicController@update');
Route::delete('/tema/{slug}', 'SubTopicController@delete');
Route::post('/img', 'SubTopicController@handleImage');

Route::post('/admin-login', 'BlogController@handleAdminLogin');
Route::post('/validate-cookie', 'BlogController@validateCookie');

Route::post('/contact', 'EmailController@submitContactForm');
