<?php

namespace App\Model\Product;

use Illuminate\Database\Eloquent\Model;

class ProductPromo extends Model{

    protected $table="product_promo";
    public $timestamps = false;

    public function Product(){
        
        return $this->belongsTo('App\Model\Product\Product','productId'); 
        
    }

    protected $fillable = ['productPromoDescription','productPromoImage','productId'];
    protected $primaryKey = 'productPromoId';

}
