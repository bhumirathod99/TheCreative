<?php

namespace App\Http\Controllers;
use App\Usermaster;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    
    public function formSubmit(Request $request)
    {
        $count=count(Usermaster::all());
        $email=$request->email;
        $password=$request->password;
        
        //$userprofile = User::find($user_id)->where('email' = $email );
        
        // if($check==0)
        // {
        //     $msg="Login unsuccesfully";
        // }
        // else{
        //     $msg="login successfully";
        // }
        $check = Usermaster::where('email'=$email and 'password'=$password);
        $users = ([
            'email' => $request->email,
            'password' => $request->password
        ]);
        
            return response()->json([" successfully added.......", $count, $email, $password, $check]);
        
    }
}