<div class="orderShipmentReferenceForm">
    {!! Form::open(['url' => 'order/insert_or_update_order_shipment_reference', 'method' => 'post', 'class'=>'form-horizontal', 'files' => true,'enctype'=>'multipart/form-data']) !!}
    <div class="form-group">
    {!! Form::label('ShipmentReferenceDetail', 'Shipment Reference Detail', ['class' => 'col-md-3 col-sm-3 col-xs-12']); !!}
      <div class="col-md-6 col-sm-6 col-xs-12">
        {!! Form::text('ShipmentReferenceDetail','',['class'=>'form-control col-md-7 col-xs-12','id'=>'ShipmentReferenceDetail']) !!}
      </div>
    </div>
    <div class="form-group">
      {!! Form::label('ShipmentReference', 'Shipment Reference', ['class' => 'col-md-3 col-sm-3 col-xs-12']); !!}
      <div class="col-md-6 col-sm-6 col-xs-12">
        {!! Form::text('ShipmentReference','',['class'=>'form-control col-md-7 col-xs-12','id'=>'ShipmentReference','data-parsley-maxlength'=>'11','required'=>'required']) !!}
      </div>
    </div>
    <div class="ln_solid"></div>
      <div class="form-group">
        <div class="col-md-6 col-sm-6 col-xs-12 col-md-offset-3 shipmentReferenceSubmit">
        {!! Form::submit('Submit',['class' => 'btn btn-success shipmentReferenceButton']) !!}
      </div>
    </div>
    {!! Form::close() !!}
  </div>