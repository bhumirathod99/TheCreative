<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Usermaster extends Model
{
    protected $fillable = ["fname" , "lname" , "email" ,"password" ,"phoneno" ,"image" ,"address"];
}
