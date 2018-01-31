<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Requests;
use Validator; 
use App\Shipment;
use App\Model\Order\Order;
use App\Model\Order\OrderStatus;
use App\Model\Order\OrderInvoiceStatus;
use App\Model\Order\OrderInvoice;
use App\Model\Order\OrderShipment;
use App\Model\Order\OrderMethodPayment;
use App\Model\Order\OrderShipmentReference;
use Input;
use DB;
use Redirect;

class OrderController extends Controller
{

	public function GetAllDataOrder(){

		$Shipment = Shipment::get();

		return view('landing.home', compact('Shipment'));
		
	}

	public function ShowFormOrder($id){
		
		$Order = Order::where('orderId',$id)
						->get();
		
		return response()->json($Order[0]);
		
	}

	public function ShowFormOrderStatus($id){

		$OrderStatus = OrderStatus::where('orderStatusId',$id)
									->get();
        
		return response()->json($OrderStatus[0]);
		
	}

	public function ShowFormOrderInvoiceStatus($id){
		
		$OrderInvoiceStatus = OrderInvoiceStatus::where('invoiceStatusId',$id)
												->get();
        
		return response()->json($OrderInvoiceStatus[0]);
        
	}

	public function ShowFormOrderInvoice($id){
		
		$OrderInvoice = OrderInvoice::where('invoiceId',$id)
									->get();
        
		return response()->json($OrderInvoice[0]);
        
	}

	public function ShowFormOrderMethodPayment($id){
		
        $OrderMethodPayment = OrderMethodPayment::where('orderMethodPaymentId',$id)
												->get();
        
		return response()->json($OrderMethodPayment[0]);
	}

	public function ShowFormOrderShipment($id){
		
        $OrderShipment = OrderShipment::where('shipmentId',$id)
									->get();
        
		return response()->json($OrderShipment[0]);
	}

	public function ShowFormOrderShipmentReference($id){

		$OrderShipmentReference = OrderShipmentReference::where('shipmentReferenceId',$id)
														  ->get();
        
		return response()->json($OrderShipmentReference[0]);
	}

	public function GetDataOrder(){
		
		$Order = Order::get();

		$data = '';
		$i=1;
		foreach ( $Order as $Orders )
        $data .= '<tr>
					<td>'.$i++.'</td>
					<td>'.$Orders->orderTime.'</td>
					<td>'.$Orders->Cart->customerEmail.'</td>
					<td><a href="#" orderId="'.$Orders->orderId.'" class="btn btn-info btn-xs editOrder"><i class="fa fa-pencil"></i> Edit </a>
						<a href="#" orderId="'.$Orders->orderId.'" class="btn btn-danger btn-xs deleteOrder"><i class="fa fa-trash-o"></i> Delete </a>
					</td>
				</tr>';
		
		return $data;
	}

	public function GetDataOrderShipment(){
		
		$OrderShipment = OrderShipment::get();

		$data = '';
		$i=1;
		foreach ( $OrderShipment as $Shipments )
        $data .= '<tr>
					<td>'.$i++.'</td>
					<td>'.$Shipments->shipmentTrackingNumber.'</td>
					<td>'.$Shipments->shipmentPriceItem.'</td>
					<td>'.$Shipments->shipmentFullPrice.'</td>
					<td>'.$Shipments->Order->orderTime.'</td>
					<td><a href="#" shipmentId="'.$Shipments->shipmentId.'" class="btn btn-info btn-xs editShipment"><i class="fa fa-pencil"></i> Edit </a>
						<a href="#" shipmentId="'.$Shipments->shipmentId.'" class="btn btn-danger btn-xs deleteShipment"><i class="fa fa-trash-o"></i> Delete </a>
					</td>
				</tr>';
		
		return $data;
	}

	public function GetDataOrderShipmentReference(){
		
		$OrderShipmentReference = OrderShipmentReference::get();

		$data = '';
		$i=1;
		foreach ( $OrderShipmentReference as $OrderShipmentReferences )
        $data .= '<tr>
					<td>'.$i++.'</td>
					<td>'.$OrderShipmentReferences->shipmentReferenceDetail.'</td>
					<td>'.$OrderShipmentReferences->shipmentReference.'</td>
					<td><a href="#" shipmentReferenceId="'.$OrderShipmentReferences->shipmentReferenceId.'" class="btn btn-info btn-xs editShipmentReference"><i class="fa fa-pencil"></i> Edit </a>
						<a href="#" shipmentReferenceId="'.$OrderShipmentReferences->shipmentReferenceId.'" class="btn btn-danger btn-xs deleteShipmentReference"><i class="fa fa-trash-o"></i> Delete </a>
					</td>
				</tr>';
		
		return $data;
	}

