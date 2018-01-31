<table id="datatable" class="table table-striped table-bordered">
    <thead>
        <tr>
            <th>No</th>
            <th>Description</th>
            <th>Image</th>
            <th>Product</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        <?php $i=1; ?> @foreach ( $ProductPromo as $ProductPromos )
        <tr>
            <td>{{ $i++ }}</td>
            <td>{{ $ProductPromos->productPromoDescription }}</td>
            <td>{{ $ProductPromos->productPromoImage }}</td>
            <td>{{ $ProductPromos->productName }}</td>
            <td><a href="#" productPromoId="{{ $ProductPromos->productPromoId }}" class="btn btn-info btn-xs editProductPromo"><i class="fa fa-pencil"></i> Edit </a>
                <a href="#" productPromoId="{{ $ProductPromos->productPromoId }}" class="btn btn-danger btn-xs deleteProductPromo"><i class="fa fa-trash-o"></i> Delete </a>
            </td>
        </tr>
        @endforeach
    </tbody>
</table>