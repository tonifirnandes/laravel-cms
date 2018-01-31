var uploadProductButton;
var productFileInput;

var controller;

$(document).ready(function() {
    initDom();
    initViewController();
    reloadProducts();
    
});

function initDom() {
    uploadProductButton = $('#uploadProductBtn');
    productTable = $('#dvCSV');
    productFileInput = $("#fileUpload");
    initEventHandler();
}

function initViewController() {
    controller = new UploadProductController(new UploadProductView(),
        new UploadProductModel(productTable));
}

function initEventHandler() {
    uploadProductButton.click(function() {
        controller.onUploadProductFile(productFileInput);
    });
}

function UploadProductView() {
    var publicFunction = {
        onFileReaderNotSupportedError: function() {
            onFileReaderNotSupportedError();
        },
        onInputFileTypeNotValid: function() {
            onInputFileTypeNotValid();
        },
        onGetProductInputFileError: function() {
            onGetProductInputFileError();
        }
    }

    return publicFunction;
}

function onFileReaderNotSupportedError() {
    alert("This browser does not support HTML5.");
}

function onInputFileTypeNotValid() {
    alert("Please upload a valid CSV file.");
}

function onGetProductInputFileError() {
    alert('Sorry, we are unable to process the file for a moment, please try again later!');
}
var arrayProduct = [];
var arrayItem;
function reloadProducts(){
    $(document.body).on("click",".reloadProduct", function () {
        console.log("reload products");
        var reloadControllerUrl = BaseUrl + '/upload/reload_product';
        $.get(reloadControllerUrl, function(data){
            if(data){
                productTable.html('');
                // for (var i = 1; i < data.length; i++) {
                //     arrayProduct[i] = [data.No+","+data.name+","+data.name2+","+data.name3+","+data.name4+","+data.name5+","+data.name6+","+data.name7];
                // }
                $.each(data, function( index, value ) {
                    var row = $("<tr><td>" + value.No + "</td><td>" + value.name + "</td><td>" + value.name2 + "</td><td>" + value.name3 + "</td><td>" + value.name4 + "</td><td>" + value.name5 + "</td><td>" + value.name6 + "</td><td>" + value.name7 + "</td></tr>");
                    productTable.append(row);
                    // arrayItem = value.No+","+value.name+","+value.name2+","+value.name3+","+value.name4+","+value.name5+","+value.name6+","+value.name7;
                    // arrayProduct.push(arrayItem);
                });
                productTable.fnAddData(arrayProduct);
                console.log(arrayProduct);
            } else {
                alert("Sorry, The data cannot be loaded for a moment.");
            }
        });
    });
}
