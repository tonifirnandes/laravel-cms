var editProductBrandCategory = (function() {
        
    var editProductBrandCategoryButton, 
    editProductBrandCategoryButtonUpdate,
    productBrandCategoryButtonUpdate,
    productBrandCategoryIdAttribute;

    const EDIT_PRODUCT_BRAND_CATEGORY_BUTTON_CLASS  = ".editProductBrandCategory",
    PRODUCT_CATEGORY_BRAND_FORM                     = "#ProductCategoryBrand",
    PRODUCT_BRAND_CATEGORY_FORM                     = "#ProductBrandCategory",
    PRODUCT_BRAND_CATEGORY_BUTTON_CLASS             = ".productBrandCategoryButton",
    PRODUCT_BRAND_CATEGORY_ID_ATTRIBUTE             = "productBrandCategoryId",
    PRODUCT_BRAND_CATEGORY_BUTTON_UPDATE            = "Update",
    PRODUCT_BRAND_CATEGORY_BUTTON_ADD_CLASS         = "updateProductBrandCategory",
    PRODUCT_BRAND_CATEGORY_BUTTON_UPDATE_CLASS      = "updateBrandCategory",
    PRODUCT_BRAND_CATEGORY_POST_URL                 = "/product/show_form_product_brand_category/",
    GET_DATA_ERROR_NOTIFICATION                     = "Sorry, The data cannot be loaded for a moment.",
    CLICK_EVENT_LISTENER_IDENTIFIER                 = "click";

    function init() {
        initDom();
        initEventListener();
    }

    var initDom = () => {            
        clickEventListenerIdentifier            = CLICK_EVENT_LISTENER_IDENTIFIER;
        productCategoryBrandForm                = PRODUCT_CATEGORY_BRAND_FORM;
        productBrandCategoryForm                = PRODUCT_BRAND_CATEGORY_FORM;
        productBrandCategoryButtonUpdate        = PRODUCT_BRAND_CATEGORY_BUTTON_UPDATE;
        productBrandCategoryButtonClass         = PRODUCT_BRAND_CATEGORY_BUTTON_CLASS;
        productBrandCategoryButtonAddClass      = PRODUCT_BRAND_CATEGORY_BUTTON_ADD_CLASS;
        productBrandCategoryPostUrl             = PRODUCT_BRAND_CATEGORY_POST_URL;
        productBrandCategoryIdAttribute         = PRODUCT_BRAND_CATEGORY_ID_ATTRIBUTE;
        getDataErrorNotification                = GET_DATA_ERROR_NOTIFICATION;
        editProductBrandCategoryButton          = $(EDIT_PRODUCT_BRAND_CATEGORY_BUTTON_CLASS);
        editProductBrandCategoryButtonUpdate    = $(editProductBrandCategoryButtonUpdate).parent().parent().parent().children();
        productBrandCategoryUpdateButton        = $(editProductBrandCategoryButtonUpdate).parent().parent();
        productBrandCategoryAttributeId         = $(editProductBrandCategoryButtonUpdate).attr(PRODUCT_BRAND_CATEGORY_ID_ATTRIBUTE);
    }


    var initEventListener = () => {
        editProductBrandCategoryButton.on(clickEventListenerIdentifier, function(){
            getProductBrandCategoryData($(this).attr(productBrandCategoryIdAttribute));
        });
        
    }

    var getProductBrandCategoryData = (productBrandCategoryIdAttribute) => {
        var productControllerUrl = BaseUrl + productBrandCategoryPostUrl+productBrandCategoryIdAttribute;
        $.get(productControllerUrl, function(data){
            if(data){
                onSuccessGetProductBrandCategoryData(data);
            } else {
                onErrorGetProductBrandCategoryData(getDataErrorNotification);
            }
        });
    }

    var onSuccessGetProductBrandCategoryData = (data) => {
        $(productCategoryBrandForm).val(data.productCategoryId);
        $(productBrandCategoryForm).val(data.productBrandId);
        $(productBrandCategoryButtonClass).val(productBrandCategoryButtonUpdate);
        $(productBrandCategoryButtonClass).addClass(productBrandCategoryButtonAddClass);
    }

    var onErrorGetProductBrandCategoryData = (getDataErrorNotification) => {
        alert(getDataErrorNotification);
    }

    return {
        init: init
    }
})();

var deleteProductBrandCategory = (function(){
    
    var deleteProductBrandCategoryButton, 
    deleteProductBrandCategoryButtonUpdate,
    productBrandCategoryNameAttribute,
    productBrandCategoryIdAttribute;

    const DELETE_PRODUCT_BRAND_CATEGORY_BUTTON_CLASS    = ".deleteProductBrandCategory",
    PRODUCT_BRAND_CATEGORY_ID_ATTRIBUTE                 = "productBrandCategoryId",
    PRODUCT_BRAND_CATEGORY_NAME_ATTRIBUTE               = "productBrandCategoryName",
    DELETE_DATA_SUCCESS_NOTIFICATION                    = "Data Delete Succeed.",
    PRODUCT_BRAND_CATEGORY_DELETE_URL                   = "/product/delete_product_brand_category/",
    DELETE_DATA_ERROR_NOTIFICATION                      = "Sorry, The data cannot be deleted for a moment.",
    CLICK_EVENT_LISTENER_IDENTIFIER                     = "click";

    function init() {
        initDom();
        initEventListener();
    }

    var initDom = () => {            
        clickEventListenerIdentifier            = CLICK_EVENT_LISTENER_IDENTIFIER;
        productBrandCategoryIdAttribute         = PRODUCT_BRAND_CATEGORY_ID_ATTRIBUTE;
        productBrandCategoryDeleteUrl           = PRODUCT_BRAND_CATEGORY_DELETE_URL;
        deleteDataSuccessNotification           = DELETE_DATA_SUCCESS_NOTIFICATION;
        deleteProductBrandCategoryButton        = $(DELETE_PRODUCT_BRAND_CATEGORY_BUTTON_CLASS);
        deleteProductBrandCategoryButtonUpdate  = $(deleteProductBrandCategoryButton).parent().parent();
        productBrandCategoryNameAttribute       = $(deleteProductBrandCategoryButton).attr(PRODUCT_BRAND_CATEGORY_NAME_ATTRIBUTE);
    }

    var initEventListener = () => {
        deleteProductBrandCategoryButton.on(clickEventListenerIdentifier, function(){
            deleteProductBrandCategoryData($(this).attr(productBrandCategoryIdAttribute));
        });
    }

    var deleteProductBrandCategoryData = (productBrandCategoryIdAttribute) =>{
        var productControllerUrl = BaseUrl + productBrandCategoryDeleteUrl+productBrandCategoryIdAttribute;
        $.get(productControllerUrl, function(data){
            if(data){
                onSuccessDeleteProductBrandCategoryData(data);
            } else {
                onErrorDeleteProductBrandCategoryData(deleteDataSuccessNotification);
            }
        });
    }

    var onSuccessDeleteProductBrandCategoryData = (data) => {
        alert(deleteDataSuccessNotification);
    }

    var onErrorDeleteProductBrandCategoryData =  (deleteDataSuccessNotification) => {
        alert(deleteDataSuccessNotification);
    }

    return {
        init: init
    }
})();