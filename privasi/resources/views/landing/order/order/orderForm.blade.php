<div class="orderForm">
    {!! Form::open(['url' => 'order/insert_or_update_order', 'method' => 'post', 'class'=>'form-horizontal', 'files' => true,'enctype'=>'multipart/form-data']) !!}
    <div class="form-group">
      {!! Form::label('OrderTotalPrice', 'Total Price', ['class' => 'col-md-3 col-sm-3 col-xs-12']); !!}
      <div class="col-md-6 col-sm-6 col-xs-12">
        {!! Form::text('OrderTotalPrice','',['class'=>'form-control col-md-7 col-xs-12','id'=>'OrderTotalPrice','data-parsley-maxlength'=>'40','required'=>'required']) !!}
      </div>
    </div>
    <div class="form-group">
    {!! Form::label('OrderDate', 'Order Date', ['class' => 'col-md-3 col-sm-3 col-xs-12']); !!}
      <div class="col-md-6 col-sm-6 col-xs-12">
        {!! Form::text('OrderDate','',['class'=>'form-control col-md-7 col-xs-12','id'=>'OrderDate']) !!}
      </div>
    </div>
    <div class="form-group">
      {!! Form::label('CartUser', 'Cart User', ['class' => 'col-md-3 col-sm-3 col-xs-12']); !!}
      <div class="col-md-6 col-sm-6 col-xs-12">
        <select class="form-control" id="Cart" name="Cart">
        @foreach ( $Cart as $Cart )
          <option value="{{ $Cart->cartId }}">{{ $Cart->customerEmail }}</option>
        @endforeach
        </select>
      </div>
    </div>
    <div class="form-group">
      {!! Form::label('OrderStatus', 'Order Status', ['class' => 'col-md-3 col-sm-3 col-xs-12']); !!}
      <div class="col-md-6 col-sm-6 col-xs-12">
        <select class="form-control" id="OrderStatus" name="OrderStatus">
         {{--  @foreach ( $OrderStatus as $OrderStatuses )
          <option value="{{ $OrderStatuses->orderStatusId }}">{{ $OrderStatuses->orderStatusDescription }}</option>
        @endforeach  --}}
        </select>
      </div>
    </div>
    <div class="form-group">
    {!! Form::label('OrderProductWeight', 'Order Product Weight', ['class' => 'col-md-3 col-sm-3 col-xs-12']); !!}
      <div class="col-md-6 col-sm-6 col-xs-12">
        {!! Form::text('OrderProductWeight','',['class'=>'form-control col-md-7 col-xs-12','id'=>'OrderProductWeight']) !!}
      </div>
    </div>
    <div class="ln_solid"></div>
      <div class="form-group">
        <div class="col-md-6 col-sm-6 col-xs-12 col-md-offset-3 orderSubmit">
        {!! Form::submit('Submit',['class' => 'btn btn-success orderButton']) !!}
      </div>
    </div>
    {!! Form::close() !!}
  </div>