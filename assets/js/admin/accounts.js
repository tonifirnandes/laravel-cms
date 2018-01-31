var adminAccountsInitFunction = (function(){

    var editAccount = (function(){
        
        var editProductBrandButton, 
        editProductBrandButtonUpdate,
        productBrandButtonUpdate,
        productBrandIdAttribute;

        const EDIT_PRODUCT_BRAND_BUTTON_CLASS   = ".editProductBrand",
        PRODUCT_BRAND_DESCRIPTION_FORM          = "#ProductBrandDesc",
        PRODUCT_BRAND_BUTTON_CLASS              = ".productBrandButton",
        PRODUCT_BRAND_UPDATE_BUTTON_CLASS       = ".productBrandUpdate",
        PRODUCT_BRAND_ID_ATTRIBUTE              = "productBrandId",
        PRODUCT_BRAND_BUTTON_UPDATE             = "Update",
        PRODUCT_BRAND_BUTTON_ADD_CLASS          = "updateProductBrand",
        PRODUCT_BRAND_BUTTON_UPDATE_CLASS       = "updateBrand",
        PRODUCT_BRAND_POST_URL                  = "/product/show_form_product_brand/",
        GET_DATA_ERROR_NOTIFICATION             = "Sorry, The data cannot be loaded for a moment.",
        CLICK_EVENT_LISTENER_IDENTIFIER         = "click";

        var init = () => {
            initDom();
            initEventListener();
        }

        var initDom = () => {            
            editProductBrandButton          = $(EDIT_PRODUCT_BRAND_BUTTON_CLASS);
            editProductBrandButtonUpdate    = $(editProductBrandButton).parent().parent().parent().children();
            productBrandButtonUpdate        = $(editProductBrandButton).parent().parent();
            productBrandIdAttribute         = $(editProductBrandButton).attr(PRODUCT_BRAND_ID_ATTRIBUTE);
        }

        var initEventListener = () => {           
            editProductBrandButton.on(CLICK_EVENT_LISTENER_IDENTIFIER, function(){
                getProductBrandData($(this).attr(PRODUCT_BRAND_ID_ATTRIBUTE));
            });
        }

        var getProductBrandData = (productIdAttribute) => {
            var productControllerUrl = BaseUrl + PRODUCT_BRAND_POST_URL+productIdAttribute;
            $.get(productControllerUrl, function(data){
                if(data){
                    onSuccessGetProductBrandData(data);
                } else {
                    onErrorGetProductBrandData(GET_DATA_ERROR_NOTIFICATION);
                }
            });
        }

        var onSuccessGetProductBrandData = (data) => {
            $(PRODUCT_BRAND_DESCRIPTION_FORM).val(data.productBrandDescription);
            $(PRODUCT_BRAND_BUTTON_CLASS).val(PRODUCT_BRAND_BUTTON_UPDATE);
            $(PRODUCT_BRAND_BUTTON_CLASS).addClass(PRODUCT_BRAND_BUTTON_ADD_CLASS);
            $(productBrandButtonUpdate).removeClass(PRODUCT_BRAND_BUTTON_CLASS);
            $(productBrandButtonUpdate).addClass(PRODUCT_BRAND_BUTTON_UPDATE_CLASS);
        }

        var onErrorGetProductBrandData = (GET_DATA_ERROR_NOTIFICATION) => {
            alert(GET_DATA_ERROR_NOTIFICATION);
        }

        return {
            init: init
        }
    })();

    var showFormAccount = (function(){
        
        var showFormAccountButton;

        const SHOW_FORM_ACCOUNT_BUTTON_CLASS    = ".addAccount",
        ACCOUNT_CONTENT_CLASS                   = ".accountContent",
        ACCOUNT_FORM_CLASS                      = ".accountForm",
        ACCOUNT_MANAGE_CLASS                    = ".accountManage",
        ACCOUNT_TABLE_CLASS                     = ".accountTable",
        GET_DATA_ERROR_NOTIFICATION             = "Sorry, The data cannot be loaded for a moment.",
        CLICK_EVENT_LISTENER_IDENTIFIER         = "click";

        var init = function init(){
            initDom();
            initEventListener();
        }

        var initDom = function initDom(){            
            showFormAccountButton = $(SHOW_FORM_ACCOUNT_BUTTON_CLASS);
        }

        var initEventListener = function initEventListener(){           
            showFormAccountButton.on(CLICK_EVENT_LISTENER_IDENTIFIER, function(){
                $(ACCOUNT_FORM_CLASS).show();
                $(ACCOUNT_TABLE_CLASS).hide();
            });
        }

        return {
            init: init
        }
    })();

    var showManageAccount = (function(){
        
        var showManageAccountButton;

        const SHOW_MANAGE_ACCOUNT_BUTTON_CLASS  = ".manageAccount",
        ACCOUNT_CONTENT_CLASS                   = ".accountContent",
        ACCOUNT_MANAGE_CLASS                    = ".accountManage",
        ACCOUNT_FORM_CLASS                      = ".accountForm",
        ACCOUNT_TABLE_CLASS                     = ".accountTable",
        GET_DATA_ERROR_NOTIFICATION             = "Sorry, The data cannot be loaded for a moment.",
        CLICK_EVENT_LISTENER_IDENTIFIER         = "click";

        var init = function init(){
            initDom();
            initEventListener();
        }

        var initDom = function initDom(){            
            showManageAccountButton = $(SHOW_MANAGE_ACCOUNT_BUTTON_CLASS);
        }

        var initEventListener = function initEventListener(){           
            showManageAccountButton.on(CLICK_EVENT_LISTENER_IDENTIFIER, function(){
                $(ACCOUNT_MANAGE_CLASS).show();
                $(ACCOUNT_TABLE_CLASS).hide();
            });
        }

        return {
            init: init
        }
    })();

    var showTableAccount = (function(){
        
        var showTableAccountButton;

        const SHOW_TABLE_ACCOUNT_BUTTON_CLASS   = ".viewAccount",
        ACCOUNT_CONTENT_CLASS                   = ".accountContent",
        ACCOUNT_FORM_CLASS                      = ".accountForm",
        ACCOUNT_MANAGE_CLASS                    = ".accountManage",
        ACCOUNT_TABLE_CLASS                     = ".accountTable",
        GET_DATA_ERROR_NOTIFICATION             = "Sorry, The data cannot be loaded for a moment.",
        CLICK_EVENT_LISTENER_IDENTIFIER         = "click";

        var init = function init(){
            initDom();
            initEventListener();
        }

        var initDom = function initDom(){            
            showTableAccountButton = $(SHOW_TABLE_ACCOUNT_BUTTON_CLASS);
        }

        var initEventListener = function initEventListener(){           
            showTableAccountButton.on(CLICK_EVENT_LISTENER_IDENTIFIER, function(){
                $(ACCOUNT_TABLE_CLASS).show();
                $(ACCOUNT_FORM_CLASS).hide();
            });
        }

        return {
            init: init
        }
    })();

    var deleteAccount = (function(){
        
        var deleteProductBrandButton, 
        deleteProductBrandButtonUpdate,
        productBrandNameAttribute,
        productBrandIdAttribute;

        const DELETE_PRODUCT_BRAND_BUTTON_CLASS = ".deleteProductBrand",
        PRODUCT_BRAND_ID_ATTRIBUTE              = "productBrandId",
        PRODUCT_BRAND_NAME_ATTRIBUTE            = "productBrandName",
        DELETE_DATA_SUCCESS_NOTIFICATION        = "Data Delete Succeed.",
        PRODUCT_BRAND_DELETE_URL                =  "/product/delete_product_brand/",
        DELETE_DATA_ERROR_NOTIFICATION          = "Sorry, The data cannot be deleted for a moment.",
        CLICK_EVENT_LISTENER_IDENTIFIER         = "click";

        var init = () => {
            initDom();
            initEventListener();
        }

        var initDom = () => {            
            deleteProductBrandButton        = $(DELETE_PRODUCT_BRAND_BUTTON_CLASS);
            deleteProductBrandButtonUpdate  = $(deleteProductBrandButton).parent().parent();
            productBrandNameAttribute       = $(deleteProductBrandButton).attr(PRODUCT_BRAND_NAME_ATTRIBUTE);
            productBrandIdAttribute         = $(deleteProductBrandButton).attr(PRODUCT_BRAND_ID_ATTRIBUTE);
        }

        var initEventListener = () => {
            deleteProductBrandButton.on(CLICK_EVENT_LISTENER_IDENTIFIER, function(){
                deleteProductBrandData($(this).attr(PRODUCT_BRAND_ID_ATTRIBUTE));
            });
        }

        var deleteProductBrandData = (productBrandIdAttribute) => {
            var productControllerUrl = BaseUrl + PRODUCT_BRAND_DELETE_URL+productBrandIdAttribute+'/'+productBrandNameAttribute;
            $.get(productControllerUrl, function(data){
                if(data){
                    console.log(data);
                    onSuccessDeleteProductBrandData(data);
                } else {
                    onErrorDeleteProductBrandData(GET_DATA_ERROR_NOTIFICATION);
                }
            });
        }

        var onSuccessDeleteProductBrandData = (data) => {
            alert(DELETE_DATA_SUCCESS_NOTIFICATION);
        }

        var onErrorDeleteProductBrandData = (DELETE_DATA_ERROR_NOTIFICATION) => {
            alert(DELETE_DATA_ERROR_NOTIFICATION);
        }

        return {
            init: init
        }
    })();

    var init = function init(){
        editAccount.init();
        deleteAccount.init();
        showFormAccount.init();
        showManageAccount.init();
        showTableAccount.init();
    }

    return {
        init: init
    }
    
})();