<?php

namespace App\Model\Order;

use Illuminate\Database\Eloquent\Model;

class OrderShipment extends Model{

    protected $table="order_shipment";
    public $timestamps = false;

    public function Order(){
        
        return $this->belongsTo('App\Model\Order\Order','orderId'); 
        
    }

    protected $fillable = ['orderId','shipmentReferenceId','shipmentTrackingNumber','shipmentPriceItem','shipmentFullPrice'];
    protected $primaryKey = 'shipmentId';

}