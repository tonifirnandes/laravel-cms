
<div role="tabpanel" class="tab-pane fade in" id="AccountsForm" aria-labelledby="profile-tab">
  
    <div class="col-md-12 col-sm-12 col-xs-12">
      <div class="x_panel">
          <div class="x_title">
            <h2>Account Table </h2>
            <ul class="nav navbar-left panel_toolbox">
                <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a></li>
            </ul>
            <div class="clearfix"></div>
          </div> 
          <div class="x_content accountContent">
  
            @include('landing.accounts.accountsTable')

            @include('landing.accounts.accountsForm')

            @include('landing.accounts.accountsManage')
  
          </div>
      </div>
    </div>
  </div>
  <script type = "text/javascript" src="{{ asset('assets/js/admin/accounts.js') }}"></script>
  