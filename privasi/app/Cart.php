<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Cart extends Model{

    protected $table="cart";
    
    public $timestamps = false;

    public $fillable = ['cartTime','cartExpireTime','cartStatus','customerEmail'];

    public function CartItem(){
        
        return $this->hasMany('App\CartItem', 'cartId'); 
        
    }

    public function Order(){
        
        return $this->hasMany('App\Model\Order\Order','cartId'); 

    }

    protected $primaryKey = 'cartId';
}
