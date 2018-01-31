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
use Input;
use DB;
use File;
use Redirect;

class ProductController extends Controller
{

	public function GetAllDataProduct(){
		$Product = Product::get();
		$ProductBrand = ProductBrand::get();
		$ProductCategory = ProductCategory::get();
		$ProductPrice = ProductPrice::get();
		$ProductPromo = ProductPromo::get();
		$ProductBrandCategory = ProductBrandCategory::get();
		return view('landing.home', compact('Product','ProductBrand','ProductCategory','ProductPrice','ProductPromo','ProductBrandCategory'));
	}

	public function InsertOrUpdateProduct(Request $request){
				
		$data = array(
			'productName' 			=> $request->ProductName,
			'productPartNumber' 	=> $request->ProductPartNumber,
			'productStock'	 		=> $request->ProductStock,
			'productSpesification' 	=> $request->ProductSpec,
			'productDescription' 	=> $request->ProductDesc,
			'productWeight' 		=> $request->ProductWeight,
			'productDownloadLink' 	=> $request->ProductDownload,
			'productCategoryId' 	=> $request->ProductCategory,
			'productBrandId' 		=> $request->ProductBrand,
		);
		
		$updateWhereClause = ["productName" => $data['productName']];		
		$updatedData = ["productName" => $data['productName'],"productPartNumber" => $data['productPartNumber'],"productStock" => $data['productStock'],"productSpesification" => $data['productSpesification'],"productDescription" => $data['productDescription'],"productWeight" => $data['productWeight'],"productDownloadLink" => $data['productDownloadLink'],"productCategoryId" => $data['productCategoryId'],"productBrandId" => $data['productBrandId']];		
		Product::updateOrCreate($updateWhereClause, $updatedData);
		
		return Redirect::back()->with('message','Update Product Successfull !');
	}
	
    public function InsertOrUpdateProductBrand(Request $request){

		$filename  = 'product_brand_'.$request->ProductBrandDesc.'.jpg';

		$uploadedImage = $request->file('ProductBrandImage');
		if(empty($uploadedImage)){
			echo "Upload image failed!";
		}else{
			$uploadedImage->move(base_path('upload/product_brand'), $filename);
		}
		
		$data = array(
			'productBrandDescription' => $request->ProductBrandDesc,
			'productBrandImage' => $filename,
		);

		$updateWhereClause = ["productBrandDescription" => $data['productBrandDescription']];		
		$updatedData = ["productBrandDescription" => $data['productBrandDescription'],"productBrandImage" => $data['productBrandImage']];		
		ProductBrand::updateOrCreate($updateWhereClause, $updatedData);

		return Redirect::back()->with('message','Update Product Brand Successfull !');
	}
	
	public function InsertOrUpdateProductCategory(Request $request){
		
		$filename  = 'product_category_'.$request->ProductCategoryDesc.'.jpg';
		
		$uploadedImage = $request->file('ProductCategoryImage');
		if(empty($uploadedImage)){
			echo "image upload fail";
		} else {
			$uploadedImage->move(base_path('upload/product_category'), $filename);			
		}
				
		$data = array(
			'productCategoryDescription' => $request->ProductCategoryDesc,
			'productCategoryImage' => $filename,
		);
		
		$updateWhereClause = ["productCategoryDescription" => $data['productCategoryDescription']];		
		$updatedData = ["productCategoryDescription" => $data['productCategoryDescription'],"productCategoryImage" => $data['productCategoryImage']];		
		ProductCategory::updateOrCreate($updateWhereClause, $updatedData);
		
		return Redirect::back()->with('message','Update Product Category Successfull !');
	}

	public function InsertOrUpdateProductBrandCategory(Request $request){
		
		$data = array(
			'productCategoryId' => $request->ProductCategory,
			'productBrandId' => $request->ProductBrand,
		);
		$updateWhereClause = ["productCategoryId" => $data['productCategoryId'],"productBrandId" => $data['productBrandId']];		
		$updatedData = ["productCategoryId" => $data['productCategoryId'],"productBrandId" => $data['productBrandId']];		
		ProductBrandCategory::updateOrCreate($updateWhereClause, $updatedData);

		return Redirect::back()->with('message','Update Product Brand Category Successfull !');
	}

	public function InsertOrUpdateProductPrice(Request $request){
		
		$data = array(
			'productPrice' => $request->ProductPrice,
			'productId' => $request->ProductId,
			'productPriceDisplayStatus' => $request->ProductPriceDisplayStatus,
			'productPriceStatus' => $request->ProductPriceStatus
		);
		$updateWhereClause = ["productPrice" => $data['productPrice']];		
		$updatedData = ["productPrice" => $data['productPrice'],"productId" => $data['productId'],"productPriceDisplayStatus" => $data['productPriceDisplayStatus'],"productPriceStatus" => $data['productPriceStatus']];		
		ProductPrice::updateOrCreate($updateWhereClause, $updatedData);

		return Redirect::back()->with('message','Update Product Price Successfull !');
	}

