<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Requests;
use Validator; 
use App\Products;
use App\Inquiry;
use App\Cart;
use Input;
use DB;
use Redirect;

class InquiryController extends Controller
{

	public function GetAllDataInquiry(){

		$Product = Product::get();
		
		$Inquiry = Inquiry::get();

		return view('landing.home', compact('Product','Inquiry'));
		
	}

	public function ShowFormInquiry($id){
		
		$Inquiry = DB::select('SELECT customer_inquiry.customerInquiryId, customer_inquiry.customerEmail, customer_inquiry.customerTelephone, customer_inquiry.customerInquiryNotes, customer_inquiry.customerInquiryStatus, customer_inquiry.customerInquiryDate, product.productName, customer_inquiry.productId, product.productPartNumber, product.productStock, product.productDescription, product.productSpesification FROM customer_inquiry INNER JOIN product ON customer_inquiry.productId = product.productId WHERE customer_inquiry.customerInquiryId = '.$id);

		return response()->json($Inquiry);
	}

	public function ProceedToCartInquiry(Request $request){
		
		$afterCart = strtotime(date("Y-m-d h:i:s", strtotime($request->InquiryDate)) . " +3 month");

		$data = array(
			'cartTime' => $request->InquiryDate,
			'cartExpireTime' => date("Y-m-d h:i:s", $afterCart),
			'cartStatus' => 'active',
			'customerEmail' => $request->InquiryCustomerEmail,
		);
		
		$updateWhereClause = ["customerEmail" => $data['customerEmail']];		
		$updatedData = ["customerEmail" => $data['customerEmail'],"cartTime" => $data['cartTime'],"cartExpireTime" => $data['cartExpireTime'],"cartStatus" => $data['cartStatus']];		
		Cart::updateOrCreate($updateWhereClause, $updatedData);
		DB::table('customer_inquiry')->where('customerEmail','=',$data['customerEmail'])->delete();
		
		return Redirect::back()->with('message','Move Data From Inquiry To Cart Successfull !');
	}

	public function ChangeInquiryStatus(Request $request){
		
		$data = array(
			'customerInquiryId' => $request->idInquiry,
		);
		
		$updateWhereClause = ["customerInquiryId" => $data['customerInquiryId']];
		$updatedInquiryStatus = ["customerInquiryStatus" => "valid"];
		Inquiry::updateOrCreate($updateWhereClause, $updatedInquiryStatus);
		
		return Redirect::back()->with('message','Change Inquiry Status Successfull !');
	}
}