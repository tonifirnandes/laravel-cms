<table id="datatable" class="table table-striped table-bordered inquiryListTable">
    <thead>
        <tr>
            <th>No</th>
            <th>Customer</th>
            <th>Notes</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        <?php $i=1; ?> 
        @foreach ( $Inquiry as $Inquirys )
        <tr>
            <td noTable="{{ $i }}">{{ $i++ }}</td>
            <td>{{ $Inquirys->customerEmail }}</td>
            <td>{{ $Inquirys->customerInquiryNotes }}</td>
            <td>{{ $Inquirys->customerInquiryDate }}</td>
            <td>{{ $Inquirys->customerInquiryStatus }}</td>
            <td width="25%" inquiryUser="{{ $Inquirys->customerEmail }}">
                <a href="#" inquiryId="{{ $Inquirys->customerInquiryId }}" class="btn btn-info btn-xs viewInquiry"><i class="fa fa-pencil"></i> View Detail </a>
                @php
                if($Inquirys->customerInquiryStatus=='inValid'){
                    echo '<a href="#" class="btn btn-success btn-xs changeInquiryStatus"><i class="fa fa-phone"></i> Change Status </a>';
                }else{
                    echo '<a href="#" class="btn btn-success btn-xs proceedToCart" inquiryId="'.$Inquirys->customerInquiryId.'"><i class="fa fa-shopping-cart"></i> Proceed To Cart </a>';
                }
                @endphp
            </td>
        </tr>
        @endforeach
    </tbody>
</table>