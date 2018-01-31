<div class="cartForm col-md-12" style="display:none;">
    <div class="x_panel">
        <div class="x_content">
            <section class="content invoice">
                <div class="row">
                    <div class="col-xs-12 invoice-header">
                        <h1>
                            <i class="fa fa-globe"></i> Cart List
                            <small id="cartUserEmail" class="pull-right"></small>
                        </h1>
                    </div>
                </div>
                <div class="row invoice-info">
                    <div class="col-sm-4 invoice-col">
                        User Detail
                        <address>
                            <strong id="cartUserName"></strong>
                            <br>795 Freedom Ave, Suite 600
                            <br>New York, CA 94107
                            <br>Phone: 1 (804) 123-9876
                            <br>Email: ironadmin.com
                        </address>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xs-12 table">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>Qty</th>
                                    <th>Product</th>
                                    <th>Serial #</th>
                                    <th>Description</th>
                                    <th>Created</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody id="cartProductTable">
                                
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="row">
                    <div class="col-xs-12">
                        <p class="lead">Status: <strong id="cartUserStatus"></strong></p>
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
                    <div class="col-xs-6">
                        <p id="amountDue" class="lead"></p>
                        <div class="table-responsive">
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <th style="width:50%">Subtotal:</th>
                                        <td id="totalCartPrice"></td>
                                    </tr>
                                    <tr>
                                        <th>Tax (9.3%)</th>
                                        <td>$10.34</td>
                                    </tr>
                                    <tr>
                                        <th>Shipping:</th>
                                        <td>$5.80</td>
                                    </tr>
                                    <tr>
                                        <th>Total:</th>
                                        <td id="totalPrice"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div class="row no-print">
                    <div class="col-xs-12">
                        <button class="btn btn-default" onclick="window.print();">
                            <i class="fa fa-print"></i> Print</button>
                        <button class="btn btn-success pull-right">
                            <i class="fa fa-credit-card"></i> Submit Payment</button>
                        <button class="btn btn-primary pull-right" style="margin-right: 5px;">
                            <i class="fa fa-download"></i> Generate PDF</button>
                    </div>
                </div>
            </section>
        </div>
    </div>
</div>