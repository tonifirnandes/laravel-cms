@extends('layouts.header.headerManagement') 

@section('content')
<div class="right_col" role="main">
  <div class="row">
    <div class="col-md-12 col-sm-12 col-xs-12">
      <div class="x_panel">
        <div class="x_title">
          <h3>Management</h3>
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

              @include('landing.welcome.welcomeManagementPage')

              @include('landing.accounts.accounts')

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
@endsection