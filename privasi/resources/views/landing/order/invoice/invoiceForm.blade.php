<div class="orderForm">
    {!! Form::open(['url' => 'order/insert_or_update_order_invoice', 'method' => 'post', 'class'=>'form-horizontal', 'files' => true,'enctype'=>'multipart/form-data']) !!}
    <div class="form-group">
      {!! Form::label('OrderInvoiceDetail', 'Order Invoice Detail', ['class' => 'col-md-3 col-sm-3 col-xs-12']); !!}
      <div class="col-md-6 col-sm-6 col-xs-12">
        {!! Form::text('OrderInvoiceDetail','',['class'=>'form-control col-md-7 col-xs-12','id'=>'orderInvoiceDetail','data-parsley-maxlength'=>'40','required'=>'required']) !!}
      </div>
    </div>
    <div class="form-group">
      {!! Form::label('OrderInvoiceDate', 'Order Invoice Date', ['class' => 'col-md-3 col-sm-3 col-xs-12']); !!}
      <div class="col-md-6 col-sm-6 col-xs-12">
        {!! Form::text('OrderInvoiceDate','',['class'=>'form-control col-md-7 col-xs-12','id'=>'orderInvoiceDate','data-parsley-maxlength'=>'40','required'=>'required']) !!}
      </div>
    </div>
    <div class="form-group">
      {!! Form::label('OrderInvoiceOrder', 'Order Invoice Order', ['class' => 'col-md-3 col-sm-3 col-xs-12']); !!}
      <div class="col-md-6 col-sm-6 col-xs-12">
        <select class="form-control" id="OrderInvoiceOrder" name="OrderInvoiceOrder">
        @foreach ( $Order as $Orders )
          <option value="{{ $Orders->orderId }}">{{ $Orders->orderTime }}</option>
        @endforeach
        </select>
      </div>
    </div>
    <div class="form-group">
      {!! Form::label('OrderInvoiceStatus', 'Order Invoice Status', ['class' => 'col-md-3 col-sm-3 col-xs-12']); !!}
      <div class="col-md-6 col-sm-6 col-xs-12">
        <select class="form-control" id="OrderInvoiceStatus" name="OrderInvoiceStatus">
        {{--  @foreach ( $OrderInvoiceStatus as $OrderInvoiceStatuses )
          <option value="{{ $OrderInvoiceStatuses->invoiceStatusId }}">{{ $OrderInvoiceStatuses->invoiceStatusDescription }}</option>
        @endforeach  --}}
        </select>
      </div>
    </div>
    <div class="ln_solid"></div>
      <div class="form-group">
        <div class="col-md-6 col-sm-6 col-xs-12 col-md-offset-3 orderInvoiceSubmit">
        {!! Form::submit('Submit',['class' => 'btn btn-success orderInvoiceButton']) !!}
      </div>
    </div>
    {!! Form::close() !!}
</div>