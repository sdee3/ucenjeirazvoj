<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\SubTopic;
use Validator;

class SubTopicController extends Controller
{
	public function fetch(string $slug = null)
	{
		if (!$slug) {
			return SubTopic::with('topic')->get();
		} else {
			return SubTopic::where('slug', $slug)->with('topic')->first();
		}
	}

	public function submit(Request $request)
	{
		SubTopic::create([
			'name' => $request->name,
			'topic_id' => $request->topic_id,
			'slug' => $request->slug,
			'intro' => $request->intro,
			'content' => $request->content,
		]);

		return response()->json('SubTopic created successfully!', 201);
	}

	public function update(string $slug, Request $request)
	{
		$subtopic = SubTopic::where('slug', $slug)->first();

		$validator = Validator::make(request()->all(), [
			'name' => 'required',
			'topic_id' => 'required',
			'content' => 'required',
			'slug' => 'required|alpha_dash',
		]);

		if ($validator->fails()) {
			$errors = array();
			foreach ($validator->errors()->all() as $error) {
				array_push($errors, $error);
			}

			return response()->json(["messages" => $errors], 422);
		} else {
			$subtopic->name = $request->name;
			$subtopic->topic_id = $request->topic_id;
			$subtopic->slug = $request->slug;
			$subtopic->intro = $request->intro;
			$subtopic->content = $request->content;
			$subtopic->update();

			return response()->json('SubTopic updated successfully!', 200);
		}
	}

	public function delete(string $slug)
	{
		$subtopic = SubTopic::where('slug', $slug)->first();
		$subtopic->delete();

		return response()->json('SubTopic deleted successfully!', 200);
	}
}
