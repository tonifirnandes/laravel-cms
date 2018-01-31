<div class="accountManage" style="display:none;">
    <div class="col-md-12 col-sm-12 text-right x_title">
        <button type="button" class="btn btn-success btn-sm viewAccount"><i class="fa fa-list"></i> See Accounts</button>
    </div> 
    <div class="col-md-12 col-sm-12 accountForm">
        <div class="col-md-6 col-sm-6"> 
            {!! Form::open(['url' => 'admin/insert_or_update_account', 'method' => 'post', 'class'=>'form-horizontal', 'files' => true,'enctype'=>'multipart/form-data']) !!}
            <div class="form-group">
                {!! Form::label('AccountEmail', 'Account Email', ['class' => 'col-md-3 col-sm-3 col-xs-12']); !!}
                <div class="col-md-6 col-sm-6 col-xs-12">
                {!! Form::text('AccountEmail','admin@admin.com',['class'=>'form-control col-md-7 col-xs-12','disabled'=>'disabled']) !!}
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
            <br>
            <ul class="to_do">
                <li>
                <p>
                    Schedule meeting with new client </p>
                </li>
                <li>
                <p>
                    Create email address for new intern</p>
                </li>
                <li>
                <p>
                    Have IT fix the network printer</p>
                </li>
                <li>
                <p>
                    Copy backups to offsite location</p>
                </li>
                <li>
                <p>
                    Food truck fixie locavors mcsweeney</p>
                </li>
            </ul>
        </div>
        <div class="col-md-6 col-sm-6">
            <ul class="to_do">
                <li>
                <p>
                    <input type="checkbox" class="flat"> Schedule meeting with new client </p>
                </li>
                <li>
                <p>
                    <input type="checkbox" class="flat"> Create email address for new intern</p>
                </li>
                <li>
                <p>
                    <input type="checkbox" class="flat"> Have IT fix the network printer</p>
                </li>
                <li>
                <p>
                    <input type="checkbox" class="flat"> Copy backups to offsite location</p>
                </li>
                <li>
                <p>
                    <input type="checkbox" class="flat"> Food truck fixie locavors mcsweeney</p>
                </li>
                <li>
                <p>
                    <input type="checkbox" class="flat"> Food truck fixie locavors mcsweeney</p>
                </li>
                <li>
                <p>
                    <input type="checkbox" class="flat"> Create email address for new intern</p>
                </li>
                <li>
                <p>
                    <input type="checkbox" class="flat"> Have IT fix the network printer</p>
                </li>
                <li>
                <p>
                    <input type="checkbox" class="flat"> Copy backups to offsite location</p>
                </li>
            </ul>
        </div>
    </div>
</div>