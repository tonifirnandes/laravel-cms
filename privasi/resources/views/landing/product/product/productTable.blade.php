<div class="col-md-12 col-sm-12 productTable">
    <div class="" role="tabpanel" data-example-id="togglable-tabs">
        <ul id="myTab" class="nav nav-tabs bar_tabs" role="tablist">
            <li role="presentation" class="active"><a href="#tab_content1" id="home-tab" role="tab" data-toggle="tab" aria-expanded="true">Oriental</a></li>
            <li role="presentation" class=""><a href="#tab_content2" role="tab" id="profile-tab" data-toggle="tab" aria-expanded="false">Omron</a></li>
            <li role="presentation" class=""><a href="#tab_content3" role="tab" id="profile-tab2" data-toggle="tab" aria-expanded="false">Yamaha</a></li>
        </ul>
    
        <div id="myTabContent" class="tab-content">
            <div role="tabpanel" class="first-show tab-pane fade active in" id="tab_content1" aria-labelledby="home-tab">
                <div class="col-md-12 col-sm-12 text-right x_title">
                    <button type="button" class="btn btn-warning btn-sm"><i class="fa fa-upload"></i> Import Excel</button>
                    <button type="button" class="btn btn-info btn-sm"><i class="fa fa-download"></i> Export Excel</button>
                    <button type="button" class="btn btn-success btn-sm addProduct"><i class="fa fa-plus"></i> Add Product</button>
                </div>
                <table class="table table-striped table-bordered productListTable">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Part Number</th>
                            <th>Stock</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody class="productTableBody">
                        
                    </tbody>
                </table>
            </div>

            <div role="tabpanel" class="tab-pane fade" id="tab_content2" aria-labelledby="profile-tab">
                <div class="col-md-12 col-sm-12 text-left x_title">
                    <button type="button" class="btn btn-warning btn-sm"><i class="fa fa-upload"></i> Import Excel</button>
                    <button type="button" class="btn btn-info btn-sm"><i class="fa fa-download"></i> Export Excel</button>
                    <button type="button" class="btn btn-success btn-sm addProduct"><i class="fa fa-plus"></i> Add Product</button>
                </div>
                <table class="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Part Number</th>
                            <th>Stock</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody class="productTableBody">
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>