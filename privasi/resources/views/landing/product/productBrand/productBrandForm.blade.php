<div class="productBrandForm">
    {!! Form::open(['url' => 'product/insert_or_update_product_brand', 'method' => 'post', 'id' => 'ProductBrandForm', 'class'=>'form-horizontal','files'=> true,'enctype'=>'multipart/form-data']) !!}
    <div class="form-group">
        {!! Form::label('ProductBrandDescLabel', 'Product Brand Description', ['class' => 'col-md-3 col-sm-3 col-xs-12']); !!}
        <div class="col-md-9 col-sm-9 col-xs-12">
            {!! Form::text('ProductBrandDesc','',['class'=>'form-control col-md-7 col-xs-12 ProductBrandDesc','id'=>'ProductBrandDesc','required'=>'required'])
            !!}
        </div>
    </div>
    <div class="form-group">
        {!! Form::label('ProductBrandImageLabel', 'Product Brand Image', ['class' => 'col-md-3 col-sm-3 col-xs-12']); !!}
        <div class="col-md-9 col-sm-9 col-xs-12 ">
            {!! Form::file('ProductBrandImage', array('class' => 'col-md-7 col-xs-12 ProductBrandImage','data-parsley-fileextension'=>'jpg','files' => 'true')) !!}
        </div>
    </div>
    <div class="ln_solid"></div>
    <div class="form-group">
        <div class="col-md-6 col-sm-6 col-xs-12 col-md-offset-3 productBrandSubmit">
            {!! Form::submit('Submit',['class' => 'btn btn-success productBrandButton']) !!}
        </div>
    </div>
    {!! Form::close() !!}
</div>