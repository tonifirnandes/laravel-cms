<?php
Route::post('login','AdminController@login');
Route::get('logout','AdminController@logout');
Route::post('adminreg','AdminController@register');
Route::get('/','AdminController@getIndex');
Route::get('login', function () {
    return view('login');
});

Route::get('landing', 'HomeController@GetAllData');

Route::group(['prefix' => 'product'], function(){

    Route::get('/show_form_product/{id}', 'ProductController@ShowFormProduct');
    Route::get('/show_form_product_brand/{id}', 'ProductController@ShowFormProductBrand');
    Route::get('/show_form_product_category/{id}', 'ProductController@ShowFormProductCategory');
    Route::get('/show_form_product_brand_category/{id}', 'ProductController@ShowFormProductBrandCategory');
    Route::get('/show_form_product_price/{id}', 'ProductController@ShowFormProductPrice');
    Route::get('/show_form_product_promo/{id}', 'ProductController@ShowFormProductPromo');

    Route::get('/get_data_product_brand_category', 'ProductController@GetDataProductBrandCategory');
    Route::get('/get_data_product', 'ProductController@GetDataProductShow');
    Route::get('/get_data_new_product', 'ProductController@GetDataNewProductShow');
    Route::get('/get_data_product_brand', 'ProductController@GetDataProductBrand');
    Route::get('/get_data_product_category', 'ProductController@GetDataProductCategory');
    Route::get('/get_data_product_price', 'ProductController@GetDataProductPrice');
    Route::get('/get_data_product_promo', 'ProductController@GetDataProductPromo');

    Route::get('/delete_product/{id}', 'ProductController@DeleteProduct');
    Route::get('/delete_product_brand/{id}/{name}', 'ProductController@DeleteProductBrand');
    Route::get('/delete_product_category/{id}/{name}', 'ProductController@DeleteProductCategory');
    Route::get('/delete_product_brand_category/{id}', 'ProductController@DeleteProductBrandCategory');
    Route::get('/delete_product_price/{id}', 'ProductController@DeleteProductPrice');
    Route::get('/delete_product_promo/{id}', 'ProductController@DeleteProductPromo');

    Route::post('/insert_or_update_product', 'ProductController@InsertOrUpdateProduct');
    Route::post('/insert_or_update_product_brand', 'ProductController@InsertOrUpdateProductBrand');
    Route::post('/insert_or_update_product_category', 'ProductController@InsertOrUpdateProductCategory');
    Route::post('/insert_or_update_product_brand_category', 'ProductController@InsertOrUpdateProductBrandCategory');
    Route::post('/insert_or_update_product_price', 'ProductController@InsertOrUpdateProductPrice');
    Route::post('/insert_or_update_product_promo', 'ProductController@InsertOrUpdateProductPromo');
    
});

Route::group(['prefix' => 'upload'], function(){
    
    Route::post('importExcel', 'UploadController@importExcel');
    Route::get('/reload_product', 'UploadController@reloadProductData');
        
});

Route::group(['prefix' => 'admin'], function(){
    
    Route::post('show_form_account/{id}', 'AdminController@ShowFormAccount');
    Route::get('/get_data_account', 'AdminController@GetDataAccountShow');
    Route::get('/delete_account/{id}', 'AdminController@DeleteAccount');
    Route::post('/insert_or_update_account', 'AdminController@InsertOrUpdateAccount');
        
});

Route::group(['prefix' => 'cart'], function(){
    
    Route::get('show_form_cart/{id}', 'CartController@ShowFormCart');

    Route::get('get_data_cart', 'CartController@GetDataCart');
        
});

Route::group(['prefix' => 'inquiry'], function(){
    
    Route::get('show_form_inquiry/{id}', 'InquiryController@ShowFormInquiry');

    Route::post('/proceed_to_cart_inquiry', 'InquiryController@ProceedToCartInquiry');
    Route::post('/change_inquiry_status', 'InquiryController@ChangeInquiryStatus');
        
});

Route::group(['prefix' => 'order'], function(){

    Route::get('show_form_order_shipment/{id}', 'OrderController@ShowFormOrderShipment');
    Route::get('show_form_order_shipment_reference/{id}', 'OrderController@ShowFormOrderShipmentReference');
    Route::get('show_form_order/{id}', 'OrderController@ShowFormOrder');
    Route::get('show_form_order_invoice_status/{id}', 'OrderController@ShowFormOrderInvoiceStatus');
    Route::get('show_form_order_invoice/{id}', 'OrderController@ShowFormOrderInvoice');
    Route::get('show_form_order_status/{id}', 'OrderController@ShowFormOrderStatus');
    Route::get('show_form_order_method_payment/{id}', 'OrderController@ShowFormOrderMethodPayment');

    Route::get('/get_data_order', 'OrderController@GetDataOrder');
    Route::get('/get_data_order_shipment', 'OrderController@GetDataOrderShipment');
    Route::get('/get_data_order_shipment_reference', 'OrderController@GetDataOrderShipmentReference');
    Route::get('/get_data_order_status', 'OrderController@GetDataOrderStatus');
    Route::get('/get_data_order_invoice', 'OrderController@GetDataOrderInvoice');
    Route::get('/get_data_order_invoice_status', 'OrderController@GetDataOrderInvoiceStatus');
    Route::get('/get_data_order_method_payment', 'OrderController@GetDataOrderMethodPayment');

    Route::get('/delete_order_status/{id}', 'OrderController@DeleteOrderStatus');
    Route::get('/delete_order_invoice/{id}', 'OrderController@DeleteOrderInvoice');
    Route::get('/delete_order_invoice_status/{id}', 'OrderController@DeleteOrderInvoiceStatus');
    Route::get('/delete_order_payment_method/{id}', 'OrderController@DeleteOrderPaymentMethod');
    Route::get('/delete_order_shipment/{id}', 'OrderController@DeleteOrderShipment');
    Route::get('/delete_order_shipment_reference/{id}', 'OrderController@DeleteOrderShipmentReference');

    Route::post('/insert_or_update_order', 'OrderController@InsertOrUpdateOrder');
    Route::post('/insert_or_update_order_invoice', 'OrderController@InsertOrUpdateOrderInvoice');
    Route::post('/insert_or_update_order_invoice_status', 'OrderController@InsertOrUpdateOrderInvoiceStatus');
    Route::post('/insert_or_update_order_shipment', 'OrderController@InsertOrUpdateOrderShipment');
    Route::post('/insert_or_update_order_shipment_reference', 'OrderController@InsertOrUpdateOrderShipmentReference');
    Route::post('/insert_or_update_order_payment_method', 'OrderController@InsertOrUpdateOrderMethodPayment');
    Route::post('/insert_or_update_order_status', 'OrderController@InsertOrUpdateOrderStatus');
        
});