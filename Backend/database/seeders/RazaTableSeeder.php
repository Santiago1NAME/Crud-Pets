<?php

namespace Database\Seeders;

use App\Models\Raza;
use Illuminate\Database\Seeder;

class RazaTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $razas = ['Perro', 'Gato', 'Tortuga', 'Hamster', 'Otro'];

        for ($i=0; $i < 5; $i++) {
            Raza::create(
                [
                    'nombreRaza' => $razas[$i]
                ]
            );
        }
    }
}
