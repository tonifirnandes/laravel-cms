<div role="tabpanel" class="tab-pane fade" id="UploadProduct" aria-labelledby="profile-tab">

  @include('landing.upload.uploadProduct.uploadProductForm')

  <div class="col-md-12 col-sm-12 col-xs-12">
    <div class="x_panel">
      <div class="x_title">
        <h2>Product Table </h2>
        <ul class="nav navbar-left panel_toolbox">
          <li>
            <a class="collapse-link">
              <i class="fa fa-chevron-up"></i>
            </a>
          </li>
        </ul>
        <div class="clearfix"></div>
      </div>
      <div class="x_content">

        @include('landing.upload.uploadProduct.uploadProductTable')

      </div>
    </div>
  </div>

</div>
<script type = "text/javascript" src="{{ asset('assets/js/upload/product/model/UploadProductModel.js') }}"></script>
<script type = "text/javascript" src="{{ asset('assets/js/upload/product/controller/UploadProductController.js') }}"></script>
<script type = "text/javascript" src="{{ asset('assets/js/upload/product/view/UploadProductView.js') }}"></script>