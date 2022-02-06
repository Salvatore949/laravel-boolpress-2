<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $fillable = [
    'titolo',
    'sottotitolo',
    'genere',
    'testo',
    'autore',
    'data'
    ];
}
