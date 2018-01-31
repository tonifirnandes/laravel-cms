<?php

namespace App\Model\Product;

use Illuminate\Database\Eloquent\Model;

class ProductCategory extends Model{

    protected $table="product_category";
    protected $fillable = ['productCategoryDescription', 'productCategoryImage'];
    protected $primaryKey = 'productCategoryId';
    public $timestamps = false;

    public function Product(){

        return $this->hasMany('App\Model\Product\Product', 'productCategoryId'); 

    }

    public function ProductBrand(){
        
        return $this->belongsToMany('App\Model\Product\ProductBrand'); 
        
    }

    public function ProductBrandCategory(){
        
        return $this->hasMany('App\ProductBrandCategory'); 
        
    }

}
