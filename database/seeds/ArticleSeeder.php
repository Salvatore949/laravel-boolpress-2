<?php

use Illuminate\Database\Seeder;

use App\Category;
use App\Article;

class ArticleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Article::class, 20) ->make() ->each(function($article){
          $category = Category::inRandomOrder() ->limit(1) ->first();
          $article -> category() ->associate($category);
          $article -> save();
        });
    }
}
