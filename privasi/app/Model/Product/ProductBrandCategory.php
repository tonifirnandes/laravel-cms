<?php

namespace App\Model\Product;

use Illuminate\Database\Eloquent\Model;

class ProductBrandCategory extends Model{

    protected $table="product_brand_category";
    public $timestamps = false;

    public function ProductBrand(){
        
        return $this->belongsTo('App\Model\Product\ProductBrand','productBrandId'); 
        
    }

    public function ProductCategory(){
        
        return $this->belongsTo('App\Model\Product\ProductCategory','productCategoryId'); 
        
    }

    protected $fillable = ['productBrandId','productCategoryId'];
    protected $primaryKey = 'productBrandCategoryId';

}
