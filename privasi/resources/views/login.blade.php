  @extends('layouts.app')

  @section('menu')
  @endsection

  @section('content')
    <body class="login" style="">   
      <div>
        <a class="hiddenanchor" id="signup"></a>
        <a class="hiddenanchor" id="signin"></a>

        <div class="login_wrapper">
          <div class="animate form login_form">
            <section class="login_content">
            {!! Form::open(['url' => 'login']) !!}
                <h1>Qmall Store</h1>
                <div class="show-message">
                  <?php if(Session::has('status')): ?>
                  <div class="alert alert-error">
                    <strong>Error!</strong> <?php echo Session::get('status') ?>
                  </div>
                  <?php endif; ?>
                </div>
                <div>{!! Form::text('adminEmail','',['placeholder'=> 'Email','class'=>'form-control','required'=>'required']) !!}</div>
                <div>{!! Form::password('adminPassword', ['placeholder'=> 'Password','class' => 'form-control','required'=>'required','minlength'=>'8']) !!}</div>
                <div>{!! Form::submit('Submit',['class' => 'btn btn-block btn-primary']) !!}</div>
                
           {!! Form::close() !!}
            </section>
          </div>

@endsection

