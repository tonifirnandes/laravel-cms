<div role="tabpanel" class="tab-pane fade in" id="TicketForm" aria-labelledby="profile-tab">
    
    <div class="col-md-12 col-sm-12 col-xs-12">
        <div class="x_panel">
            <div class="x_title">
            <h2>Account Table </h2>
            <ul class="nav navbar-left panel_toolbox">
                <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a></li>
            </ul>
            <div class="clearfix"></div>
            </div>
            <div class="x_content">

            @include('landing.ticket.ticketsForm')
    
            @include('landing.ticket.ticketsTable')
    
            </div>
        </div>
    </div>
</div>
<script type = "text/javascript" src="{{ asset('assets/js/admin/accounts.js') }}"></script>
<script>
    var table = $('.ticketListTable').DataTable({ 
        'columnDefs': [{
            'targets': 0,
            'searchable':false,
            'orderable':false,
            'className': 'dt-body-center',
            'render': function (data, type, full, meta){
                return '<input type="checkbox" name="id[]" value="' 
                    + $('<div/>').text(data).html() + '">';
            }
        }],
        'order': [1, 'asc']
        });
    
        $('#example-select-all').on('click', function(){
        
        var rows = table.rows({ 'search': 'applied' }).nodes();
        $('input[type="checkbox"]', rows).prop('checked', this.checked);
        });
    
        $('#example tbody').on('change', 'input[type="checkbox"]', function(){
        if(!this.checked){
            var el = $('#example-select-all').get(0);
            if(el && el.checked && ('indeterminate' in el)){
                el.indeterminate = true;
            }
        }
        });
        
        $('#frm-example').on('submit', function(e){
        var form = this;
    
        table.$('input[type="checkbox"]').each(function(){
            if(!$.contains(document, this)){
                if(this.checked){
                    $(form).append(
                    $('<input>')
                        .attr('type', 'hidden')
                        .attr('name', this.name)
                        .val(this.value)
                    );
                }
            } 
        });
            
        e.preventDefault();
        });
</script>