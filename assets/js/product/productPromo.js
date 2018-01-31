var editProductPromo = (function(){
        
    var editProductPromoButton, 
    editProductPromoButtonUpdate,
    productPromoButtonUpdate,
    productPromoIdAttribute;

    const EDIT_PRODUCT_PROMO_BUTTON_CLASS   = ".editProductPromo",
    PRODUCT_PROMO_FORM                      = "#ProductPromo",
    PRODUCT_PROMO_DESC_FORM                 = "#PromoProductDesc",
    PRODUCT_PROMO_STATUS                    = "#ProductPromoStatus",
    PRODUCT_PROMO_ID_FORM                   = "#ProductIdInPrice",
    PRODUCT_PROMO_BUTTON_CLASS              = ".productPromoButton",
    PRODUCT_PROMO_ID_ATTRIBUTE              = "productPromoId",
    PRODUCT_PROMO_BUTTON_UPDATE             = "Update",
    PRODUCT_PROMO_BUTTON_ADD_CLASS          = "updateProductPromo",
    PRODUCT_PROMO_BUTTON_UPDATE_CLASS       = "updatePromo",
    PRODUCT_PROMO_POST_URL                  = "/product/show_form_product_promo/",
    GET_DATA_ERROR_NOTIFICATION             = "Sorry, The data cannot be loaded for a moment.",
    CLICK_EVENT_LISTENER_IDENTIFIER         = "click";

    var init = () => {
        initDom();
        initEventListener();
    }

    var initDom = () => {            
        clickEventListenerIdentifier    = CLICK_EVENT_LISTENER_IDENTIFIER;
        productPromoIdAtrribute         = PRODUCT_PROMO_ID_ATTRIBUTE;
        getDataErrorNotification        = GET_DATA_ERROR_NOTIFICATION;
        productPromoPostUrl             = PRODUCT_PROMO_POST_URL;
        productPromoIdForm              = PRODUCT_PROMO_ID_FORM;
        productPromoStatus              = PRODUCT_PROMO_STATUS;
        productPromoDescForm            = PRODUCT_PROMO_DESC_FORM;
        productPromoButtonUpdate        = PRODUCT_PROMO_BUTTON_UPDATE;
        productPromoButtonAddClass      = PRODUCT_PROMO_BUTTON_ADD_CLASS;
        productPromoButtonClass         = PRODUCT_PROMO_BUTTON_CLASS;
        getDataErrorNotification        = GET_DATA_ERROR_NOTIFICATION;
        editProductPromoButton          = $(EDIT_PRODUCT_PROMO_BUTTON_CLASS);
        editProductPromoButtonUpdate    = $(editProductPromoButtonUpdate).parent().parent().parent().children();
    }

    var initEventListener = () => {
        editProductPromoButton.on(clickEventListenerIdentifier, function(){
            getProductPromoData($(this).attr(productPromoIdAtrribute));
        });
    }

    var getProductPromoData = (productPromoIdAttribute) => {
        var productControllerUrl = BaseUrl + productPromoPostUrl+productPromoIdAttribute;
        $.get(productControllerUrl, function(data){
            if(data){
                onSuccessGetProductPromoData(data);
            } else {
                onErrorGetProductPromoData(getDataErrorNotification);
            }
        });
    }

    var onSuccessGetProductPromoData = (data) => {
        $(productPromoIdForm).val(data.productId);
        $(productPromoStatus).val(data.productPromoStatus);
        $(productPromoDescForm).val(data.productPromoDescription);
        $(productPromoButtonClass).val(productPromoButtonUpdate);
        $(productPromoButtonClass).addClass(productPromoButtonAddClass);
    }

    var onErrorGetProductPromoData = (getDataErrorNotification) =>{
        alert(getDataErrorNotification);
    }

    return {
        init: init
    }
})();

var deleteProductPromo = (function(){
    
    var deleteProductPromoButton, 
    deleteProductPromoButtonUpdate,
    productPromoNameAttribute,
    productPromoIdAttribute;

    const DELETE_PRODUCT_PROMO_BUTTON_CLASS     = ".deleteProductPromo",
    PRODUCT_PROMO_ID_ATTRIBUTE                  = "productPromoId",
    PRODUCT_PROMO_NAME_ATTRIBUTE                = "productPromoName",
    DELETE_DATA_SUCCESS_NOTIFICATION            = "Data Delete Succeed.",
    PRODUCT_PROMO_DELETE_URL                    = "/product/delete_product_promo/",
    DELETE_DATA_ERROR_NOTIFICATION              = "Sorry, The data cannot be deleted for a moment.",
    CLICK_EVENT_LISTENER_IDENTIFIER             = "click";

    var init = () => {
        initDom();
        initEventListener();
    }

    var initDom = () => {            
        clickEventListenerIdentifier    = CLICK_EVENT_LISTENER_IDENTIFIER;
        productPromoIdAttribute         = PRODUCT_PROMO_ID_ATTRIBUTE;
        productPromoDeleteUrl           = PRODUCT_PROMO_DELETE_URL;
        deleteDataSuccessNotification   = DELETE_DATA_SUCCESS_NOTIFICATION;
        deleteDataErrorNotification     = DELETE_DATA_ERROR_NOTIFICATION;
        deleteProductPromoButton        = $(DELETE_PRODUCT_PROMO_BUTTON_CLASS);
        deleteProductPromoButtonUpdate  = $(deleteProductPromoButton).parent().parent();
        productPromoNameAttribute       = $(deleteProductPromoButton).attr(PRODUCT_PROMO_NAME_ATTRIBUTE);
    }

    var initEventListener = () => {
        deleteProductPromoButton.on(clickEventListenerIdentifier, function(){
            deleteProductPromoData($(this).attr(productPromoIdAttribute));
        });
    }

    var deleteProductPromoData = (productPromoIdAttribute) => {
        var productControllerUrl = BaseUrl + productPromoDeleteUrl+productPromoIdAttribute;
        $.get(productControllerUrl, function(data){
            if(data){
                onSuccessDeleteProductPromoData(data);
            } else {
                onErrorDeleteProductPromoData(deleteDataErrorNotification);
            }
        });
    }

    var onSuccessDeleteProductPromoData = (data) => {
        alert(deleteDataSuccessNotification);
    }

    var onErrorDeleteProductPromoData = (deleteDataErrorNotification) => {
        alert(deleteDataErrorNotification);
    }

    return {
        init: init
    }
})();