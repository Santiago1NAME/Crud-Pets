<?php

namespace App\Http\Controllers;

use App\Models\Pet;
use App\Models\Raza;
use Illuminate\Http\Request;

class PetController extends Controller
{

    public function register(Request $request)
    {
        if($request->hasFile('avatar')){
            $file = $request->file('avatar');
            $name = time().$file->getClientOriginalName();
            $file->move(public_path().'/img/', $name);
        }

        $pet = new Pet();
        $pet->name = $request->name;
        $pet->raza_id = $request->raza_id;
        $pet->fechaN = date($request->fechaN);
        $pet->nombreH = $request->nombreH;
        $pet->descripcion = $request->descripcion;
        $pet->imagen = $name;
        $pet->save();
    }

    public function getRazas(){
        return Raza::all();
    }

}
