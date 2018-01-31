<?php

namespace App\Model\Order;

use Illuminate\Database\Eloquent\Model;

class OrderStatus extends Model{

    protected $table="order_status";
    public $timestamps = false;

    public function Order(){
        
        return $this->hasMany('App\Model\Order\Order','orderStatusId'); 
        
    }

    protected $fillable = ['orderStatusDescription'];
    protected $primaryKey = 'orderStatusId';

}