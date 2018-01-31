<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Inquiry extends Model{

    protected $table="customer_inquiry";
    
    public $fillable = ['customerEmail','customerTelephone','customerInquiryNotes','productId','customerInquiryDate','customerInquiryStatus'];

    public $timestamps = false;

    public function Product(){

        return $this->belongsTo('App\Product', 'productId'); 

    }

    protected $primaryKey = 'customerInquiryId';
}
