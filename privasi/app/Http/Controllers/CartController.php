<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Requests;
use Validator; 
use App\Products;
use App\CartItem;
use App\Cart;
use Input;
use DB;
use Redirect;

class CartController extends Controller
{

	public function GetAllDataCart(){
		$Product = Product::get();
		
		$Cart = Cart::get();

		return view('landing.home', compact('Product','Cart'));
		
	}
	

	public function ShowFormCart($id){
		
		$Cart = DB::select('SELECT product_1.productName, product_1.productPartNumber, product_1.productStock, product_1.productSpesification, product_1.productDescription, product_1.productWeight, product_1.productDownloadLink, product_1.productCategoryId, product_1.productBrandId, cart_item.cartItemId, cart_item.productId, cart_item.cartItemQuantity, cart_item.cartItemTotalPrice, cart.cartId, cart.cartTime, cart.cartExpireTime, cart.cartStatus, cart.customerEmail FROM cart INNER JOIN cart_item ON cart_item.cartId = cart.cartId INNER JOIN product_1 ON cart_item.productId = product_1.productId WHERE  cart.cartId ='.$id);
		// $Cart = Cart::where('cartId',$id)
		// 			->get();

		return response()->json($Cart);
	}

	public function GetDataCart(){
		
		$Cart = Cart::get();

		$data = '';
		$i=1;
		foreach ( $Cart as $Carts )
        $data .= '<tr>
					<td>'.$i++.'</td>
					<td>'.$Carts->customerEmail.'</td>
					<td>'.$Carts->cartStatus.'</td>
					<td><a href="#" cartId="'.$Carts->cartId.'" class="btn btn-info btn-xs viewCart"><i class="fa fa-pencil"></i> View Detail </a>
					</td>
				</tr>';
		
		return $data;
	}

	public function ProceedToCartInquiry(Request $request){

		$data = array(
			'cartTime' => date("Y-j-F G:i:s"),
			'cartExpireTime' => date("Y-j-F G:i:s", strtotime("+3 months", strtotime($effectiveDate))),
			'cartStatus' => 'active',
			'customerEmail' => $request->username,
		);
		
		$updateWhereClause = ["customerEmail" => $data['customerEmail']];		
		$updatedData = ["customerEmail" => $data['customerEmail'],"cartTime" => $data['cartTime'],"cartExpireTime" => $data['cartExpireTime'],"cartStatus" => $data['cartStatus']];		
		Cart::updateOrCreate($updateWhereClause, $updatedData);
		
		return Redirect::back()->with('message','Move Data From Inquiry To Cart Successfull !');
	}
}