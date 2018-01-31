<div class="inquiryDetail col-md-12" style="display:none;">
    <div class="x_panel">
        <div class="x_content">
            <section class="content invoice">
                <div class="row">
                    <div class="col-xs-12 invoice-header">
                        <h1>
                            <i class="fa fa-globe"></i> Inquiry List
                            <small id="inquiryUserEmail" class="pull-right"></small>
                        </h1>
                    </div>
                </div>
                <div class="row invoice-info">
                    <div class="col-sm-4 invoice-col">
                        User Detail
                        <address>
                            <strong id="inquiryUserName"></strong>
                            <br>795 Freedom Ave, Suite 600
                            <br>New York, CA 94107
                            <br>Phone: <strong id="inquiryUserTelephone"></strong>
                            <br>Email: ironadmin.com
                        </address>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 table">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Product Description</th>
                                    <th>Code</th>
                                    <th>Notes</th>
                                    <th>Created</th>
                                </tr>
                            </thead>
                            <tbody id="inquiryProductTable">
                                
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="row">
                    <div class="col-xs-12">
                        <p class="lead">Status: <strong id="inquiryStatus"></strong></p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-xs-6">
                        <p class="lead">Payment Methods:</p>
                        <img src="images/visa.png" alt="Visa">
                        <img src="images/mastercard.png" alt="Mastercard">
                        <img src="images/american-express.png" alt="American Express">
                        <img src="images/paypal.png" alt="Paypal">
                        <p class="text-muted well well-sm no-shadow" style="margin-top: 10px;">
                            If you have chosen an in-store preferred payment method and do not have any money in your credit card balance, your preferred payment method will be used for your purchase.
                        </p>
                    </div>
                </div>

                <div class="row no-print">
                    <div class="col-xs-12">
                        <button class="btn btn-default" onclick="window.print();">
                            <i class="fa fa-print"></i> Print</button>
                        <button class="btn btn-primary pull-right" style="margin-right: 5px;">
                            <i class="fa fa-download"></i> Generate PDF</button>
                    </div>
                </div>
            </section>
        </div>
    </div>
</div>

<div class="inquiryForm" style="display:none;">
    {!! Form::open(['url' => 'inquiry/proceed_to_cart_inquiry', 'method' => 'post', 'class'=>'form-horizontal', 'files' => true,'enctype'=>'multipart/form-data']) !!}
    <div class="form-group">
      {!! Form::label('InquiryCustomerEmail', 'Inquiry Customer Email', ['class' => 'col-md-3 col-sm-3 col-xs-12']); !!}
      <div class="col-md-6 col-sm-6 col-xs-12">
        {!! Form::text('InquiryCustomerEmail','',['class'=>'form-control col-md-7 col-xs-12','id'=>'inquiryCustomerEmail','data-parsley-maxlength'=>'40','readonly'=>'readonly']) !!}
      </div>
    </div>
    <div class="form-group">
      {!! Form::label('InquiryCustomerTelephone', 'Inquiry Customer Telephone', ['class' => 'col-md-3 col-sm-3 col-xs-12']); !!}
      <div class="col-md-6 col-sm-6 col-xs-12">
        {!! Form::text('InquiryCustomerTelephone','',['class'=>'form-control col-md-7 col-xs-12','id'=>'inquiryCustomerTelephone','data-parsley-maxlength'=>'40','required'=>'required']) !!}
      </div>
    </div>
    <div class="form-group">
      {!! Form::label('InquiryCustomerNotes', 'Inquiry Customer Notes', ['class' => 'col-md-3 col-sm-3 col-xs-12']); !!}
      <div class="col-md-6 col-sm-6 col-xs-12">
        {!! Form::text('InquiryCustomerNotes','',['class'=>'form-control col-md-7 col-xs-12','id'=>'inquiryCustomerNotes','data-parsley-maxlength'=>'40','required'=>'required']) !!}
      </div>
    </div>
    <div class="form-group">
      {!! Form::label('InquiryDate', 'Inquiry Date', ['class' => 'col-md-3 col-sm-3 col-xs-12']); !!}
      <div class="col-md-6 col-sm-6 col-xs-12">
        {!! Form::text('InquiryDate','',['class'=>'form-control col-md-7 col-xs-12','id'=>'inquiryCustomerDate','data-parsley-maxlength'=>'40','required'=>'required']) !!}
      </div>
    </div>
    <div class="ln_solid"></div>
      <div class="form-group">
        <div class="col-md-6 col-sm-6 col-xs-12 col-md-offset-3 orderInvoiceSubmit">
        {!! Form::submit('Proceed To Cart',['class' => 'btn btn-success orderInvoiceButton']) !!}
      </div>
    </div>
    {!! Form::close() !!}
</div>