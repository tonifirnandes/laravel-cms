<?php

namespace App\Model\Product;

use Illuminate\Database\Eloquent\Model;

class ProductBrand extends Model{

    protected $table="product_brand";

    public $timestamps = false;

    public function Product(){

        return $this->belongsTo('App\Product', 'productBrandId'); 

    }

    public function ProductCategory(){
        
        return $this->belongsToMany('App\ProductCategory','productBrandId'); 
        
    }

    public function ProductBrandCategory(){
        
        return $this->hasMany('App\ProductBrandCategory','productBrandId'); 
        
    }

    protected $fillable = ['productBrandDescription','productBrandImage'];
    protected $primaryKey = 'productBrandId';
}
