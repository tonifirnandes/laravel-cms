<div class="col-md-12 col-sm-12 productForm"  style="display:none;">
        <div class="col-md-12 col-sm-12 text-right x_title">
            <button type="button" class="btn btn-info btn-sm uploadImageProduct"><i class="fa fa-upload"></i> Upload Image</button>
            <button type="button" class="btn btn-success btn-sm viewProduct"><i class="fa fa-list"></i> See Product</button>
        </div>
        {!! Form::open(['url' => 'product/insert_or_update_product', 'method' => 'post', 'class'=>'form-horizontal', 'files' => true,'enctype'=>'multipart/form-data']) !!}
        <div class="form-group">
          {!! Form::label('ProductName', 'Product Name *', ['class' => 'col-md-3 col-sm-3 col-xs-12']); !!}
          <div class="col-md-6 col-sm-6 col-xs-12">
            {!! Form::text('ProductName','',['class'=>'form-control col-md-7 col-xs-12','data-parsley-maxlength'=>'40','required'=>'required']) !!}
          </div>
        </div>
        <div class="form-group">
        {!! Form::label('ProductPartNumber', 'Product Part Number *', ['class' => 'col-md-3 col-sm-3 col-xs-12']); !!}
          <div class="col-md-6 col-sm-6 col-xs-12">
            {!! Form::text('ProductPartNumber','',['class'=>'form-control col-md-7 col-xs-12','required'=>'required','data-parsley-maxlength'=>'11']) !!}
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
        {{--  <div class="form-group">
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
        </div>  --}}
        <div class="ln_solid"></div>
          <div class="form-group">
            <div class="col-md-6 col-sm-6 col-xs-12 col-md-offset-3 productSubmit">
            {!! Form::submit('Submit',['class' => 'btn btn-success productButton']) !!}
          </div>
        </div>
        {!! Form::close() !!}
      </div>