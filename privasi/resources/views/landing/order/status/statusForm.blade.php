<div class="orderStatusForm">
    {!! Form::open(['url' => 'order/insert_or_update_order_status', 'method' => 'post', 'class'=>'form-horizontal', 'files' => true,'enctype'=>'multipart/form-data']) !!}
    <div class="form-group">
      {!! Form::label('StatusDescription', 'Status Description', ['class' => 'col-md-3 col-sm-3 col-xs-12']); !!}
      <div class="col-md-6 col-sm-6 col-xs-12">
        {!! Form::text('StatusDescription','',['class'=>'form-control col-md-7 col-xs-12','data-parsley-maxlength'=>'40','id'=>'StatusOrderDesc','required'=>'required']) !!}
      </div>
    </div>
    <div class="ln_solid"></div>
      <div class="form-group">
        <div class="col-md-6 col-sm-6 col-xs-12 col-md-offset-3 orderStatus">
        {!! Form::submit('Submit',['class' => 'btn btn-success orderStatusButton']) !!}
      </div>
    </div>
    {!! Form::close() !!}
  </div>