<table id="datatable" class="table table-striped table-bordered">
    <thead>
        <tr>
            <th>Select</th>
            <th>No</th>
            <th>User</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody>
        <?php $i=1; ?> 
        @foreach ( $Cart as $Carts )
        <tr>
            <td><input type="checkbox" id="check-all" value="{{ $Carts->cartId }}" name="checkCart"></td>
            <td noTable="{{ $i }}">{{ $i++ }}</td>
            <td>{{ $Carts->customerEmail }}</td>
            <td>{{ $Carts->cartStatus }}</td>
        </tr>
        @endforeach
    </tbody>
</table>