	public function InsertOrUpdateProductPromo(Request $request){
		
		$filename  = 'product_promo_'.$request->ProductPromoDesc.'.jpg';
		
		$uploadedImage = $request->file('ProductPromoImage');
		if(empty($uploadedImage)){
			echo "image upload fail";
		} else {
			$uploadedImage->move(base_path('upload/product_promo'), $filename);			
		}

		$data = array(
			'productPromoDescription' => $request->ProductPromoDesc,
			'productPromoImage' => $filename,
			'productId' => $request->ProductPromoId,
		);
		
		$updateWhereClause = ["productPromoDescription" => $data['productPromoDescription']];		
		$updatedData = ["productPromoDescription" => $data['productPromoDescription'],"productPromoImage" => $data['productPromoImage'],"productId" => $data['productId']];		
		ProductPromo::updateOrCreate($updateWhereClause, $updatedData);
		
		return Redirect::back()->with('message','Update Product Promo Successfull !');
	}

	public function UpdateProduct(Request $request)
    {
		$requestBody = $request->except('productId');

        $update = Product::where('productId', $request->productId)->update($requestBody,['options->enabled' => true]);

        return "ok";
	}

	public function GetDataProductBrandCategory(){
		
		$ProductBrandCategory = ProductBrandCategory::get();

		$data = '';
		$i=1;
		foreach ( $ProductBrandCategory as $ProductBrandCategorys )
        $data .= '<tr>
					<td>'.$i++.'</td>
					<td>'.$ProductBrandCategorys->ProductCategory->productCategoryDescription.'</td>
					<td>'.$ProductBrandCategorys->ProductBrand->productBrandDescription.'</td>
					<td><a href="#" productBrandCategoryId="'.$ProductBrandCategorys->productBrandCategoryId.'" class="btn btn-info btn-xs editProductBrandCategory"><i class="fa fa-pencil"></i> Edit </a>
						<a href="#" productBrandCategoryId="'.$ProductBrandCategorys->productBrandCategoryId.'" class="btn btn-danger btn-xs deleteProductBrandCategory"><i class="fa fa-trash-o"></i> Delete </a>
					</td>
				</tr>';
		
		return $data;
	}

	public function GetDataNewProductShow(){
		
		$Product = Product::paginate(10);

		$data = '';
		$i=1;
		foreach ( $Product as $Products )
        $data .= '<tr>
					<td>'.$i++.'</td>
					<td>'.$Products->productName.'</td>
					<td>'.$Products->productPartNumber.'</td>
					<td>'.$Products->productStock.'</td>
					<td>'.$Products->productDescription.'</td>
					<td><a href="#" productId="'.$Products->productId.'" class="btn btn-info btn-xs editProduct"><i class="fa fa-pencil"></i> Edit </a>
						<a href="#" productId="'.$Products->productId.'" class="btn btn-danger btn-xs deleteProduct"><i class="fa fa-trash-o"></i> Delete </a>
					</td>
				</tr>';
		
		return $data;
	}

	public function GetDataProductShow(){
		
		$Product = Product::paginate(10);

		$data = '';
		$i=1;
		foreach ( $Product as $Products )
        $data .= '<tr>
					<td>'.$i++.'</td>
					<td>'.$Products->productName.'</td>
					<td>'.$Products->productPartNumber.'</td>
					<td>'.$Products->productStock.'</td>
					<td>'.$Products->productDescription.'</td>
					<td><a href="#" productId="'.$Products->productId.'" class="btn btn-info btn-xs editProduct"><i class="fa fa-pencil"></i> Edit </a>
						<a href="#" productId="'.$Products->productId.'" class="btn btn-danger btn-xs deleteProduct"><i class="fa fa-trash-o"></i> Delete </a>
					</td>
				</tr>';
		
		return $data;
	}
	
	public function GetDataProductBrand(){
		
		$ProductBrand = ProductBrand::get();

		$data = '';
		$i=1;
		foreach ( $ProductBrand as $ProductBrands )
        $data .= '<tr>
					<td>'.$i++.'</td>
						<td>'.$ProductBrands->productBrandDescription.'</td>
						<td>'.$ProductBrands->productBrandImage.'</td>
						<td><a href="#" productBrandId="'.$ProductBrands->productBrandId.'" class="btn btn-info btn-xs editProductBrand"><i class="fa fa-pencil"></i> Edit </a>
							<a href="#" productBrandName="'.$ProductBrands->productBrandDescription.'" productBrandId="{{ $ProductBrands->productBrandId }}" class="btn btn-danger btn-xs deleteProductBrand"><i class="fa fa-trash-o"></i> Delete </a>
						</td>
				</tr>';
		
		return $data;
	}

