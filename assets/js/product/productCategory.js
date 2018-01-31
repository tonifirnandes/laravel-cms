var editProductCategory = (function(){
        
    var editProductCategoryButton, 
    editProductCategoryButtonUpdate,
    productCategoryButtonUpdate,
    productCategoryIdAttribute;

    const EDIT_PRODUCT_CATEGORY_BUTTON_CLASS    = ".editProductCategory",
    PRODUCT_CATEGORY_DESCRIPTION_FORM           = "#ProductCategoryDesc",
    PRODUCT_CATEGORY_BUTTON_CLASS               = ".productCategoryButton",
    PRODUCT_CATEGORY_UPDATE_BUTTON_CLASS        = ".productCategoryUpdate",
    PRODUCT_CATEGORY_ID_ATTRIBUTE               = "productCategoryId",
    PRODUCT_CATEGORY_BUTTON_UPDATE              = "Update",
    PRODUCT_CATEGORY_BUTTON_ADD_CLASS           = "updateProductCategory",
    PRODUCT_CATEGORY_BUTTON_UPDATE_CLASS        = "updateCategory",
    PRODUCT_CATEGORY_POST_URL                   = "/product/show_form_product_category/",
    GET_DATA_ERROR_NOTIFICATION                 = "Sorry, The data cannot be loaded for a moment.",
    CLICK_EVENT_LISTENER_IDENTIFIER             = "click";

    var init = () => {
        initDom();
        initEventListener();
    }

    var initDom = () => {            
        clickEventListenerIdentifier        = CLICK_EVENT_LISTENER_IDENTIFIER;
        productCategoryDescriptionForm      = PRODUCT_CATEGORY_DESCRIPTION_FORM;
        productCategoryIdAttribute          = PRODUCT_CATEGORY_ID_ATTRIBUTE;
        productCategoryButtonClass          = PRODUCT_CATEGORY_BUTTON_CLASS;
        productCategoryButtonUpdate         = PRODUCT_CATEGORY_BUTTON_UPDATE;
        productCategoryButtonAddClass       = PRODUCT_CATEGORY_BUTTON_ADD_CLASS;
        productCategoryButtonUpdateClass    = PRODUCT_CATEGORY_BUTTON_UPDATE_CLASS;
        productCategoryPostUrl              = PRODUCT_CATEGORY_POST_URL;
        getDataErrorNotification            = GET_DATA_ERROR_NOTIFICATION;
        editProductCategoryButton           = $(EDIT_PRODUCT_CATEGORY_BUTTON_CLASS);
        editProductCategoryButtonUpdate     = $(editProductCategoryButton).parent().parent().parent().children();
        productCategoryAttributeId          = $(editProductCategoryButton).attr(PRODUCT_CATEGORY_ID_ATTRIBUTE);
    }

    var initEventListener = () => {
        editProductCategoryButton.on(clickEventListenerIdentifier, function(){
            getProductCategoryData($(this).attr(productCategoryIdAttribute));
        });
    }

    var getProductCategoryData = (productCategoryIdAttribute) => {
        var productControllerUrl = BaseUrl + productCategoryPostUrl+productCategoryIdAttribute;
        $.get(productControllerUrl, function(data){
            if(data){
                onSuccessGetProductCategoryData(data);
            } else {
                onErrorGetProductCategoryData(getDataErrorNotification);
            }
        });
    }

    var onSuccessGetProductCategoryData = (data) => {
        $(productCategoryDescriptionForm).val(data.productCategoryDescription);
        $(productCategoryButtonClass).val(productCategoryButtonUpdate);
        $(productCategoryButtonClass).addClass(productCategoryButtonAddClass);
    }

    var onErrorGetProductCategoryData = (getDataErrorNotification) => {
        alert(getDataErrorNotification);
    }

    return {
        init: init
    }
})();

var deleteProductCategory = (function(){
    
    var deleteProductCategoryButton, 
    deleteProductCategoryButtonUpdate,
    productCategoryNameAttribute,
    productCategoryIdAttribute;

    const DELETE_PRODUCT_CATEGORY_BUTTON_CLASS  = ".deleteProductCategory",
    PRODUCT_CATEGORY_ID_ATTRIBUTE               = "productCategoryId",
    PRODUCT_CATEGORY_NAME_ATTRIBUTE             = "productCategoryName",
    DELETE_DATA_SUCCESS_NOTIFICATION            = "Data Delete Succeed.",
    PRODUCT_CATEGORY_DELETE_URL                 = "/product/delete_product_category/",
    DELETE_DATA_ERROR_NOTIFICATION              = "Sorry, The data cannot be deleted for a moment.",
    CLICK_EVENT_LISTENER_IDENTIFIER             = "click";

    var init = () => {
        initDom();
        initEventListener();
    }

    var initDom = () => {            
        deleteProductCategoryButton         = $(DELETE_PRODUCT_CATEGORY_BUTTON_CLASS);
        deleteProductCategoryButtonUpdate   = $(deleteProductCategoryButton).parent().parent();
        productCategoryNameAttribute        = $(deleteProductCategoryButton).attr(PRODUCT_CATEGORY_NAME_ATTRIBUTE);
        productCategoryIdAttribute          = $(deleteProductCategoryButton).attr(PRODUCT_CATEGORY_ID_ATTRIBUTE);
    }

    var initEventListener = () => {
        deleteProductCategoryButton.on(CLICK_EVENT_LISTENER_IDENTIFIER, function(){
            deleteProductCategoryData($(this).attr(PRODUCT_CATEGORY_ID_ATTRIBUTE));
        });
    }

    var deleteProductCategoryData = (productCategoryIdAttribute) => {
        var productControllerUrl = BaseUrl + PRODUCT_CATEGORY_DELETE_URL+productCategoryIdAttribute+'/'+productCategoryNameAttribute;
        $.get(productControllerUrl, function(data){
            if(data){
                console.log(data);
                onSuccessDeleteProductCategoryData(data);
            } else {
                onErrorDeleteProductCategoryData(GET_DATA_ERROR_NOTIFICATION);
            }
        });
    }

    var onSuccessDeleteProductCategoryData = (data) => {
        alert(DELETE_DATA_SUCCESS_NOTIFICATION);
    }

    var onErrorDeleteProductCategoryData = (DELETE_DATA_ERROR_NOTIFICATION) => {
        alert(DELETE_DATA_ERROR_NOTIFICATION);
    }

    return {
        init: init
    }
})();