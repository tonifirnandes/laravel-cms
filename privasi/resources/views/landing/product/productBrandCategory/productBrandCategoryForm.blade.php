<div class="productCategoryForm">
    <form class="form-horizontal" action="{{ URL('product/insert_or_update_product_brand_category') }}" method="POST">
        {{ csrf_field() }}
        <div class="form-group">
            <label class="col-md-3 col-sm-3 col-xs-12">Product Brand Category</label>
            <div class="col-md-6 col-sm-6 col-xs-12">
                {{--  <select class="form-control" name="ProductCategory" id="ProductCategoryBrand">
                    @foreach ( $ProductCategory as $ProductCategorys )
                    <option value="{{ $ProductCategorys->productCategoryId }}">{{ $ProductCategorys->productCategoryDescription }}</option>
                    @endforeach
                </select>  --}}
            </div>
        </div>
        <div class="form-group">
            <label class="col-md-3 col-sm-3 col-xs-12">Product Brand</label>
            <div class="col-md-6 col-sm-6 col-xs-12">
                {{--  <select class="form-control" name="ProductBrand" id="ProductBrandCategory">
                    @foreach ( $ProductBrand as $ProductBrands )
                    <option value="{{ $ProductBrands->productBrandId }}">{{ $ProductBrands->productBrandDescription }}</option>
                    @endforeach
                </select>  --}}
            </div>
        </div>
        <div class="ln_solid"></div>
        <div class="form-group">
            <div class="col-md-6 col-sm-6 col-xs-12 col-md-offset-3">
                <input class="btn btn-success productBrandCategoryButton" value="Submit" type="submit">
            </div>
        </div>
    </form>
</div>