<?php

namespace App\Model\Product;

use Illuminate\Database\Eloquent\Model;

class ProductPrice extends Model{

    protected $table="product_price_1";
    public $timestamps = false;

    public function Product(){
        
        return $this->belongsTo('App\Model\Product\Product','productId'); 
        
    }

    protected $fillable = ['productPrice','productId','productPriceType','productPriceDisplayStatus','productPriceStatus'];
    protected $primaryKey = 'productPriceId';

}
