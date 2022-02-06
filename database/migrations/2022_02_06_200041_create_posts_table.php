<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();

            $table->string('titolo', 200) ->unique();
            $table->string('sottotitolo',400) ->nullable();
            $table->enum('genere', ['cultura', 'società','sport','attualità']);
            $table->text('testo') ->required();
            $table->string('autore', 60)->required();
            $table->date('data')->required();
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
}
