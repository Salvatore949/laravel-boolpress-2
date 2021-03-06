<?php

use Illuminate\Support\Facades\Route;

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

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/posts', 'GuestController@getPosts') ->name('posts');
// Auth::routes();
// Route::get('/home', 'HomeController@index')->name('home');
Route::post('/register','Auth\RegisterController@register') -> name('register');
Route::post('/login','Auth\LoginController@login') -> name('login');
Route::get('/logout','Auth\LoginController@logout' ) -> name('logout');
Route::get('/out', 'GuestController@getOut')  -> name('out');
Route::get('/','GuestController@getForm') -> name('fill');



