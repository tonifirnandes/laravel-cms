<?php

namespace App\Model\Order;

use Illuminate\Database\Eloquent\Model;

class OrderShipmentReference extends Model{

    protected $table="shipment_reference";
    public $timestamps = false;

    protected $fillable = ['shipmentReferenceDetail','shipmentReference'];
    protected $primaryKey = 'shipmentReferenceId';

}