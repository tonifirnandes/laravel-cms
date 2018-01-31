<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Item;
use App\Http\Requests;
use Validator; 
use Input;
use DB;
use Redirect;
use Excel;
use App\OrientalProducts;

class UploadController extends Controller
{
    
     public function importExcel(Request $request){
    
    //     /**
    //      * ini cek data bukan file
    //      */
    //     if(Input::hasFile('import_file')){
            
    //         /**
    //          * pindahin ke sisi client, jadi kita gk perlu upload file, tapi tinggal ngepost data
    //          */
    //         $path = Input::file('import_file')->getRealPath();

    //         $data = Excel::load($path, function($reader) {

    //         })->get();

    //         /**
    //          * disini, lo baca datanya terus masukin ke db
    //          */

    //         if(!empty($data) && $data->count()){

    //             foreach ($data as $key => $value) {

    //                 $insert[] = ['no' => $value->no, 'product' => $value->product, 'code' => $value->code, 'dollar' => $value->dollar, 'berat' => $value->berat, 'stock' => $value->stock, 'lead' => $value->lead, 'price' => $value->price];
                
    //             }

    //             if(!empty($insert)){

    //                 DB::table('items_db')->insert($insert);

    //                 return Redirect::back()->with('message','Insert Data Success !');

    //             }else{
    //                 return Redirect::back()->with('message','Insert Data Failed !');   
    //             }
    //         }else{
    //             return Redirect::back()->with('message','Data Is Empty !');
    //         }

    //     } else {
    //         return Redirect::back()->with('message','Input File Failed !');
    //     }
    }

    public function reloadProductData(){
        $array = array();

		// $uploadProducts;
        // DB::table('oriental_products')->chunk(100, function($items){
        //     foreach ($items as $item) {
        //         array_push($array, $item);
        //         break;
        //     }
        //     return $array;
        // });     
        $uploadProducts = DB::select('SELECT * FROM oriental_products LIMIT 100');
        
        return  response()->json($uploadProducts);
    }

}