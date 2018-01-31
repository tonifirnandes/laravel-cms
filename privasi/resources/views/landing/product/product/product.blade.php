<div role="tabpanel" class="tab-pane fade in" id="InputProduct" aria-labelledby="profile-tab">

  <div class="col-md-12 col-sm-12 col-xs-12">
    <div class="x_panel">
        <div class="x_title">
          <h2><b>Product Page</b></h2>
          <ul class="nav navbar-left panel_toolbox">
              <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a></li>
          </ul>
          <div class="clearfix"></div>
        </div>
        <div class="x_content productContent">
          
          @include('landing.product.product.productForm')

          @include('landing.product.product.productTable')

        </div>
    </div>
  </div>
</div>
<script type = "text/javascript" src="{{ asset('assets/js/product/Product.js') }}"></script>
