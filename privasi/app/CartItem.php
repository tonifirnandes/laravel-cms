<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CartItem extends Model{

    protected $table="cart_item";

    public $timestamps = false;

    public function Cart(){
        
        return $this->belongsTo('App\Cart','cartId'); 
        
    }

    public function Product(){

        return $this->belongsTo('App\Model\Product\Product', 'productId'); 

    }

    protected $primaryKey = 'cartItemId';
}
