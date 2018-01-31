<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Admin extends Model{
    protected $table="admin_account";

    public $timestamps = false;
   
    public $fillable = ['adminEmail','adminPassword','adminPhoneNumber','adminFirstName','adminLastName','adminRoleId'];
}