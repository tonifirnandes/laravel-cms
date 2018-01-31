<div class="paymentMethodForm">
    {!! Form::open(['url' => 'order/insert_or_update_order_payment_method', 'method' => 'post', 'class'=>'form-horizontal', 'files' => true,'enctype'=>'multipart/form-data']) !!}
    <div class="form-group">
      {!! Form::label('PaymentMethodDescription', 'Payment Method Description', ['class' => 'col-md-3 col-sm-3 col-xs-12']); !!}
      <div class="col-md-6 col-sm-6 col-xs-12">
        {!! Form::text('PaymentMethodDescription','',['class'=>'form-control col-md-7 col-xs-12','data-parsley-maxlength'=>'40','id'=>'MethodPaymentOrderDesc','required'=>'required']) !!}
      </div>
    </div>
    <div class="ln_solid"></div>
      <div class="form-group">
        <div class="col-md-6 col-sm-6 col-xs-12 col-md-offset-3 paymentMethodSubmit">
        {!! Form::submit('Submit',['class' => 'btn btn-success paymentMethodButton']) !!}
      </div>
    </div>
    {!! Form::close() !!}
  </div>