	public function GetDataProductCategory(){
		
		$ProductCategory = ProductCategory::get();

		$data = '';
		$i=1;
		foreach ( $ProductCategory as $ProductCategorys )
        $data .= '<tr>
					<td>'.$i++.'</td>
					<td>'.$ProductCategorys->productCategoryDescription.'</td>
					<td>'.$ProductCategorys->productCategoryImage.'</td>
					<td><a href="#" productCategoryId="'.$ProductCategorys->productCategoryId.'" class="btn btn-info btn-xs editProductCategory"><i class="fa fa-pencil"></i> Edit </a>
						<a href="#" productCategoryName="'.$ProductCategorys->productCategoryDescription.'" productCategoryId="'.$ProductCategorys->productCategoryId.'" class="btn btn-danger btn-xs deleteProductCategory"><i class="fa fa-trash-o"></i> Delete </a>
					</td>
				</tr>';
		
		return $data;
	}

	public function GetDataProductPrice(){
		
		$ProductPrice = ProductPrice::paginate(15);

		$data = '';
		$i=1;
		foreach ( $ProductPrice as $ProductPrices )
        $data .= '<tr>
					<td>'.$i++.'</td>
					<td>'.$ProductPrices->productPrice.'</td>
					<td>'.$ProductPrices->Product->productName.'</td>
					<td>'.$ProductPrices->productPriceDisplayStatus.'</td>
					<td>'.$ProductPrices->productPriceStatus.'</td>
					<td><a href="#" productPriceId="'.$ProductPrices->productPriceId.'" class="btn btn-info btn-xs editProductPrice"><i class="fa fa-pencil"></i> Edit </a>
						<a href="#" productPriceId="'.$ProductPrices->productPriceId.'" class="btn btn-danger btn-xs deleteProductPrice"><i class="fa fa-trash-o"></i> Delete </a>
					</td>
				</tr>';
		
		return $data;
	}

	public function GetDataProductPromo(){
		
		$ProductPromo = ProductPromo::get();

		$data = '';
		$i=1;
		foreach ( $ProductPromo as $ProductPromos )
        $data .= '<tr>
					<td>'.$i++.'</td>
					<td>'.$ProductPromos->productPromoDescription.'</td>
					<td>'.$ProductPromos->productPromoImage.'</td>
					<td>'.$ProductPromos->Product->productName.'</td>
					<td><a href="#" productPromoId="'.$ProductPromos->productPromoId.'" class="btn btn-info btn-xs editProductPromo"><i class="fa fa-pencil"></i> Edit </a>
						<a href="#" productPromoId="'.$ProductPromos->productPromoId.'" class="btn btn-danger btn-xs deleteProductPromo"><i class="fa fa-trash-o"></i> Delete </a>
					</td>
				</tr>';
		
		return $data;
	}

	public function ShowFormProduct($id){
		
		$Product = Product::where('productId',$id)
								->get();

		return response()->json($Product[0]);
	}

	public function ShowFormProductBrand($id){
		
		$ProductBrand = ProductBrand::where('productBrandId',$id)
									 ->get();

		return response()->json($ProductBrand[0]);
	}

	public function ShowFormProductCategory($id){
		
		$ProductCategory = ProductCategory::where('productCategoryId',$id)
										  ->get();
										  
		return response()->json($ProductCategory[0]);
	}

	public function ShowFormProductBrandCategory($id){

		$ProductBrandCategory = ProductBrandCategory::where('productBrandCategoryId',$id)
												   ->get();

		return response()->json($ProductBrandCategory[0]);

	}

	public function ShowFormProductPrice($id){
		
		$ProductPrice = ProductPrice::where('productPriceId',$id)
									->get();

		return response()->json($ProductPrice[0]);
		
	}

	public function ShowFormProductPromo($id){
		
		$ProductPromo = ProductPromo::where('productPromoId',$id)
									->get();
									
		return response()->json($ProductPromo[0]);
		
	}

	public function DeleteProduct($id){
		
		DB::table('product')->where('productId','=',$id)->delete();
		
		return Redirect::back()->with('message','Delete Product Successfull !');
	}

	public function DeleteProductBrand($id,$name){
		
		DB::table('product_brand')->where('productBrandId','=',$id)->delete();

		$filename  = 'product_brand_'.$name.'.jpg';

		File::delete(base_path('upload/product_brand/'.$filename));
		
		return Redirect::back()->with('message','Delete Product Brand Successfull !');
		
	}

	public function DeleteProductCategory($id,$name){
		
		DB::table('product_category')->where('productCategoryId','=',$id)->delete();

		$filename  = 'product_category_'.$name.'.jpg';
		
		File::delete(base_path('upload/product_category/'.$filename));
		
		return Redirect::back()->with('message','Delete Product Category Successfull !');
	}

	public function DeleteProductBrandCategory($id){
		
		DB::table('product_brand_category')->where('productBrandCategoryId','=',$id)->delete();
		
		return Redirect::back()->with('message','Delete Product Brand Category Successfull !');
	}

	public function DeleteProductPrice($id){
		
		DB::table('product_price')->where('productPriceId','=',$id)->delete();
		
		return Redirect::back()->with('message','Delete Product Price Successfull !');
	}

	public function DeleteProductPromo($id){
		
		DB::table('product_promo')->where('productPromoId','=',$id)->delete();
		
		return Redirect::back()->with('message','Delete Product Promo Successfull !');
	}
}