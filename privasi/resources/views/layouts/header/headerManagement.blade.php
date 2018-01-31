<!DOCTYPE html>
<html lang="en">

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="csrf-token" content="{{ csrf_token() }}" />
  <title>Qmall Management </title>

  <link href="{{ asset('assets/css/bootstrap/bootstrap.min.css') }}" rel="stylesheet">
  <link href="{{ asset('assets/font-awesome/css/font-awesome.min.css') }}" rel="stylesheet">
  <link href="{{ asset('assets/css/jquery.simple-dtpicker.css') }}" rel="stylesheet">
  <link href="{{ asset('assets/css/flat/green.css') }}" rel="stylesheet">
  <link href="{{ asset('assets/css/daterangepicker.css') }}" rel="stylesheet">
  <link href="{{ asset('assets/css/custom.min.css') }}" rel="stylesheet">
  <link href="{{ asset('assets/css/main.css') }}" rel="stylesheet">
  <link href="{{ asset('assets/css/admin.css') }}" rel="stylesheet">

  <script type="text/javascript">
    var BaseUrl = '<?php echo url('/'); ?>';
  </script>
  <script src="{{ asset('assets/js/jquery.min.js') }}"></script>
   <script src="{{ asset('assets/js/jquery.smartWizard.js') }}"></script>
  <script src="{{ asset('assets/js/bootstrap.min.js') }}"></script>
  <script src="{{ asset('assets/js/fastclick.js') }}"></script>
  <script src="{{ asset('assets/js/jquery.simple-dtpicker.js') }}"></script>
  <script src="{{ asset('assets/js/daterangepicker.js') }}"></script>
  <script src="{{ asset('assets/js/dmuploader.min.js') }}"></script>
  <script src="{{ asset('assets/js/sweetalert.min.js') }}"></script>
  <script src="{{ asset('assets/js/parsley.js') }}"></script>
  <script src="{{ asset('assets/js/jquery.dataTables.min.js') }}"></script>
</head>

<body class="nav-md">
  <div class="container body">
    <div class="main_container">
      <div class="col-md-3 left_col">
        <div class="left_col scroll-view">
          <div class="navbar nav_title" style="border: 0;">
            <a href="{{url('landing')}}" class="site_title">
              <i class="fa fa-paw"></i>
              <span>Qmall Management</span>
            </a>
          </div>
          <div class="clearfix"></div>
          <br />
          <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
            <div class="menu_section">
              <h3>Menu</h3>
              <ul class="nav side-menu">
                <li>
                    <a>
                      <i class="fa fa-users"></i> Accounts
                      <span class="fa fa-chevron-down"></span>
                    </a>
                    <ul class="nav child_menu">
                      <li>
                        <a href="#" class="ManageAccounts">Manage Account</a>
                      </li>
                    </ul>
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="top_nav">
        <div class="nav_menu">
          <nav>
            <div class="nav toggle">
              <a id="menu_toggle">
                <i class="fa fa-bars"></i>
              </a>
            </div>
            <ul class="nav navbar-nav navbar-right">
              <li class="">
                <a href="javascript:;" class="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                  <img src="{{ asset('assets/img/img.jpg') }}" alt="">Admin
                  <span class=" fa fa-angle-down"></span>
                </a>
                <ul class="dropdown-menu dropdown-usermenu pull-right">
                  <li>
                    <a href="javascript:;"> Profile</a>
                  </li>
                  <li>
                    <a href="javascript:;">
                      <span class="badge bg-red pull-right">50%</span>
                      <span>Settings</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:;">Help</a>
                  </li>
                  <li>
                    <a href="{{url('logout')}}">
                      <i class="fa fa-sign-out pull-right"></i> Log Out</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      @section('content') @show
      <script>
        $('.form-horizontal').parsley();
      </script>
      <script src="{{ asset('assets/js/custom.min.js') }}"></script>
      <script src="{{ asset('assets/js/dashboard.js') }}"></script>
</html>