	public function GetDataOrderStatus(){
		
		$OrderStatus = OrderStatus::get();

		$data = '';
		$i=1;
		foreach ( $OrderStatus as $OrderStatuses )
        $data .= '<tr>
					<td>'.$i++.'</td>
					<td>'.$OrderStatuses->orderStatusDescription.'</td>
					<td><a href="#" orderStatusId="'.$OrderStatuses->orderStatusId.'" class="btn btn-info btn-xs editOrderStatus"><i class="fa fa-pencil"></i> Edit </a>
						<a href="#" orderStatusId="'.$OrderStatuses->orderStatusId.'" class="btn btn-danger btn-xs deleteOrderStatus"><i class="fa fa-trash-o"></i> Delete </a>
					</td>
				</tr>';
		
		return $data;
	}

	public function GetDataOrderInvoice(){
		
		$OrderInvoice = OrderInvoice::get();

		$data = '';
		$i=1;
		foreach ( $OrderInvoice as $OrderInvoices )
        $data .= '<tr>
					<td>'.$i++.'</td>
					<td>'.$OrderInvoices->invoiceDetail.'</td>
					<td>'.$OrderInvoices->invoiceDate.'</td>
					<td>'.$OrderInvoices->Order->orderTime.'</td>
					<td>'.$OrderInvoices->OrderInvoiceStatus->invoiceStatusDescription.'</td>
					<td><a href="#" orderInvoiceId="'.$OrderInvoices->invoiceId.'" class="btn btn-info btn-xs editInvoice"><i class="fa fa-pencil"></i> Edit </a>
						<a href="#" orderInvoiceId="'.$OrderInvoices->invoiceId.'" class="btn btn-danger btn-xs deleteInvoice"><i class="fa fa-trash-o"></i> Delete </a>
					</td>
				</tr>';
		
		return $data;
	}

	public function GetDataOrderInvoiceStatus(){
		
		$OrderInvoiceStatus = OrderInvoiceStatus::get();

		$data = '';
		$i=1;
		foreach ( $OrderInvoiceStatus as $OrderInvoiceStatuses )
        $data .= '<tr>
					<td>'.$i++.'</td>
					<td>'.$OrderInvoiceStatuses->invoiceStatusDescription.'</td>
					<td><a href="#" orderInvoiceStatusId="'.$OrderInvoiceStatuses->invoiceStatusId.'" class="btn btn-info btn-xs editInvoiceStatus"><i class="fa fa-pencil"></i> Edit </a>
						<a href="#" orderInvoiceStatusId="'.$OrderInvoiceStatuses->invoiceStatusId.'" class="btn btn-danger btn-xs deleteInvoiceStatus"><i class="fa fa-trash-o"></i> Delete </a>
					</td>
				</tr>';
		
		return $data;
	}

	public function GetDataOrderMethodPayment(){
		
		$OrderMethodPayment = OrderMethodPayment::get();

		$data = '';
		$i=1;
		foreach ( $OrderMethodPayment as $OrderMethodPayments )
        $data .= '<tr>
					<td>'.$i++.'</td>
					<td>'.$OrderMethodPayments->paymentDate.'</td>
					<td>'.$OrderMethodPayments->Order->orderTime.'</td>
					<td><a href="#" paymentMethodId="'.$OrderMethodPayments->paymentMethodId.'" class="btn btn-info btn-xs editOrderMethodPayment"><i class="fa fa-pencil"></i> Edit </a>
						<a href="#" paymentMethodId="'.$OrderMethodPayments->paymentMethodId.'" class="btn btn-danger btn-xs deleteOrderMethodPayment"><i class="fa fa-trash-o"></i> Delete </a>
					</td>
				</tr>';
		
		return $data;
	}
	
	public function InsertOrUpdateOrder(Request $request){

		$data = array(
			'orderTotalPrice' => $request->OrderTotalPrice,
			'orderTime' => $request->OrderDate,
			'cartId' => $request->Cart,
			'orderStatusId' => $request->OrderStatus,
			'paymentMethodId' => $request->PaymentMethod,
		);
		
		$updateWhereClause = ["orderTotalPrice" => $data['orderTotalPrice']];		
		$updatedData = ["orderTotalPrice" => $data['orderTotalPrice'],"orderTime" => $data['orderTime'],"cartId" => $data['cartId'],"orderStatusId" => $data['orderStatusId'],"paymentMethodId" => $data['paymentMethodId']];		
		Order::updateOrCreate($updateWhereClause, $updatedData);
		
		return Redirect::back()->with('message','Update Order Successfull !');
	}

	public function InsertOrUpdateOrderStatus(Request $request){
		
		$data = array(
			'orderStatusDescription' => $request->StatusDescription
		);
		
		$updateWhereClause = ["orderStatusDescription" => $data['orderStatusDescription']];		
		$updatedData = ["orderStatusDescription" => $data['orderStatusDescription']];		
		OrderStatus::updateOrCreate($updateWhereClause, $updatedData);
		
		return Redirect::back()->with('message','Update Order Status Successfull !');
	}

