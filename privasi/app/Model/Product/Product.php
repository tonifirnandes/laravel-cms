<?php

namespace App\Model\Product;

use Illuminate\Database\Eloquent\Model;

class Product extends Model{

    protected $table="product_1";

    public $timestamps = false;

    
    public function ProductBrand(){

        return $this->hasMany('App\ProductBrand'); 

    }

    public function ProductPrice(){
        
        return $this->hasMany('App\ProductPrice', 'productId'); 
        
    }

    public function ProductPromo(){
        
        return $this->hasMany('App\ProductPromo', 'productId'); 
        
    }

    public function CartItem(){
        
        return $this->hasMany('App\CartItem', 'productId'); 
        
    }

    public function Cart(){
        
        return $this->belongsTo('App\Cart', 'productId'); 
        
    }

    protected $fillable = ['productName','productPartNumber','productStock','productSpesification','productDescription','productWeight','productDownloadLink','productCategoryId','productBrandId'];
    protected $primaryKey = 'productId';
}
