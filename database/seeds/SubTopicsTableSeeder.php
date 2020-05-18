<?php

use Illuminate\Database\Seeder;

class SubTopicsTableSeeder extends Seeder
{
	/**
	 * Run the database seeds.
	 *
	 * @return void
	 */
	public function run()
	{
		DB::table('sub_topics')->insert([
			[
				'name' => 'Stidljivost ili je nešto drugo u pitanju',
				'topic_id' => 1,
				'content' => 'tekst tekst tekst sakdlasjd qdldk j1290d eclk',
				'slug' => 'stidljivost',
				'created_at' => now(),
				'updated_at' => now()
			], 	[
				'name' => 'Deca i osećanja - ljutnja',
				'topic_id' => 1,
				'content' => 'tekst tekst tekst sakdlasjd qdldk j1290d eclk',
				'slug' => 'deca-i-osecanja-ljutnja',
				'created_at' => now(),
				'updated_at' => now()
			], 	[
				'name' => 'Prilagodljivost i deca',
				'topic_id' => 1,
				'content' => 'tekst tekst tekst sakdlasjd qdldk j1290d eclk',
				'slug' => 'prilagodljivost-i-deca',
				'created_at' => now(),
				'updated_at' => now()
			], 	[
				'name' => 'Najčešći problem u učenju',
				'topic_id' => 1,
				'content' => 'tekst tekst tekst sakdlasjd qdldk j1290d eclk',
				'slug' => 'najcesci-problem-u-ucenju',
				'created_at' => now(),
				'updated_at' => now()
			], 	[
				'name' => 'Značaj emocionalnog razvoja',
				'topic_id' => 1,
				'content' => 'tekst tekst tekst sakdlasjd qdldk j1290d eclk',
				'slug' => 'znacaj-emocionalnog-razvoja',
				'created_at' => now(),
				'updated_at' => now()
			], 	[
				'name' => 'Sistem uspešnog učenja',
				'topic_id' => 1,
				'content' => 'tekst tekst tekst sakdlasjd qdldk j1290d eclk',
				'slug' => 'sistem-uspesnog-ucenja',
				'created_at' => now(),
				'updated_at' => now()
			], 	[
				'name' => 'Da li sam ok iz ugla deteta',
				'topic_id' => 1,
				'content' => 'tekst tekst tekst sakdlasjd qdldk j1290d eclk',
				'slug' => 'da-li-sam-ok-iz-ugla-deteta',
				'created_at' => now(),
				'updated_at' => now()
			], 	[
				'name' => 'Začarani krug anksioznosti i kvaliteta sna',
				'topic_id' => 2,
				'content' => 'tekst tekst tekst sakdlasjd qdldk j1290d eclk',
				'slug' => 'zacarani-krug-anksioznosti-i-kvaliteta-sna',
				'created_at' => now(),
				'updated_at' => now()
			], 	[
				'name' => 'Kako naša uverenja utiču na kvalitet života',
				'topic_id' => 2,
				'content' => 'tekst tekst tekst sakdlasjd qdldk j1290d eclk',
				'slug' => 'kako-uverenja-uticu-na-kvalitet-zivota',
				'created_at' => now(),
				'updated_at' => now()
			], 	[
				'name' => 'Realistični optimizam',
				'topic_id' => 2,
				'content' => 'tekst tekst tekst sakdlasjd qdldk j1290d eclk',
				'slug' => 'realisticni-optimizam',
				'created_at' => now(),
				'updated_at' => now()
			], 	[
				'name' => 'Mentalno zdravlje i negovanje sebe',
				'topic_id' => 2,
				'content' => 'tekst tekst tekst sakdlasjd qdldk j1290d eclk',
				'slug' => 'mentalno-zdravlje-i-negovanje-sebe',
				'created_at' => now(),
				'updated_at' => now()
			], 	[
				'name' => 'Važnost slušanja',
				'topic_id' => 2,
				'content' => 'tekst tekst tekst sakdlasjd qdldk j1290d eclk',
				'slug' => 'vaznost-slusanja',
				'created_at' => now(),
				'updated_at' => now()
			], 	[
				'name' => 'Disciplina – šta je i kako nam može pomoći da budemo bolji roditelj',
				'topic_id' => 3,
				'content' => 'tekst tekst tekst sakdlasjd qdldk j1290d eclk',
				'slug' => 'disciplina-sta-je-kako-da-budemo-bolji-roditelj',
				'created_at' => now(),
				'updated_at' => now()
			], 	[
				'name' => 'Mercedes model vaspitanja',
				'topic_id' => 3,
				'content' => 'tekst tekst tekst sakdlasjd qdldk j1290d eclk',
				'slug' => 'mercedes-model-vaspitanja',
				'created_at' => now(),
				'updated_at' => now()
			], 	[
				'name' => 'Kako biti odgovoran roditelj',
				'topic_id' => 3,
				'content' => 'tekst tekst tekst sakdlasjd qdldk j1290d eclk',
				'slug' => 'kako-biti-odgovoran-roditelj',
				'created_at' => now(),
				'updated_at' => now()
			], 	[
				'name' => 'Roditeljstvo i tinejdžeri – šta sa konfliktima',
				'topic_id' => 3,
				'content' => 'tekst tekst tekst sakdlasjd qdldk j1290d eclk',
				'slug' => 'roditeljstvo-i-tinejdzeri-konflikti',
				'created_at' => now(),
				'updated_at' => now()
			],
		]);
	}
}
