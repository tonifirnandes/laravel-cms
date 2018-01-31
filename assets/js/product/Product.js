
(function($){

    var productMenu = (function(){

        var productMenuList, 
        productSubMenuListViewId, 
        clickEventListenerIdentifier, 
        activeStyleIdentifier, 
        productSubMenuList;

        const ACTIVE_STYLE_IDENTIFIER = "active", 
        PRODUCT_SUB_MENU_LIST_VIEW_ID = ".child_menu li",
        CLICK_EVENT_LISTENER_IDENTIFIER = "click";
    
        var init = function (){
            initDom();
            initEventListener();
        }
    
        var initDom = function (){            
            clickEventListenerIdentifier = CLICK_EVENT_LISTENER_IDENTIFIER;
            activeStyleIdentifier = ACTIVE_STYLE_IDENTIFIER;
            productSubMenuList = $(PRODUCT_SUB_MENU_LIST_VIEW_ID);
            productMenuList = $(productSubMenuList).parent().children();
        }
    
        var initEventListener = function (){           
            productSubMenuList.on(clickEventListenerIdentifier, function(){
                highlightSubMenuList(this);
            });
        }
    
        var highlightSubMenuList = function (activeView){
            unHighlightSubMenuList(activeView);
            addActiveStyleOnView(activeView);
        }
    
        var addActiveStyleOnView = function (activeView){
            $(activeView).addClass(activeStyleIdentifier);
        }
    
        var unHighlightSubMenuList = function (activeView){            
            $(productMenuList).removeClass(activeStyleIdentifier);
        }
        
        return {
            init: init
        }
    })();

    productMenu.init(); 
 
})(jQuery);
    
