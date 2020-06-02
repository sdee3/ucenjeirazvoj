<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SubTopic extends Model
{
	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = ['name', 'topic_id', 'intro', 'content', 'slug', 'img_url'];

	/**
	 * The attributes that should be hidden for arrays.
	 *
	 * @var array
	 */
	protected $hidden = ['created_at', 'updated_at'];

	/**
	 * Get the Sub Topics and their texts.
	 */
	public function subtopics()
	{
		return $this->hasMany('App\SubTopic');
	}

	/**
	 * Get the parent topic for the subtopic.
	 */
	public function topic()
	{
		return $this->belongsTo('App\Topic');
	}
}
