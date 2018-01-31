<div class="col-md-12 col-sm-12 userActivityForm"  style="display:none;">
    {!! Form::open(['url' => 'admin/insert_or_update_account', 'method' => 'post', 'class'=>'form-horizontal', 'files' => true,'enctype'=>'multipart/form-data']) !!}
    <div class="form-group">
        {!! Form::label('AccountEmail', 'Account Email', ['class' => 'col-md-3 col-sm-3 col-xs-12']); !!}
        <div class="col-md-6 col-sm-6 col-xs-12">
        {!! Form::text('AccountEmail','',['class'=>'form-control col-md-7 col-xs-12','data-parsley-maxlength'=>'40','required'=>'required']) !!}
        </div>
    </div>
    <div class="form-group">
    {!! Form::label('AccountFirstName', 'Account First Name', ['class' => 'col-md-3 col-sm-3 col-xs-12']); !!}
        <div class="col-md-6 col-sm-6 col-xs-12">
        {!! Form::text('AccountFirstName','',['class'=>'form-control col-md-7 col-xs-12']) !!}
        </div>
    </div>
    <div class="form-group">
    {!! Form::label('AccountLastName', 'Account Last Name', ['class' => 'col-md-3 col-sm-3 col-xs-12']); !!}
        <div class="col-md-6 col-sm-6 col-xs-12">
        {!! Form::text('AccountLastName','',['class'=>'form-control col-md-7 col-xs-12']) !!}
        </div>
    </div>
    <div class="form-group">
    {!! Form::label('AccountPassword', 'Account Password', ['class' => 'col-md-3 col-sm-3 col-xs-12']); !!}
        <div class="col-md-6 col-sm-6 col-xs-12">
        {{ Form::password('AccountPassword', array('class' => 'form-control col-md-7 col-xs-12','data-parsley-equalto'=>'#valPassword','required'=>'required','minlength'=>'8')) }}
        </div>
    </div>
    <div class="form-group">
    {!! Form::label('AccountValPassword', 'Account Validate Password', ['class' => 'col-md-3 col-sm-3 col-xs-12']); !!}
        <div class="col-md-6 col-sm-6 col-xs-12">
        {{ Form::password('AccountValPassword', array('class' => 'form-control col-md-7 col-xs-12','id'=>'valPassword','minlength'=>'8')) }}
        </div>
    </div>
    <div class="form-group">
        {!! Form::label('AdminRole', 'Admin Role', ['class' => 'col-md-3 col-sm-3 col-xs-12']); !!}
        <div class="col-md-6 col-sm-6 col-xs-12">
        <select class="form-control" id="AdminRole" name="AdminRole">
            <option value="1">Admin</option>
            <option value="2">Finance</option>
        </select>
        </div>
    </div>
    <div class="ln_solid"></div>
        <div class="form-group">
        <div class="col-md-6 col-sm-6 col-xs-12 col-md-offset-3 productSubmit">
        {!! Form::submit('Submit',['class' => 'btn btn-success productButton']) !!}
        </div>
    </div>
    {!! Form::close() !!}
</div>