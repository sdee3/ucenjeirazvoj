<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactMain;

class EmailController extends Controller
{
  public function submitContactForm(Request $request)
  {
    $request_data = $request->all();
    Mail::to('info@ucenjeirazvoj.com')->queue(new ContactMain($request_data));

    return response('Vaša poruka je uspešno poslata!', 200)
      ->header('Content-Type', 'text/plain');
  }
}
