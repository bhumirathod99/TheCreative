<?php

namespace App\Http\Controllers;
use App\Usermaster;
use Illuminate\Http\Request;

class SignupController extends Controller
{
    public function index()
    {
        //
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $newUser = Usermaster::create([
            'fname' => $request->fname,
             'lname' => $request->lname,
             'email' => $request->email,
             'password' => $request->password,
             'phoneno' => $request->phoneno,
             'image' => $request->image,
             'address' => $request->address
         ]);
         if($newUser)
         {
             return response()->json("Record successfully added.......");
        }
        
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
