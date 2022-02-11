<?php

use Illuminate\Database\Eloquent\Model;

class Article extends Model
{

    protected $fillable = [
    'titolo',
    'sottotitolo',
    'genere',
    'testo',
    'autore',
    'data',
    'category_id',
    ];

    public function category(){
        return $this->belongsTo(Category::class);
    }

}
