<div class="productCategoryForm">
    {!! Form::open(['url' => 'product/insert_or_update_product_category','id'=>'ProductCategoryForm', 'method' => 'post', 'class'=>'form-horizontal', 'files'=>
    true,'enctype'=>'multipart/form-data']) !!}
    <div class="form-group">
        {!! Form::label('ProductCategoryDesc', 'Product Category Description', ['class' => 'col-md-3 col-sm-3 col-xs-12']); !!}
        <div class="col-md-9 col-sm-9 col-xs-12">
            {!! Form::text('ProductCategoryDesc','',['class'=>'form-control col-md-7 col-xs-12','id'=>'ProductCategoryDesc','required'=>'required'])
            !!}
        </div>
    </div>
    <div class="form-group">
        {!! Form::label('ProductCategoryImage', 'Product Category Image', ['class' => 'col-md-3 col-sm-3 col-xs-12']); !!}
        <div class="col-md-9 col-sm-9 col-xs-12 ">
            {!! Form::file('ProductCategoryImage', array('class' => 'col-md-7 col-xs-12','data-parsley-fileextension'=>'jpg','files' => 'true')) !!}
        </div>
    </div>
    <div class="ln_solid"></div>
    <div class="form-group">
        <div class="col-md-6 col-sm-6 col-xs-12 col-md-offset-3">
            {!! Form::submit('Submit',['class' => 'btn btn-success productCategoryButton']) !!}
        </div>
    </div>
    {!! Form::close() !!}
</div>