<div role="tabpanel" class="tab-pane fade" id="InputProductBrand" aria-labelledby="profile-tab">

    @include('landing.product.productBrand.productBrandForm')

    <div class="col-md-12 col-sm-12 col-xs-12">
        <div class="x_panel">
            <div class="x_title">
                <h2>Product Brand Table </h2>
                <ul class="nav navbar-left panel_toolbox">
                    <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a></li>
                </ul>
                <div class="clearfix"></div>
            </div>
            <div class="x_content">

                @include('landing.product.productBrand.productBrandTable')                
            
            </div>
        </div>
    </div>
</div>
<script type = "text/javascript" src="{{ asset('assets/js/product/productBrand.js') }}"></script>