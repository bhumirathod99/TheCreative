<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UserMaster extends Migration
{
    public function up()
    {
        Schema::create('usermasters', function (Blueprint $table) {
        $table->increments('user_id');
        
        $table->String('fname')->nullable();
        $table->String('lname')->nullable();
        $table->String('email')->unique();
        $table->String('password');
        $table->integer('phoneno')->nullable();
        $table->String('address')->n;
        $table->String('image');
        $table->timestamps();
        });
    }
    public function down()
    {
        Schema::dropIfExists('usermasters');
    }
}
