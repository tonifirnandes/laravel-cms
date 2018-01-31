<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Products;
use App\Http\Requests;
use Validator; 
use App\Model\Product\Product;
use App\Model\Product\ProductBrand;
use App\Model\Product\ProductCategory;
use App\Model\Product\ProductBrandCategory;
use App\Model\Product\ProductPrice;
use App\Model\Product\ProductPromo;
use App\Model\Order\Order;
use App\Model\Order\OrderStatus;
use App\Model\Order\OrderShipment;
use App\Model\Order\OrderShipmentReference;
use App\Model\Order\OrderMethodPayment;
use App\Model\Order\OrderInvoice;
use App\Model\Order\OrderInvoiceStatus;
use App\CartItem;
use App\Cart;
use App\Inquiry;
use Input;
use DB;
use File;
use Redirect;

class HomeController extends Controller{
    public function GetAllData(){
		if(session('management') != null) {
			return view('landing.home.homeManagement');		
		}else if(session('admin') != null) {
			return view('landing.home.homeAdmin');		
		}else if(session('finance') != null) {
			$productCounts 	= Product::count();		
			$Product 		= Product::paginate(15);
			$Order 			= Order::get();
			$Cart 			= Cart::get();
			$Inquiry 		= Inquiry::get();
			return view('landing.home.homeFinance', compact('Product','Cart','Inquiry','Order'));		
		}else{
			return redirect('login');
		}
    }   
}