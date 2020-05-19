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
		$topic = Topic::create(['name' => $request->name]);

		return $topic;
	}

	public function update(Request $request)
	{
		$newValues = $request->all();
		$topics = Topic::all();

		foreach ($topics as $key => $cat) {
			$cat->name = $newValues[$key];
			$cat->save();
		}

		return response()->json('Topic updated successfully!', 200);
	}

	public function delete($id)
	{
		$topic = Topic::where('id', $id)->first();
		$topic->delete();

		return $topic;
	}
}
