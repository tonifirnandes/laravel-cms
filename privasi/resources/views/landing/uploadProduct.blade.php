@extends('layouts.headerLanding')

@section('content')
<div class="right_col" role="main">
<div class="row">
   <div class="session-message col-md-3" style=""><?php echo Session::get('message'); ?></div>
   <div class="col-md-12 col-sm-12 col-xs-12">
      <div class="x_panel">
         <div class="x_title"><h3>Product </h3></div>
         <div class="x_content">
            <div class="" role="tabpanel" data-example-id="togglable-tabs">
               <div id="myTabContent" class="tab-content">
                  <div role="tabpanel" class="tab-pane fade active in" id="InputProduct" aria-labelledby="profile-tab">
                    <div class="productForm">
                      {!! Form::open(['url' => 'product/insert_or_update_product', 'method' => 'post', 'class'=>'form-horizontal', 'files' => true,'enctype'=>'multipart/form-data']) !!}
                      <div class="form-group">
                        {!! Form::label('ProductName', 'Product Name', ['class' => 'col-md-3 col-sm-3 col-xs-12']); !!}
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          {!! Form::text('ProductName','',['class'=>'form-control col-md-7 col-xs-12','data-parsley-maxlength'=>'40','required'=>'required']) !!}
                        </div>
                      </div>
                      <div class="form-group">
                      {!! Form::label('ProductPartNumber', 'Product Part Number', ['class' => 'col-md-3 col-sm-3 col-xs-12']); !!}
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          {!! Form::text('ProductPartNumber','',['class'=>'form-control col-md-7 col-xs-12','data-parsley-type'=>'integer','data-parsley-maxlength'=>'11']) !!}
                        </div>
                      </div>
                      <div class="form-group">
                      {!! Form::label('ProductStock', 'Product Stock', ['class' => 'col-md-3 col-sm-3 col-xs-12']); !!}
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          {!! Form::text('ProductStock','',['class'=>'form-control col-md-7 col-xs-12','data-parsley-type'=>'integer','data-parsley-maxlength'=>'11']) !!}
                        </div>
                      </div>
                      <div class="form-group">
                      {!! Form::label('ProductSpec', 'Product Specification', ['class' => 'col-md-3 col-sm-3 col-xs-12']); !!}
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          {!! Form::text('ProductSpec','',['class'=>'form-control col-md-7 col-xs-12']) !!}
                        </div>
                      </div>
                      <div class="form-group">
                      {!! Form::label('ProductDesc', 'Product Description', ['class' => 'col-md-3 col-sm-3 col-xs-12']); !!}
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          {!! Form::text('ProductDesc','',['class'=>'form-control col-md-7 col-xs-12']) !!}
                        </div>
                      </div>
                      <div class="form-group">
                      {!! Form::label('ProductWeight', 'Product Weight', ['class' => 'col-md-3 col-sm-3 col-xs-12']); !!}
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          {!! Form::text('ProductWeight','',['class'=>'form-control col-md-7 col-xs-12']) !!}
                        </div>
                      </div>
                      <div class="form-group">
                      {!! Form::label('ProductDownload', 'Product Download Link', ['class' => 'col-md-3 col-sm-3 col-xs-12']); !!}
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          {!! Form::text('ProductDownload','',['class'=>'form-control col-md-7 col-xs-12']) !!}
                        </div>
                      </div>
                      <div class="form-group">
                      {!! Form::label('ProductBrand', 'Product Brand', ['class' => 'col-md-3 col-sm-3 col-xs-12']); !!}
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          <select class="form-control" id="ProductBrand" name="ProductBrand">
                            @foreach ( $ProductBrand as $ProductBrands )
                              <option value="{{ $ProductBrands->productBrandId }}">{{ $ProductBrands->productBrandDescription }}</option>
                            @endforeach
                          </select>
                        </div>
                      </div>
                      <div class="form-group">
                        {!! Form::label('ProductCategory', 'Product Category', ['class' => 'col-md-3 col-sm-3 col-xs-12']); !!}
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          <select class="form-control" id="ProductCategory" name="ProductCategory">
                          @foreach ( $ProductCategory as $ProductCategorys )
                            <option value="{{ $ProductCategorys->productCategoryId }}">{{ $ProductCategorys->productCategoryDescription }}</option>
                          @endforeach
                          </select>
                        </div>
                      </div>
                      <div class="ln_solid"></div>
                        <div class="form-group">
                          <div class="col-md-6 col-sm-6 col-xs-12 col-md-offset-3 productSubmit">
                          {!! Form::submit('Submit',['class' => 'btn btn-success productButton']) !!}
                        </div>
                      </div>
                      {!! Form::close() !!}
                    </div>

                  
                     <div class="col-md-12 col-sm-12 col-xs-12">
                        <div class="x_panel">
                           <div class="x_title">
                              <h2>Product Table </h2>
                              <ul class="nav navbar-left panel_toolbox">
                                 <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a></li>
                              </ul>
                              <div class="clearfix"></div>
                           </div>
                           <div class="x_content">
                              <table id="datatable" class="table table-striped table-bordered">
                                 <thead>
                                    <tr>
                                       <th>No</th>
                                       <th>Name</th>
                                       <th>Part Number</th>
                                       <th>Stock</th>
                                       <th>Specification</th>
                                       <th>Description</th>
                                       <th>Weight</th>
                                       <th>Download</th>
                                       <th>Action</th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                 <?php $i=1; ?>
                                 @foreach ( $Product as $Products )
                                    <tr>
                                      <td noTable="{{ $i }}">{{ $i++ }}</td>
                                      <td>{{ $Products->productName }}</td>
                                      <td>{{ $Products->productPartNumber }}</td>
                                      <td>{{ $Products->productStock }}</td>
                                      <td>{{ $Products->productSpesification }}</td>
                                      <td>{{ $Products->productDescription }}</td>
                                      <td>{{ $Products->productWeight }}</td>
                                      <td>{{ $Products->productDownloadLink }}</td>
                                      <td><a href="#" productId="{{ $Products->productId }}" class="btn btn-info btn-xs editProduct"><i class="fa fa-pencil"></i> Edit </a>
                                          <a href="#" productId="{{ $Products->productId }}" class="btn btn-danger btn-xs deleteProduct"><i class="fa fa-trash-o"></i> Delete </a>
                                      </td>
                                    </tr>
                                  @endforeach
                                 </tbody>
                              </table>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div role="tabpanel" class="tab-pane fade" id="InputProductBrand" aria-labelledby="profile-tab">
                    {!! Form::open(['url' => 'product/insert_or_update_product_brand', 'method' => 'post', 'id' => 'ProductBrandForm', 'class'=>'form-horizontal', 'files' => true,'enctype'=>'multipart/form-data']) !!}
                    <div class="form-group">
                      {!! Form::label('ProductBrandDescLabel', 'Product Brand Description', ['class' => 'col-md-3 col-sm-3 col-xs-12']); !!}
                      <div class="col-md-9 col-sm-9 col-xs-12">
                        {!! Form::text('ProductBrandDesc','',['class'=>'form-control col-md-7 col-xs-12 ProductBrandDesc','id'=>'ProductBrandDesc','required'=>'required']) !!}
                      </div>
                    </div>
                    <div class="form-group">
                      {!! Form::label('ProductBrandImageLabel', 'Product Brand Image', ['class' => 'col-md-3 col-sm-3 col-xs-12']); !!}
                      <div class="col-md-9 col-sm-9 col-xs-12 ">
                        {!! Form::file('ProductBrandImage', array('class' => 'col-md-7 col-xs-12 ProductBrandImage','files' => 'true')) !!}
                      </div>
                    </div>
                    <div class="ln_solid"></div>
                      <div class="form-group">
                        <div class="col-md-6 col-sm-6 col-xs-12 col-md-offset-3 productBrandSubmit">
                        {!! Form::submit('Submit',['class' => 'btn btn-success productBrandButton']) !!}
                      </div>
                    </div>
                    {!! Form::close() !!}

                    <div class="col-md-12 col-sm-12 col-xs-12">
                        <div class="x_panel">
                           <div class="x_title">
                              <h2>Product Brand Table </h2>
                              <ul class="nav navbar-left panel_toolbox">
                                 <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a></li>
                              </ul>
                              <div class="clearfix"></div>
                           </div>
                           <div class="x_content">
                              <table id="datatable" class="table table-striped table-bordered">
                                 <thead>
                                    <tr>
                                       <th>No</th>
                                       <th>Description</th>
                                       <th>Image</th>
                                       <th>Action</th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                 <?php $i=1; ?>
                                 @foreach ( $ProductBrand as $ProductBrands )
                                    <tr>
                                      <td noTable="{{ $i }}">{{ $i++ }}
                                      <td>{{ $ProductBrands->productBrandDescription }}</td>
                                      <td>{{ $ProductBrands->productBrandImage }}</td>
                                      <td><a href="#" productBrandId="{{ $ProductBrands->productBrandId }}" class="btn btn-info btn-xs editProductBrand"><i class="fa fa-pencil"></i> Edit </a>
                                          <a href="#" productBrandId="{{ $ProductBrands->productBrandId }}" class="btn btn-danger btn-xs deleteProductBrand"><i class="fa fa-trash-o"></i> Delete </a>
                                      </td>
                                    </tr>
                                  @endforeach
                                 </tbody>
                              </table>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div role="tabpanel" class="tab-pane fade" id="InputProductCategory" aria-labelledby="profile-tab">
                    {!! Form::open(['url' => 'product/insert_or_update_product_category', 'method' => 'post', 'class'=>'form-horizontal', 'files' => true,'enctype'=>'multipart/form-data']) !!}
                      <div class="form-group">
                        {!! Form::label('ProductCategoryDesc', 'Product Category Description', ['class' => 'col-md-3 col-sm-3 col-xs-12']); !!}
                        <div class="col-md-9 col-sm-9 col-xs-12">
                          {!! Form::text('ProductCategoryDesc','',['class'=>'form-control col-md-7 col-xs-12','id'=>'ProductCategoryDesc','required'=>'required']) !!}
                        </div>
                      </div>
                      <div class="form-group">
                        {!! Form::label('ProductCategoryImage', 'Product Category Image', ['class' => 'col-md-3 col-sm-3 col-xs-12']); !!}
                        <div class="col-md-9 col-sm-9 col-xs-12 ">
                          {!! Form::file('ProductCategoryImage', array('class' => 'col-md-7 col-xs-12','files' => 'true')) !!}
                        </div>
                      </div>
                      <div class="ln_solid"></div>
                        <div class="form-group">
                          <div class="col-md-6 col-sm-6 col-xs-12 col-md-offset-3">
                          {!! Form::submit('Submit',['class' => 'btn btn-success']) !!}
                        </div>
                      </div>
                    {!! Form::close() !!}
                    
                    <div class="col-md-12 col-sm-12 col-xs-12">
                        <div class="x_panel">
                           <div class="x_title">
                              <h2>Product Category Table </h2>
                              <ul class="nav navbar-left panel_toolbox">
                                 <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a></li>
                              </ul>
                              <div class="clearfix"></div>
                           </div>
                           <div class="x_content">
                              <table id="datatable" class="table table-striped table-bordered">
                                 <thead>
                                    <tr>
                                       <th>No</th>
                                       <th>Description</th>
                                       <th>Image</th>
                                       <th>Action</th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                 <?php $i=1; ?>
                                 @foreach ( $ProductCategory as $ProductCategorys )
                                    <tr>
                                      <td>{{ $i++ }}</td>
                                      <td>{{ $ProductCategorys->productCategoryDescription }}</td>
                                      <td>{{ $ProductCategorys->productCategoryImage }}</td>
                                      <td><a href="#" productCategoryId="{{ $ProductCategorys->productCategoryId }}" class="btn btn-info btn-xs editProductCategory"><i class="fa fa-pencil"></i> Edit </a>
                                          <a href="#" productCategoryId="{{ $ProductCategorys->productCategoryId }}" class="btn btn-danger btn-xs deleteProductCategory"><i class="fa fa-trash-o"></i> Delete </a>
                                      </td>
                                    </tr>
                                  @endforeach
                                 </tbody>
                              </table>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div role="tabpanel" class="tab-pane fade" id="InputProductBrandCategory" aria-labelledby="profile-tab">
                    <form class="form-horizontal" action="{{ URL('product/insert_or_update_product_brand_category') }}" method="POST">
                    {{ csrf_field() }} 
                      <div class="form-group">
                        <label class="col-md-3 col-sm-3 col-xs-12">Product Brand Category</label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          <select class="form-control" name="ProductCategory" id="ProductCategoryBrand">
                            @foreach ( $ProductCategory as $ProductCategorys )
                            <option value="{{ $ProductCategorys->productCategoryId }}">{{ $ProductCategorys->productCategoryDescription }}</option>
                            @endforeach
                          </select>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-md-3 col-sm-3 col-xs-12">Product Brand</label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          <select class="form-control" name="ProductBrand" id="ProductBrandCategory">
                            @foreach ( $ProductBrand as $ProductBrands )
                            <option value="{{ $ProductBrands->productBrandId }}">{{ $ProductBrands->productBrandDescription }}</option>
                            @endforeach
                          </select>
                        </div>
                      </div>
                      <div class="ln_solid"></div>
                      <div class="form-group">
                          <div class="col-md-6 col-sm-6 col-xs-12 col-md-offset-3">
                            <input class="btn btn-success productBrandCategoryButton" value="Submit" type="submit">
                          </div>
                      </div>
                    </form>
                    <div class="col-md-12 col-sm-12 col-xs-12">
                        <div class="x_panel">
                           <div class="x_title">
                              <h2>Product Brand Category Table </h2>
                              <ul class="nav navbar-left panel_toolbox">
                                 <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a></li>
                              </ul>
                              <div class="clearfix"></div>
                           </div>
                           <div class="x_content">
                              <table id="datatable" class="table table-striped table-bordered">
                                 <thead>
                                    <tr>
                                       <th>No</th>
                                       <th>Category</th>
                                       <th>Brand</th>
                                       <th>Action</th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                 <?php $i=1; ?>
                                 @foreach ( $ProductBrandCategory as $ProductBrandCategorys )
                                    <tr>
                                      <td>{{ $i++ }}</td>
                                      <td>{{ $ProductBrandCategorys->productCategoryDescription }}</td>
                                      <td>{{ $ProductBrandCategorys->productBrandDescription }}</td>
                                      <td><a href="#" productBrandCategoryId="{{ $ProductBrandCategorys->productBrandCategoryId }}" class="btn btn-info btn-xs editProductBrandCategory"><i class="fa fa-pencil"></i> Edit </a>
                                          <a href="#" productBrandCategoryId="{{ $ProductBrandCategorys->productBrandCategoryId }}" class="btn btn-danger btn-xs deleteProductBrandCategory"><i class="fa fa-trash-o"></i> Delete </a>
                                      </td>
                                    </tr>
                                  @endforeach
                                 </tbody>
                              </table>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div role="tabpanel" class="tab-pane fade" id="InputProductPrize" aria-labelledby="profile-tab">
                    {!! Form::open(['url' => 'product/insert_or_update_product_price', 'method' => 'post', 'class'=>'form-horizontal', 'files' => true,'enctype'=>'multipart/form-data']) !!}
                      <div class="form-group">
                        {!! Form::label('ProductPrice', 'Product Price Description', ['class' => 'col-md-3 col-sm-3 col-xs-12']); !!}
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          {!! Form::text('ProductPrice','',['class'=>'form-control col-md-7 col-xs-12','id'=>'ProductPriceDesc','required'=>'required']) !!}
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-md-3 col-sm-3 col-xs-12">Select Product</label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          <select class="form-control" name="ProductId" id="ProductIdInPrice">
                            @foreach ( $Product as $Products )
                            <option value="{{ $Products->productId }}">{{ $Products->productName }}</option>
                            @endforeach
                          </select>
                        </div>
                      </div>
                      <div class="ln_solid"></div>
                        <div class="form-group">
                          <div class="col-md-6 col-sm-6 col-xs-12 col-md-offset-3">
                          {!! Form::submit('Submit',['class' => 'btn btn-success productPriceButton']) !!}
                        </div>
                      </div>
                    {!! Form::close() !!}

                    <div class="col-md-12 col-sm-12 col-xs-12">
                        <div class="x_panel">
                           <div class="x_title">
                              <h2>Product Price Table </h2>
                              <ul class="nav navbar-left panel_toolbox">
                                 <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a></li>
                              </ul>
                              <div class="clearfix"></div>
                           </div>
                           <div class="x_content">
                              <table id="datatable" class="table table-striped table-bordered">
                                 <thead>
                                    <tr>
                                       <th>No</th>
                                       <th>Price</th>
                                       <th>Product</th>
                                       <th>Action</th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                  <?php $i=1; ?>
                                  @foreach ( $ProductPrice as $ProductPrices )
                                    <tr>
                                      <td>{{ $i++ }}</td>
                                      <td>{{ $ProductPrices->productPrice }}</td>
                                      <td>{{ $ProductPrices->productName }}</td>
                                      <td><a href="#" productPriceId="{{ $ProductPrices->productPriceId }}" class="btn btn-info btn-xs editProductPrice"><i class="fa fa-pencil"></i> Edit </a>
                                          <a href="#" productPriceId="{{ $ProductPrices->productPriceId }}" class="btn btn-danger btn-xs deleteProductPrice"><i class="fa fa-trash-o"></i> Delete </a>
                                      </td>
                                    </tr>
                                  @endforeach
                                 </tbody>
                              </table>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div role="tabpanel" class="tab-pane fade" id="InputProductPromo" aria-labelledby="profile-tab">
                    {!! Form::open(['url' => 'product/insert_or_update_product_promo', 'method' => 'post', 'class'=>'form-horizontal', 'files' => true,'enctype'=>'multipart/form-data']) !!}
                      <div class="form-group">
                        {!! Form::label('ProductPromoDesc', 'Product Promo Description', ['class' => 'col-md-3 col-sm-3 col-xs-12']); !!}
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          {!! Form::text('ProductPromoDesc','',['class'=>'form-control col-md-7 col-xs-12','id'=>'PromoProductDesc','required'=>'required']) !!}
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-md-3 col-sm-3 col-xs-12">Select Product</label>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                          <select class="form-control" name="ProductPromoId" id="ProductPromoId">
                            @foreach ( $Product as $Products )
                            <option value="{{ $Products->productId }}">{{ $Products->productName }}</option>
                            @endforeach
                          </select>
                        </div>
                      </div>
                      <div class="form-group">
                        {!! Form::label('ProductPromoImage', 'Product Promo Image', ['class' => 'col-md-3 col-sm-3 col-xs-12']); !!}
                        <div class="col-md-6 col-sm-6 col-xs-12 ">
                          {!! Form::file('ProductPromoImage', array('class' => 'col-md-7 col-xs-12','files' => 'true')) !!}
                        </div>
                      </div>
                      <div class="ln_solid"></div>
                        <div class="form-group">
                          <div class="col-md-6 col-sm-6 col-xs-12 col-md-offset-3">
                          {!! Form::submit('Submit',['class' => 'btn btn-success productPromoButton']) !!}
                        </div>
                      </div>
                    {!! Form::close() !!}
                    
                    <div class="col-md-12 col-sm-12 col-xs-12">
                        <div class="x_panel">
                           <div class="x_title">
                              <h2>Product Promo Table </h2>
                              <ul class="nav navbar-left panel_toolbox">
                                 <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a></li>
                              </ul>
                              <div class="clearfix"></div>
                           </div>
                           <div class="x_content">
                              <table id="datatable" class="table table-striped table-bordered">
                                 <thead>
                                    <tr>
                                       <th>No</th>
                                       <th>Description</th>
                                       <th>Image</th>
                                       <th>Product</th>
                                       <th>Action</th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                  <?php $i=1; ?>
                                  @foreach ( $ProductPromo as $ProductPromos )
                                    <tr>
                                      <td>{{ $i++ }}</td>
                                      <td>{{ $ProductPromos->productPromoDescription }}</td>
                                      <td>{{ $ProductPromos->productPromoImage }}</td>
                                      <td>{{ $ProductPromos->productName }}</td>
                                      <td><a href="#" productPromoId="{{ $ProductPromos->productPromoId }}" class="btn btn-info btn-xs editProductPromo"><i class="fa fa-pencil"></i> Edit </a>
                                          <a href="#" productPromoId="{{ $ProductPromos->productPromoId }}" class="btn btn-danger btn-xs deleteProductPromo"><i class="fa fa-trash-o"></i> Delete </a>
                                      </td>
                                    </tr>
                                  @endforeach
                                 </tbody>
                              </table>
                           </div>
                        </div>
                     </div>
                  </div>

               </div>
            </div>
         </div>
      </div>
   </div>
</div>
<br />
</div>
@endsection