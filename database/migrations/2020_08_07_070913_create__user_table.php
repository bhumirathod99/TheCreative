<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user', function (Blueprint $table) {
            $table->Integer('user_id');
            $table->String('fname');
            $table->String('lname');
            $table->String('email');
            $table->timestamp('email_verified_at')->nullable();
            $table->String('password');
            $table->integer('phoneno');
            $table->String('address');
            $table->String('image');
            $table->primary('userid');
            $table->Increment();
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
        Schema::dropIfExists('user');
    }
}
