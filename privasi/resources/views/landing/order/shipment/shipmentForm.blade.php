<div class="orderShipmentForm">
  {!! Form::open(['url' => 'order/insert_or_update_order_shipment', 'method' => 'post', 'class'=>'form-horizontal', 'files' => true,'enctype'=>'multipart/form-data']) !!}
  <div class="form-group">
    {!! Form::label('Order', 'Order Date', ['class' => 'col-md-3 col-sm-3 col-xs-12']); !!}
    <div class="col-md-6 col-sm-6 col-xs-12">
      <select class="form-control" id="OrderShipmentDate" name="OrderShipmentDate">
      @foreach ( $Order as $Orders )
        <option value="{{ $Orders->orderId }}">{{ $Orders->orderTime }}</option>
      @endforeach
      </select>
    </div>
  </div>
  <div class="form-group">
    {!! Form::label('OrderShipmentReference', 'Shipment Reference', ['class' => 'col-md-3 col-sm-3 col-xs-12']); !!}
    <div class="col-md-6 col-sm-6 col-xs-12">
      <select class="form-control" id="OrderShipmentReference" name="OrderShipmentReference">
      {{--  @foreach ( $OrderShipmentReference as $OrderShipmentReferences )
        <option value="{{ $OrderShipmentReferences->shipmentReferenceId }}">{{ $OrderShipmentReferences->shipmentReferenceDetail }}</option>
      @endforeach  --}}
      </select>
    </div>
  </div>
  <div class="form-group">
    {!! Form::label('ShipmentTrackingNumber', 'Shipment Tracking Number', ['class' => 'col-md-3 col-sm-3 col-xs-12']); !!}
    <div class="col-md-6 col-sm-6 col-xs-12">
      {!! Form::text('ShipmentTrackingNumber','',['class'=>'form-control col-md-7 col-xs-12','data-parsley-maxlength'=>'40','required'=>'required']) !!}
    </div>
  </div>
  <div class="form-group">
    {!! Form::label('ShipmentPrice', 'Shipment Price Item', ['class' => 'col-md-3 col-sm-3 col-xs-12']); !!}
    <div class="col-md-6 col-sm-6 col-xs-12">
      {!! Form::text('ShipmentPrice','',['class'=>'form-control col-md-7 col-xs-12','data-parsley-maxlength'=>'20','required'=>'required']) !!}
    </div>
  </div>
  <div class="form-group">
    {!! Form::label('ShipmentFullPrice', 'Shipment Full Price', ['class' => 'col-md-3 col-sm-3 col-xs-12']); !!}
    <div class="col-md-6 col-sm-6 col-xs-12">
      {!! Form::text('ShipmentFullPrice','',['class'=>'form-control col-md-7 col-xs-12','data-parsley-maxlength'=>'20','required'=>'required']) !!}
    </div>
  </div>
  <div class="ln_solid"></div>
    <div class="form-group">
      <div class="col-md-6 col-sm-6 col-xs-12 col-md-offset-3 orderShipmentSubmit">
      {!! Form::submit('Submit',['class' => 'btn btn-success orderShipmentButton']) !!}
    </div>
  </div>
  {!! Form::close() !!}
</div>