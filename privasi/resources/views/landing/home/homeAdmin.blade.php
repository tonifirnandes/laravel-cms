@extends('layouts.header.headerAdmin') 

@section('content')
<div class="right_col" role="main">
  <div class="row">
    <div class="col-md-12 col-sm-12 col-xs-12">
      <div class="x_panel">
        <div class="x_title">
          <h3>Admin </h3>
        </div>
        <div class="x_content">
          <div class="" role="tabpanel" data-example-id="togglable-tabs">
            <div id="myTabContent" class="tab-content">
            
              <div class="show-message">
                <?php if(Session::has('message')): ?>
                <div class="alert alert-success">
                  <strong>Success!</strong> <?php echo Session::get('message') ?>
                </div>
                <?php endif; ?>
              </div>

              {{--  <h1>
                 Product Counts Result : {{ $productCounts }}
              </h1>  --}}
              
              @include('landing.product.product.product')
              
              @include('landing.product.productBrand.productBrand')
              
              @include('landing.product.newProduct.newProduct')

              @include('landing.product.productCategory.productCategory')

              @include('landing.product.productBrandCategory.productBrandCategory')

              @include('landing.product.productPrice.productPrice')

              @include('landing.product.productPromo.productPromo')

              @include('landing.activity.userActivity.userActivity')

              @include('landing.ticket.tickets')

              @include('landing.welcome.welcomeAdminPage')

              @include('landing.upload.uploadProduct.uploadProduct')

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
@endsection