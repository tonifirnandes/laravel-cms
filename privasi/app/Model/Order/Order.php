<?php

namespace App\Model\Order;

use Illuminate\Database\Eloquent\Model;

class Order extends Model{

    protected $table="order";
    public $timestamps = false;

    public function OrderStatus(){
        
        return $this->belongsTo('App\Model\Order\OrderStatus','orderStatusId'); 
        
    }

    public function OrderMethodPayment(){
        
        return $this->hasMany('App\Model\Order\OrderMethodPayment','orderId'); 
        
    }

    public function OrderInvoice(){
        
        return $this->hasMany('App\Model\Order\OrderInvoice','orderId'); 
        
    }

    public function OrderShipment(){
        
        return $this->hasMany('App\Model\Order\OrderShipment','orderId'); 
        
    }

    public function Cart(){
        
        return $this->belongsTo('App\Cart', 'cartId'); 

    }

    protected $fillable = ['orderTotalPrice','orderTime','cartId','orderStatusId','paymentMethodId','shipmentId'];
    protected $primaryKey = 'orderId';

}