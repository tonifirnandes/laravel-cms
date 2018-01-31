var editProductPrice = (function(){
        
    var editProductPriceButton, 
    editProductPriceButtonUpdate,
    productPriceButtonUpdate,
    productPriceIdAttribute;

    const EDIT_PRODUCT_PRICE_BUTTON_CLASS   = ".editProductPrice",
    PRODUCT_PRICE_FORM                      = "#ProductPrice",
    PRODUCT_PRICE_DESC_FORM                 = "#ProductPriceDesc",
    PRODUCT_PRICE_STATUS                    = "#ProductPriceStatus",
    PRODUCT_PRICE_ID_FORM                   = "#ProductIdInPrice",
    PRODUCT_PRICE_BUTTON_CLASS              = ".productPriceButton",
    PRODUCT_PRICE_ID_ATTRIBUTE              = "productPriceId",
    PRODUCT_PRICE_BUTTON_UPDATE             = "Update",
    PRODUCT_PRICE_BUTTON_ADD_CLASS          = "updateProductPrice",
    PRODUCT_PRICE_BUTTON_UPDATE_CLASS       = "updatePrice",
    PRODUCT_PRICE_POST_URL                  = "/product/show_form_product_price/",
    GET_DATA_ERROR_NOTIFICATION             = "Sorry, The data cannot be loaded for a moment.",
    CLICK_EVENT_LISTENER_IDENTIFIER         = "click";

    var init = () => {
        initDom();
        initEventListener();
    }

    var initDom = () => {            
        clickEventListenerIdentifier    = CLICK_EVENT_LISTENER_IDENTIFIER;
        getDataErrorNotification        = GET_DATA_ERROR_NOTIFICATION;
        productPriceForm                = PRODUCT_PRICE_FORM;
        productPriceIdForm              = PRODUCT_PRICE_ID_FORM;
        productPriceButtonClass         = PRODUCT_PRICE_BUTTON_CLASS;
        productPriceButtonUpdate        = PRODUCT_PRICE_BUTTON_UPDATE;
        productPriceStatus              = PRODUCT_PRICE_STATUS;
        productPriceDescForm            = PRODUCT_PRICE_DESC_FORM;
        productPriceIdAttribute         = PRODUCT_PRICE_ID_ATTRIBUTE;
        productPricePostUrl             = PRODUCT_PRICE_POST_URL;
        editProductPriceButton          = $(EDIT_PRODUCT_PRICE_BUTTON_CLASS);
        editProductPriceButtonUpdate    = $(editProductPriceButtonUpdate).parent().parent().parent().children();
    }

    var initEventListener = () => {
        editProductPriceButton.on(clickEventListenerIdentifier, function(){
            getProductPriceData($(this).attr(productPriceIdAttribute));
        });
    }

    var getProductPriceData = (productPriceIdAttribute) =>{
        var productControllerUrl = BaseUrl + productPricePostUrl+productPriceIdAttribute;
        $.get(productControllerUrl, function(data){
            if(data){
                onSuccessGetProductPriceData(data);
            } else {
                onErrorGetProductPriceData(getDataErrorNotification);
            }
        });
    }

    var onSuccessGetProductPriceData = (data) => {
        $(productPriceForm).val(data.productPrice);
        $(productPriceIdForm).val(data.productId);
        $(productPriceStatus).val(data.productPriceDisplayStatus);
        $(productPriceDescForm).val(data.productPriceStatus);
        $(productPriceButtonClass).val(productPriceButtonUpdate);
    }

    var onErrorGetProductPriceData =  (getDataErrorNotification) => {
        alert(getDataErrorNotification);
    }

    return {
        init: init
    }
})();

var deleteProductPrice = (function(){
    
    var deleteProductPriceButton, 
    deleteProductPriceButtonUpdate,
    productPriceNameAttribute,
    productPriceIdAttribute;

    const DELETE_PRODUCT_PRICE_BUTTON_CLASS     = ".deleteProductPrice",
    PRODUCT_PRICE_ID_ATTRIBUTE                  = "productPriceId",
    PRODUCT_PRICE_NAME_ATTRIBUTE                = "productPriceName",
    DELETE_DATA_SUCCESS_NOTIFICATION            = "Data Delete Succeed.",
    PRODUCT_PRICE_DELETE_URL                    = "/product/delete_product_price/",
    DELETE_DATA_ERROR_NOTIFICATION              = "Sorry, The data cannot be deleted for a moment.",
    CLICK_EVENT_LISTENER_IDENTIFIER             = "click";

    var init = () => {
        initDom();
        initEventListener();
    }

    var initDom = () => {            
        clickEventListenerIdentifier    = CLICK_EVENT_LISTENER_IDENTIFIER;
        productPriceIdAttribute         = PRODUCT_PRICE_ID_ATTRIBUTE;
        productPriceIDeleteUrl          = PRODUCT_PRICE_DELETE_URL;
        deleteDataSuccessNotification   = DELETE_DATA_SUCCESS_NOTIFICATION;
        deleteDataErrorNotification     = DELETE_DATA_ERROR_NOTIFICATION;
        deleteProductPriceButton        = $(DELETE_PRODUCT_PRICE_BUTTON_CLASS);
        deleteProductPriceButtonUpdate  = $(deleteProductPriceButton).parent().parent();
        productPriceNameAttribute       = $(deleteProductPriceButton).attr(PRODUCT_PRICE_NAME_ATTRIBUTE);
    }

    var initEventListener = () => {
        deleteProductPriceButton.on(clickEventListenerIdentifier, function(){
            deleteProductPriceData($(this).attr(productPriceIdAttribute));
        });
    }

    var deleteProductPriceData = (productPriceIdAttribute) => {
        var productControllerUrl = BaseUrl + productPriceIDeleteUrl+productPriceIdAttribute;
        $.get(productControllerUrl, function(data){
            if(data){
                console.log(data);
                onSuccessDeleteProductPriceData(data);
            } else {
                onErrorDeleteProductPriceData(deleteDataErrorNotification);
            }
        });
    }

    var onSuccessDeleteProductPriceData = (data) => {
        alert(deleteDataSuccessNotification);
    }

    var onErrorDeleteProductPriceData = (deleteDataErrorNotification) => {
        alert(deleteDataErrorNotification);
    }

    return {
        init: init
    }
})();
