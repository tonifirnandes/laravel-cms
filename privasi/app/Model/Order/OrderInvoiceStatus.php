<?php

namespace App\Model\Order;

use Illuminate\Database\Eloquent\Model;

class OrderInvoiceStatus extends Model{

    protected $table="order_invoice_status";
    public $timestamps = false;

    public function OrderInvoice(){
        
        return $this->hasMany('App\Model\Order\OrderInvoice','invoiceStatusId'); 
        
    }

    protected $fillable = ['invoiceStatusDescription'];
    protected $primaryKey = 'invoiceStatusId';

}