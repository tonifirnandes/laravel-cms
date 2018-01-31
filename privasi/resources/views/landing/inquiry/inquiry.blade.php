<div role="tabpanel" class="tab-pane fade" id="InquiryListPage" aria-labelledby="profile-tab">
    
    @include('landing.inquiry.inquiryForm')

    <div class="col-md-12 col-sm-12 col-xs-12">
        <div class="x_panel">
            <div class="x_title">
                <h2>Inquiry List Table </h2>
                <ul class="nav navbar-left panel_toolbox">
                    <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a></li>
                </ul>
                <div class="clearfix"></div>
            </div>
            <div class="x_content">
                
                @include('landing.inquiry.inquiryTable')

            </div>
        </div>
    </div>
</div>
<script type = "text/javascript" src="{{ asset('assets/js/inquiry/inquiry.js') }}"></script>
<script>
    $(document).ready(function() {
        $('table.inquiryListTable').DataTable();
    } );
</script>