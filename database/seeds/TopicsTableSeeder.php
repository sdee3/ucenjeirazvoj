<?php

use Illuminate\Database\Seeder;

class TopicsTableSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		DB::table('topics')->insert([
			[
				'name' => 'Deca i odrastanje',
				'created_at' => now(),
				'updated_at' => now()
			], 	[
				'name' => 'Roditeljstvo',
				'created_at' => now(),
				'updated_at' => now()
			], 	[
				'name' => 'Lični rast i lični razvoj',
				'created_at' => now(),
				'updated_at' => now()
			]
		]);
	}
}