var productInitFunction = (function(){

    var editProduct = (function(){
        
        var editProductButton, 
        editProductButtonUpdate,
        productButtonUpdate,
        productIdAttribute;

        const EDIT_PRODUCT_BUTTON_CLASS     = ".editProduct",
        PRODUCT_NAME_FORM                   = "#ProductName",
        PRODUCT_PART_NUMBER_FORM            = "#ProductPartNumber",
        PRODUCT_STOCK_FORM                  = "#ProductStock",
        PRODUCT_SPECIFICATION_FORM          = "#ProductSpec",
        PRODUCT_DESCRIPTION_FORM            = "#ProductDesc",
        PRODUCT_WEIGHT_FORM                 = "#ProductWeight",
        PRODUCT_DOWNLOAD_FORM               = "#ProductDownload",
        PRODUCT_BRAND_FORM                  = "#ProductBrand",
        PRODUCT_CATEGORY_FORM               = "#ProductCategory",
        PRODUCT_FORM_CLASS                  = ".productForm",
        PRODUCT_TABLE_CLASS                 = ".productTable",
        PRODUCT_BUTTON_CLASS                = ".productButton",
        PRODUCT_UPDATE_BUTTON_CLASS         = ".productUpdate",
        PRODUCT_ID_ATTRIBUTE                = "productId",
        PRODUCT_BUTTON_UPDATE               = "Update",
        PRODUCT_POST_URL                    = "/product/show_form_product/",
        GET_DATA_ERROR_NOTIFICATION         = "Sorry, The data cannot be loaded for a moment.",
        CLICK_EVENT_LISTENER_IDENTIFIER     = "click";

        var init = function init(){
            initDom();
            initEventListener();
        }

        var initDom = function initDom(){            
            editProductButton = $(EDIT_PRODUCT_BUTTON_CLASS);
            editProductButtonUpdate = $(editProductButton).parent().parent().parent().children();
            productButtonUpdate = $(editProductButton).parent().parent();
            productIdAttribute = $(editProductButton).attr(PRODUCT_ID_ATTRIBUTE);
        }

        var initEventListener = function initEventListener(){           
            editProductButton.on(CLICK_EVENT_LISTENER_IDENTIFIER, function(){
                getProductData($(this).attr(PRODUCT_ID_ATTRIBUTE));
            });
        }

        var getProductData = function getProductData(productIdAttribute){
            var productControllerUrl = BaseUrl +PRODUCT_POST_URL+productIdAttribute;
            $.get(productControllerUrl, function(data){
                if(data){
                    onSuccessGetProductData(data);
                } else {
                    onErrorGetProductData(GET_DATA_ERROR_NOTIFICATION);
                }
            });
        }

        var onSuccessGetProductData = function (data){
            $(PRODUCT_NAME_FORM).val(data.productName);
            $(PRODUCT_PART_NUMBER_FORM).val(data.productPartNumber);
            $(PRODUCT_STOCK_FORM).val(data.productStock);
            $(PRODUCT_SPECIFICATION_FORM).val(data.productSpesification);
            $(PRODUCT_DESCRIPTION_FORM).val(data.productDescription);
            $(PRODUCT_WEIGHT_FORM).val(data.productWeight);
            $(PRODUCT_DOWNLOAD_FORM).val(data.productDownloadLink);
            $(PRODUCT_BRAND_FORM).val(data.productBrandId);
            $(PRODUCT_CATEGORY_FORM).val(data.productCategoryId);
            $(PRODUCT_BUTTON_CLASS).val(PRODUCT_BUTTON_UPDATE);
            $(editProductButtonUpdate).removeClass(PRODUCT_BUTTON_UPDATE);
            $(productButtonUpdate).addClass(PRODUCT_BUTTON_UPDATE);
            $(PRODUCT_TABLE_CLASS).hide();
            $(PRODUCT_FORM_CLASS).show();
        }

        var onErrorGetProductData = function (GET_DATA_ERROR_NOTIFICATION){
            alert(GET_DATA_ERROR_NOTIFICATION);
        }

        return {
            init: init
        }
    })();

    var showFormProduct = (function(){
        
        var showFormProductButton;

        const SHOW_FORM_PRODUCT_BUTTON_CLASS    = ".addProduct",
        PRODUCT_CONTENT_CLASS                   = ".productContent",
        PRODUCT_FORM_CLASS                      = ".productForm",
        PRODUCT_TABLE_CLASS                     = ".productTable",
        GET_DATA_ERROR_NOTIFICATION             = "Sorry, The data cannot be loaded for a moment.",
        CLICK_EVENT_LISTENER_IDENTIFIER         = "click";

        var init = function init(){
            initDom();
            initEventListener();
        }

        var initDom = function initDom(){            
            showFormProductButton = $(SHOW_FORM_PRODUCT_BUTTON_CLASS);
        }

        var initEventListener = function initEventListener(){           
            showFormProductButton.on(CLICK_EVENT_LISTENER_IDENTIFIER, function(){
                $(PRODUCT_FORM_CLASS).show();
                $(PRODUCT_TABLE_CLASS).hide();
            });
        }

        return {
            init: init
        }
    })();

    var showTableProduct = (function(){
        
        var showTableProductButton;

        const SHOW_TABLE_PRODUCT_BUTTON_CLASS   = ".viewProduct",
        PRODUCT_CONTENT_CLASS                   = ".productContent",
        PRODUCT_FORM_CLASS                      = ".productForm",
        PRODUCT_TABLE_CLASS                     = ".productTable",
        GET_DATA_ERROR_NOTIFICATION             = "Sorry, The data cannot be loaded for a moment.",
        CLICK_EVENT_LISTENER_IDENTIFIER         = "click";

        var init = function init(){
            initDom();
            initEventListener();
        }

        var initDom = function initDom(){            
            showTableProductButton = $(SHOW_TABLE_PRODUCT_BUTTON_CLASS);
        }

        var initEventListener = function initEventListener(){           
            showTableProductButton.on(CLICK_EVENT_LISTENER_IDENTIFIER, function(){
                $(PRODUCT_TABLE_CLASS).show();
                $(PRODUCT_FORM_CLASS).hide();
            });
        }

        return {
            init: init
        }
    })();

    var deleteProduct = (function(){
        
        var deleteProductButton, 
        deleteProductButtonUpdate,
        productIdAttribute;

        const DELETE_PRODUCT_BUTTON_CLASS   = ".deleteProduct",
        PRODUCT_ID_ATTRIBUTE                = "productId",
        DELETE_DATA_SUCCESS_NOTIFICATION    = "Data Delete Succeed.",
        PRODUCT_DELETE_URL                  = "/product/delete_product/",
        DELETE_DATA_ERROR_NOTIFICATION      = "Sorry, The data cannot be deleted for a moment.",
        CLICK_EVENT_LISTENER_IDENTIFIER     = "click";

        var init = function init(){
            initDom();
            initEventListener();
        }

        var initDom = function initDom(){            
            deleteProductButton = $(DELETE_PRODUCT_BUTTON_CLASS);
            deleteProductButtonUpdate = $(deleteProductButton).parent().parent();
            productIdAttribute = $(deleteProductButton).attr(PRODUCT_ID_ATTRIBUTE);
        }

        var initEventListener = function (){
            deleteProductButton.on(CLICK_EVENT_LISTENER_IDENTIFIER, function(){
                deleteProductData($(this).attr(PRODUCT_ID_ATTRIBUTE));
            });
        }

        var deleteProductData = function (productIdAttribute){
            var productControllerUrl = BaseUrl + PRODUCT_DELETE_URL+productIdAttribute;
            $.get(productControllerUrl, function(data){
                if(data){
                    console.log(data);
                    onSuccessDeleteProductData(data);
                } else {
                    onErrorDeleteProductData(GET_DATA_ERROR_NOTIFICATION);
                }
            });
        }

        var onSuccessDeleteProductData = function (data){
            alert(DELETE_DATA_SUCCESS_NOTIFICATION);
        }

        var onErrorDeleteProductData = function (DELETE_DATA_ERROR_NOTIFICATION){
            alert(DELETE_DATA_ERROR_NOTIFICATION);
        }

        return {
            init: init
        }
    })();

    var init = function init(){
        editProduct.init();
        deleteProduct.init();
        showFormProduct.init();
        showTableProduct.init();
    }

    return {
        init: init
    }
    
})();