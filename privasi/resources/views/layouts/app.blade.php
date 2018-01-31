<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Qmall Admin </title>

	  <link href="{{ asset('assets/css/bootstrap/bootstrap.min.css') }}" rel="stylesheet">
	  <link href="{{ asset('assets/font-awesome/css/font-awesome.min.css') }}" rel="stylesheet">

	  <link href="{{ asset('assets/css/flat/green.css') }}" rel="stylesheet">
	  <link href="{{ asset('assets/css/custom.min.css') }}" rel="stylesheet">
    
    <script src="{{ asset('assets/js/jquery.min.js') }}"></script>
    <script src="{{ asset('assets/js/parsley.js') }}"></script>

    <script type="text/javascript">
        var BaseUrl = '<?php echo url('/'); ?>';
    </script>
	
  </head>
  
    @section('menu')
    @show

    @section('content')
    @show
  
    <script src="{{ asset('assets/js/bootstrap.min.js') }}"></script>
    <script src="{{ asset('assets/js/fastclick.js') }}"></script>

    <script src="{{ asset('assets/js/custom.min.js') }}"></script>
    <script src="{{ asset('assets/js/dashboard.js') }}"></script>
</html>