<?php

namespace App\Model\Order;

use Illuminate\Database\Eloquent\Model;

class OrderMethodPayment extends Model{

    protected $table="order_payment";
    public $timestamps = false;

    public function Order(){
        
        return $this->belongsTo('App\Model\Order\Order','orderId'); 
        
    }

    protected $fillable = ['paymentDate','orderId','paymentReferenceId'];
    protected $primaryKey = 'orderPaymentId';

}