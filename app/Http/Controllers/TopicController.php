<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Topic;
use Validator;

class TopicController extends Controller
{
	public function fetch()
	{
		return Topic::all();
	}

	public function submit(Request $request)
	{
		Topic::create(['name' => $request->name]);

		return response()->json('Topic created successfully!', 201);
	}

	public function update(Request $request)
	{
		$topic = Topic::where('id', $request->id)->first();

		$validator = Validator::make(request()->all(), [
			'name' => 'required',
		]);

		if ($validator->fails()) {
			$errors = array();
			foreach ($validator->errors()->all() as $error) {
				array_push($errors, $error);
			}

			return response()->json(["messages" => $errors], 422);
		} else {
			$topic->name = $request->name;
			$topic->update();

			return response()->json('Topic updated successfully!', 200);
		}
	}

	public function delete(number $id)
	{
		$topic = Topic::where('id', $id)->first();
		$topic->delete();

		return response()->json('Topic deleted successfully!', 200);
	}
}
