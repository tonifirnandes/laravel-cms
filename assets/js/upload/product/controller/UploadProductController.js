const INPUT_PRODUCT_FILE_INDEX = 0,
UPLOAD_PRODUCT_INPUT_FILE_INDEX = 0,
CSV_FILE_ROW_INPUT_DELIMITTER = "\n",
CSV_FILE_CELL_INPUT_DELIMITTER = ",";

var view;
var model;
var productFileInputView;

function UploadProductController(uploadProductView, uploadProductModel) {

    view = uploadProductView;
    model = uploadProductModel;

    var publicFunction = {
        onUploadProductFile: function(productFileInput) {
            productFileInputView = productFileInput;
            onUploadProductFile();
        }
    }

    return publicFunction;
}

function onUploadProductFile() {
    if (isValidCsvFile()) {
        if (hasSupportedFileReader()) {
            readInputFile();
        } else {
            view.onFileReaderNotSupportedError();
        }
    } else {
        view.onInputFileTypeNotValid();
    }
}

function isValidCsvFile() {
    var regexCsvFile = /^([a-zA-Z0-9\s_\\.\-:])+(.csv)$/;
    return regexCsvFile.test(productFileInputView.val().toLowerCase());
}

function hasSupportedFileReader() {
    return typeof(FileReader) != "undefined";
}

function readInputFile() {
    //init file reader
    var fileReader = new FileReader();
    initReaderEventListener(fileReader);

    //validate if file is not empty first
    if (getProductInputFile()) {
        fileReader.readAsText(getProductInputFile());
    } else {
        view.onGetProductInputFileError();
    }
}

function initReaderEventListener(fileReader) {
    fileReader.onloadstart = function(event) {
        model.renewDataSets();
        onReaderLoadStart(event);
    };
    fileReader.onprogress = function(event) {
        onReaderProgress(event);
    };
    fileReader.onload = function(event) {
        onReaderLoad(event);
    }
    fileReader.onloadend = function(event) {
        onReaderLoadEnd(event);
    }
}

function onReaderLoadStart(event) {
    console.log(" Start reading data from controller");
}

function onReaderProgress(event) {
    console.log(" Reading data on progress");
}

function onReaderLoad(event) {
    console.log(" Load data");
    var fileRows = getFileDataRows(event.target.result);
    //skip the column header, because of we have been initialized it
    if (fileRows && fileRows.length > 0) {
        // console.log(fileRows);
        model.updateNewDataSets(fileRows);
    } else {
        console.log(" Empty file rows");
    }

}

function getFileDataRows(fileReadResult) {
    return fileReadResult.split(CSV_FILE_ROW_INPUT_DELIMITTER).filter(function(row) {
        return row.length > 0;
    });
}

function getFileDataCells(fileRow) {
    return fileRow.split(CSV_FILE_CELL_INPUT_DELIMITTER);
}

function onReaderLoadEnd() {
    console.log(" load data ended");
    model.updateDataTable(dataSets);
}

function getProductInputFile() {
    return productFileInputView[UPLOAD_PRODUCT_INPUT_FILE_INDEX].files[INPUT_PRODUCT_FILE_INDEX];
}