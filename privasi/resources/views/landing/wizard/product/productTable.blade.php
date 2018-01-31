<table id="datatable" class="table table-striped table-bordered">
    <thead>
        <tr>
            <th>Select</th>
            <th>No</th>
            <th>Name</th>
            <th>Part Number</th>
            <th>Stock</th>
            <th>Specification</th>
            <th>Description</th>
            <th>Weight</th>
            <th>Download</th>
        </tr>
    </thead>
    <tbody>
        <?php $i=1; ?> 
        @foreach ( $Product as $Products )
        <tr>
            <td><input type="checkbox" id="check-all" value="{{ $Products->productId }}" name="checkProduct"></td>
            <td noTable="{{ $i }}">{{ $i++ }}</td>
            <td>{{ $Products->productName }}</td>
            <td>{{ $Products->productPartNumber }}</td>
            <td>{{ $Products->productStock }}</td>
            <td>{{ $Products->productSpesification }}</td>
            <td>{{ $Products->productDescription }}</td>
            <td>{{ $Products->productWeight }}</td>
            <td>{{ $Products->productDownloadLink }}</td>
        </tr>
        @endforeach
    </tbody>
</table>
{{--  {{ $Product->render() }}  --}}