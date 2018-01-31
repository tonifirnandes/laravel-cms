
var dataSets = [];
var productTable;
var productTableColumns = [{
        title: "No"
    },
    {
        title: "Product"
    },
    {
        title: "Code"
    },
    {
        title: "Dollar"
    },
    {
        title: "Berat"
    },
    {
        title: "Stock"
    },
    {
        title: "Lead"
    },
    {
        title: "Price"
    },
];

//model view, so we inject the view model handler "product table"
function UploadProductModel(productTable) {

    productTable = productTable;
    initProductTable();

    var publicFunction = {
        renewDataSets: function() {
            renewDataSets();
        },
        updateNewDataSets: function(fileRows) {
            updateNewDataSets(fileRows);
        },
        updateDataTable: function() {
            updateDataTable();
        }
    };

    return publicFunction;
}

function initProductTable() {
    productTable.dataTable({
        columns: productTableColumns
    });
}

function renewDataSets() {
    if (dataSets && dataSets.length > 0) {
        dataSets = [];
    } else {
        console.log("Datasets is still empty");
    }
}

function updateNewDataSets(fileRows) {
    for (var i = 1; i < fileRows.length; i++) {
        var cells = getFileDataCells(fileRows[i]);
        console.log(cells);
        if (cells && cells.length > 0) {
            dataSets.push(cells);
        } else {
            console.log("Cell is empty");
        }
    }
}

function updateDataTable() {
    clearCurrentDataTable();
    addNewDataTable();
};

function clearCurrentDataTable() {
    productTable.fnClearTable();
}

function addNewDataTable() {
    if (dataSets && dataSets.length > 0) {
        productTable.fnAddData(dataSets);
    }
}