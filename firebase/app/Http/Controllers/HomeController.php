<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

class HomeController extends Controller
{
    public function home(){
    	return view('welcome');
    }
    public function checkpoint(){
    	return view('make_checkpoint');
    }
    public function questions(){
    	return view('questions');
    }

}
