<?php

namespace App\Http\Controllers;

use App\Article;

use Illuminate\Http\Request;

class GuestController extends Controller
{
    public function getPosts() {
        $articles = Article::all();
        return view('posts', compact('articles'));
    }

    public function getForm() {
        return view('fill');
    }

    public function getOut() {
        return view('out');
    }
}
