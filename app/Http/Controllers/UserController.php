<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        //
    }

    public function create()
    {
        //
    }

    public function store(Request $request,User $user)
    {

        $user->$fname = $request->input('fname');
        $user->$lname = $request->input('lname');
        $user->$email = $request->input('email');
        $user->$password = $request->input('password');
        $user->$phoneno = $request->input('phoneno');
        $user->$address = $request->input('address');
        $user->$image = $request->input('image');
        echo $user->$fname;
        $user->save();
        //return redirect('/Login');
    }

    public function show($id)
    {
        //
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }
}
