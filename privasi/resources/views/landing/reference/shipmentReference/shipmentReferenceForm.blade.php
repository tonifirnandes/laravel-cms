<div class="productPromoForm">
    {!! Form::open(['url' => 'product/insert_or_update_product_promo', 'method' => 'post', 'class'=>'form-horizontal', 'files'=>true,'enctype'=>'multipart/form-data']) !!}
    <div class="form-group">
        {!! Form::label('ProductPromoDesc', 'Product Promo Description', ['class' => 'col-md-3 col-sm-3 col-xs-12']); !!}
        <div class="col-md-6 col-sm-6 col-xs-12">
            {!! Form::text('ProductPromoDesc','',['class'=>'form-control col-md-7 col-xs-12','id'=>'PromoProductDesc','required'=>'required'])
            !!}
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
</div>