<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Article;

use Faker\Generator as Faker;

$factory->define(Article::class, function (Faker $faker) {
    return [
        'titolo' => $faker -> sentence(),
        'sottotitolo' => $faker -> sentence(3),
        'genere' => $faker -> randomElement(['cultura', 'società','sport','attualità']),
        'testo' => $faker -> text(),
        'autore' => $faker -> word(),
        'data' => $faker ->dateTime(),
    ];
});
