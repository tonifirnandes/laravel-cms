<?php

namespace App\Model\Order;

use Illuminate\Database\Eloquent\Model;

class OrderInvoice extends Model{

    protected $table="order_invoice";
    public $timestamps = false;

    public function Order(){
        
        return $this->belongsTo('App\Model\Order\Order','orderId'); 
        
    }

    public function OrderInvoiceStatus(){
        
        return $this->belongsTo('App\Model\Order\OrderInvoiceStatus','invoiceStatusId'); 
        
    }

    public function OrderShipment(){
        
        return $this->hasMany('App\Model\Order\OrderShipment','invoiceId'); 
        
    }

    protected $fillable = ['invoiceDetail','invoiceDate','orderId','invoiceStatusId'];
    protected $primaryKey = 'invoiceId';

}