	public function InsertOrUpdateOrderInvoice(Request $request){
		
		$data = array(
			'invoiceDetail' => $request->OrderInvoiceDetail,
			'invoiceDate' => $request->OrderInvoiceDate,
			'orderId' => $request->OrderInvoiceOrder,
			'invoiceStatusId' => $request->OrderInvoiceStatus
		);
		
		$updateWhereClause = ["invoiceDetail" => $data['invoiceDetail']];		
		$updatedData = ["invoiceDetail" => $data['invoiceDetail'],"invoiceDate" => $data['invoiceDate'],"orderId" => $data['orderId'],"invoiceStatusId" => $data['invoiceStatusId']];		
		OrderInvoice::updateOrCreate($updateWhereClause, $updatedData);
		
		return Redirect::back()->with('message','Update Order Invoice Successfull !');
	}

	public function InsertOrUpdateOrderInvoiceStatus(Request $request){
		
		$data = array(
			'invoiceStatusDescription' => $request->OrderStatusInvoiceDesc
		);
		
		$updateWhereClause = ["invoiceStatusDescription" => $data['invoiceStatusDescription']];		
		$updatedData = ["invoiceStatusDescription" => $data['invoiceStatusDescription']];		
		OrderInvoiceStatus::updateOrCreate($updateWhereClause, $updatedData);
		
		return Redirect::back()->with('message','Update Order Invoice Status Successfull !');
	}

	public function InsertOrUpdateOrderMethodPayment(Request $request){
		
		$data = array(
			'paymentMethodDescription' => $request->PaymentMethodDescription
		);
		
		$updateWhereClause = ["paymentMethodDescription" => $data['paymentMethodDescription']];		
		$updatedData = ["paymentMethodDescription" => $data['paymentMethodDescription']];		
		OrderMethodPayment::updateOrCreate($updateWhereClause, $updatedData);
		
		return Redirect::back()->with('message','Update Order Method Payment Status Successfull !');
	}
    
    public function InsertOrUpdateOrderShipment(Request $request){

		$data = array(
			'orderId' => $request->OrderShipmentDate,
			'shipmentReferenceId' => $request->OrderShipmentReference,
			'shipmentTrackingNumber' => $request->ShipmentTrackingNumber,
			'shipmentPriceItem' => $request->ShipmentPrice,
			'shipmentFullPrice' => $request->ShipmentFullPrice
		);
		
		$updateWhereClause = ["shipmentTrackingNumber" => $data['shipmentTrackingNumber']];		
		$updatedData = ["orderId" => $data['orderId'],"shipmentReferenceId" => $data['shipmentReferenceId'],"shipmentTrackingNumber" => $data['shipmentTrackingNumber'],"shipmentPriceItem" => $data['shipmentPriceItem'],"shipmentFullPrice" => $data['shipmentFullPrice']];		
		OrderShipment::updateOrCreate($updateWhereClause, $updatedData);
		
		return Redirect::back()->with('message','Update Order Shipment Successfull !');
	}

	public function InsertOrUpdateOrderShipmentReference(Request $request){
		
		$data = array(
			'shipmentReferenceDetail' => $request->ShipmentReferenceDetail,
			'shipmentReference' => $request->ShipmentReference
		);
		
		$updateWhereClause = ["shipmentReferenceDetail" => $data['shipmentReferenceDetail']];		
		$updatedData = ["shipmentReferenceDetail" => $data['shipmentReferenceDetail'],"shipmentReference" => $data['shipmentReference']];		
		OrderShipmentReference::updateOrCreate($updateWhereClause, $updatedData);
		
		return Redirect::back()->with('message','Update Order Shipment Reference Successfull !');
	}

	public function DeleteOrderStatus($id){
		
		DB::table('order_status')->where('orderStatusId','=',$id)->delete();
		
		return Redirect::back()->with('message','Delete Order Status Successfull !');
	}

	public function DeleteOrderInvoiceStatus($id){
		
		DB::table('order_invoice_status')->where('invoiceStatusId','=',$id)->delete();
		
		return Redirect::back()->with('message','Delete Order Status Invoice Successfull !');
	}

	public function DeleteOrderInvoice($id){
		
		DB::table('order_invoice')->where('invoiceId','=',$id)->delete();
		
		return Redirect::back()->with('message','Delete Order Invoice Successfull !');
	}

	public function DeleteOrderPaymentMethod($id){
		
		DB::table('order_payment_method')->where('paymentMethodId','=',$id)->delete();
		
		return Redirect::back()->with('message','Delete Order Payment Method Successfull !');
	}

	public function DeleteOrderShipmentReference($id){
		
		DB::table('shipment_reference')->where('shipmentReferenceId','=',$id)->delete();
		
		return Redirect::back()->with('message','Delete Shipment Reference Successfull !');
	}

	public function DeleteOrderShipment($id){
		
		DB::table('order_shipment')->where('shipmentId','=',$id)->delete();
		
		return Redirect::back()->with('message','Delete Shipment Successfull !');
	}
}