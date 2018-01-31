<div class="productPriceForm">
    {!! Form::open(['url' => 'product/insert_or_update_product_price', 'method' => 'post', 'class'=>'form-horizontal', 'files'=>
    true,'enctype'=>'multipart/form-data']) !!}
    <div class="form-group">
        {!! Form::label('ProductPrice', 'Product Price', ['class' => 'col-md-3 col-sm-3 col-xs-12']); !!}
        <div class="col-md-6 col-sm-6 col-xs-12">
            {!! Form::text('ProductPrice','',['class'=>'form-control col-md-7 col-xs-12','id'=>'ProductPrice','required'=>'required'])
            !!}
        </div>
    </div>
    <div class="form-group">
        <label class="col-md-3 col-sm-3 col-xs-12">Select Product</label>
        <div class="col-md-6 col-sm-6 col-xs-12">
            {{--  <select class="form-control" name="ProductId" id="ProductIdInPrice">
                @foreach ( $Product as $Products )
                <option value="{{ $Products->productId }}">{{ $Products->productName }}</option>
                @endforeach
            </select>  --}}
        </div>
    </div>
    <div class="form-group">
        {!! Form::label('ProductPriceDisplayStatus', 'Product Price Display Status', ['class' => 'col-md-3 col-sm-3 col-xs-12']); !!}
        <div class="col-md-6 col-sm-6 col-xs-12">
            {!! Form::text('ProductPriceDisplayStatus','',['class'=>'form-control col-md-7 col-xs-12','id'=>'ProductPriceDesc']) !!}
        </div>
    </div>
    <div class="form-group">
        <label class="col-md-3 col-sm-3 col-xs-12">Select Status</label>
        <div class="col-md-6 col-sm-6 col-xs-12">
            <select class="form-control" name="ProductPriceStatus" id="ProductPriceStatus">
                <option value="SHOW">Show</option>
                <option value="HIDE">Hide</option>
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
</div>