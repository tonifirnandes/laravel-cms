
$(function(){

    // var dataTable = (function(){
        
    //     var productShowTable,
    //     productMenuButton;

    //     const PRODUCT_TABLE_CLASS = "table.table",
    //     PRODUCT_MENU_IDENTIFICATOR = "#productMenu",
    //     CLICK_EVENT_LISTENER_IDENTIFIER = "click",
    //     GET_DATA_ERROR_NOTIFICATION = "Sorry, The data cannot be loaded for a moment.",
    //     PRODUCT_POST_URL = "/product/product",
    //     GET_DATA_SUCCEED_NOTIFICATION = "Succeed.";
    
    //     var init = function init(){
    //         initDom();
    //         initEventListener();
    //     }

    //     var initDom = function initDom(){    
    //         productShowTable = $(PRODUCT_TABLE_CLASS);        
    //         productMenuButton = $(PRODUCT_MENU_IDENTIFICATOR);

    //         $(productShowTable).DataTable();
            
    //     }
    
    //     var initEventListener = function initEventListener(){           
    //         productMenuButton.on(CLICK_EVENT_LISTENER_IDENTIFIER, function(){
    //             getProductData();
    //         });
    //     }
            
    //     var getProductData = function getProductData(){
    //             var productControllerUrl = BaseUrl + PRODUCT_POST_URL;
    //             $.get(productControllerUrl, function(data){
    //                 if(data){
    //                     alert(GET_DATA_SUCCEED_NOTIFICATION);
    //                 } else {
    //                     alert(GET_DATA_ERROR_NOTIFICATION);
    //                 }
    //             });
    //     }

    //     return {
    //         init: init
    //     }
    // })();

    var productMenu = (function(){

        var productMenuList, 
        productSubMenuList;

        const ACTIVE_STYLE_IDENTIFIER = "active", 
        PRODUCT_SUB_MENU_LIST_VIEW_ID = ".child_menu li",
        CLICK_EVENT_LISTENER_IDENTIFIER = "click";
    
        var init = function (){
            initDom();
            initEventListener();
        }
    
        //cached dom
        var initDom = function (){            
            productSubMenuList = $(PRODUCT_SUB_MENU_LIST_VIEW_ID);
            productMenuList = $(productSubMenuList).parent().children();
        }
    
        var initEventListener = function (){           
            productSubMenuList.on(CLICK_EVENT_LISTENER_IDENTIFIER, function(){
                highlightSubMenuList(this);
            });
        }
    
        var highlightSubMenuList = function (activeView){
            unHighlightSubMenuList(activeView);
            addActiveStyleOnView(activeView);
        }
    
        var addActiveStyleOnView = function (activeView){
            $(activeView).addClass(ACTIVE_STYLE_IDENTIFIER);
        }
    
        var unHighlightSubMenuList = function (activeView){            
            $(productMenuList).removeClass(ACTIVE_STYLE_IDENTIFIER);
        }

        //public function
        return {
            init: init
        }
    })();
    
    var editProduct = (function(){
        
        var editProductButton, 
        editProductButtonUpdate,
        productButtonUpdate,
        productIdAttribute;

        const EDIT_PRODUCT_BUTTON_CLASS = ".editProduct",
        PRODUCT_NAME_FORM = "#ProductName",
        PRODUCT_PART_NUMBER_FORM = "#ProductPartNumber",
        PRODUCT_STOCK_FORM = "#ProductStock",
        PRODUCT_SPECIFICATION_FORM = "#ProductSpec",
        PRODUCT_DESCRIPTION_FORM = "#ProductDesc",
        PRODUCT_WEIGHT_FORM = "#ProductWeight",
        PRODUCT_DOWNLOAD_FORM = "#ProductDownload",
        PRODUCT_BRAND_FORM = "#ProductBrand",
        PRODUCT_CATEGORY_FORM = "#ProductCategory",
        PRODUCT_BUTTON_CLASS = ".productButton",
        PRODUCT_UPDATE_BUTTON_CLASS = ".productUpdate",
        PRODUCT_ID_ATTRIBUTE = "productId",
        PRODUCT_BUTTON_UPDATE = "Update",
        PRODUCT_POST_URL =  "/product/show_form_product/",
        GET_DATA_ERROR_NOTIFICATION = "Sorry, The data cannot be loaded for a moment.",
        CLICK_EVENT_LISTENER_IDENTIFIER = "click";
    
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
        }
    
        var onErrorGetProductData = function (GET_DATA_ERROR_NOTIFICATION){
            alert(GET_DATA_ERROR_NOTIFICATION);
        }

        return {
            init: init
        }
    })();

    var editProductBrand = (function(){
        
        var editProductBrandButton, 
        editProductBrandButtonUpdate,
        productBrandButtonUpdate,
        productBrandIdAttribute;

        const EDIT_PRODUCT_BRAND_BUTTON_CLASS = ".editProductBrand",
        PRODUCT_BRAND_DESCRIPTION_FORM = "#ProductBrandDesc",
        PRODUCT_BRAND_BUTTON_CLASS = ".productBrandButton",
        PRODUCT_BRAND_UPDATE_BUTTON_CLASS = ".productBrandUpdate",
        PRODUCT_BRAND_ID_ATTRIBUTE = "productBrandId",
        PRODUCT_BRAND_BUTTON_UPDATE = "Update",
        PRODUCT_BRAND_BUTTON_ADD_CLASS = "updateProductBrand",
        PRODUCT_BRAND_BUTTON_UPDATE_CLASS = "updateBrand",
        PRODUCT_BRAND_POST_URL =  "/product/show_form_product_brand/",
        GET_DATA_ERROR_NOTIFICATION = "Sorry, The data cannot be loaded for a moment.",
        CLICK_EVENT_LISTENER_IDENTIFIER = "click";
    
        var init = function init(){
            initDom();
            initEventListener();
        }
    
        var initDom = function (){            
            editProductBrandButton = $(EDIT_PRODUCT_BRAND_BUTTON_CLASS);
            editProductBrandButtonUpdate = $(editProductBrandButton).parent().parent().parent().children();
            productBrandButtonUpdate = $(editProductBrandButton).parent().parent();
            productBrandIdAttribute = $(editProductBrandButton).attr(PRODUCT_BRAND_ID_ATTRIBUTE);
        }
    
        var initEventListener = function (){           
            editProductBrandButton.on(CLICK_EVENT_LISTENER_IDENTIFIER, function(){
                getProductBrandData($(this).attr(PRODUCT_BRAND_ID_ATTRIBUTE));
            });
        }

        var getProductBrandData = function (productIdAttribute){
            var productControllerUrl = BaseUrl + PRODUCT_BRAND_POST_URL+productIdAttribute;
            $.get(productControllerUrl, function(data){
                if(data){
                    onSuccessGetProductBrandData(data);
                } else {
                    onErrorGetProductBrandData(GET_DATA_ERROR_NOTIFICATION);
                }
            });
        }
    
        var onSuccessGetProductBrandData = function (data){
            $(PRODUCT_BRAND_DESCRIPTION_FORM).val(data.productBrandDescription);
            $(PRODUCT_BRAND_BUTTON_CLASS).val(PRODUCT_BRAND_BUTTON_UPDATE);
            $(PRODUCT_BRAND_BUTTON_CLASS).addClass(PRODUCT_BRAND_BUTTON_ADD_CLASS);
            $(productBrandButtonUpdate).removeClass(PRODUCT_BRAND_BUTTON_CLASS);
            $(productBrandButtonUpdate).addClass(PRODUCT_BRAND_BUTTON_UPDATE_CLASS);
        }
    
        var onErrorGetProductBrandData = function (GET_DATA_ERROR_NOTIFICATION){
            alert(GET_DATA_ERROR_NOTIFICATION);
        }

        return {
            init: init
        }
    })();

    var editProductCategory = (function(){
        
        var editProductCategoryButton, 
        editProductCategoryButtonUpdate,
        productCategoryButtonUpdate,
        productCategoryIdAttribute;

        const EDIT_PRODUCT_CATEGORY_BUTTON_CLASS = ".editProductCategory",
        PRODUCT_CATEGORY_DESCRIPTION_FORM = "#ProductCategoryDesc",
        PRODUCT_CATEGORY_BUTTON_CLASS = ".productCategoryButton",
        PRODUCT_CATEGORY_UPDATE_BUTTON_CLASS = ".productCategoryUpdate",
        PRODUCT_CATEGORY_ID_ATTRIBUTE = "productCategoryId",
        PRODUCT_CATEGORY_BUTTON_UPDATE = "Update",
        PRODUCT_CATEGORY_BUTTON_ADD_CLASS = "updateProductCategory",
        PRODUCT_CATEGORY_BUTTON_UPDATE_CLASS = "updateCategory",
        PRODUCT_CATEGORY_POST_URL =  "/product/show_form_product_category/",
        GET_DATA_ERROR_NOTIFICATION = "Sorry, The data cannot be loaded for a moment.",
        CLICK_EVENT_LISTENER_IDENTIFIER = "click";
    
        var init = function init(){
            initDom();
            initEventListener();
        }
    
        var initDom = function (){            
            editProductCategoryButton = $(EDIT_PRODUCT_CATEGORY_BUTTON_CLASS);
            editProductCategoryButtonUpdate = $(editProductCategoryButton).parent().parent().parent().children();
            productCategoryButtonUpdate = $(editProductCategoryButton).parent().parent();
            productCategoryIdAttribute = $(editProductCategoryButton).attr(PRODUCT_CATEGORY_ID_ATTRIBUTE);
        }
    
        var initEventListener = function (){
            editProductCategoryButton.on(CLICK_EVENT_LISTENER_IDENTIFIER, function(){
                getProductCategoryData($(this).attr(PRODUCT_CATEGORY_ID_ATTRIBUTE));
            });
        }

        var getProductCategoryData = function (productCategoryIdAttribute){
            var productControllerUrl = BaseUrl + PRODUCT_CATEGORY_POST_URL+productCategoryIdAttribute;
            $.get(productControllerUrl, function(data){
                if(data){
                    console.log(data);
                    onSuccessGetProductCategoryData(data);
                } else {
                    onErrorGetProductCategoryData(GET_DATA_ERROR_NOTIFICATION);
                }
            });
        }
    
        var onSuccessGetProductCategoryData = function (data){
            $(PRODUCT_CATEGORY_DESCRIPTION_FORM).val(data.productCategoryDescription);
            $(PRODUCT_CATEGORY_BUTTON_CLASS).val(PRODUCT_CATEGORY_BUTTON_UPDATE);
            $(PRODUCT_CATEGORY_BUTTON_CLASS).addClass(PRODUCT_CATEGORY_BUTTON_ADD_CLASS);
            $(productCategoryButtonUpdate).removeClass(PRODUCT_CATEGORY_BUTTON_UPDATE_CLASS);
            $(productCategoryButtonUpdate).addClass(PRODUCT_CATEGORY_BUTTON_UPDATE_CLASS);
        }
    
        var onErrorGetProductCategoryData = function (GET_DATA_ERROR_NOTIFICATION){
            alert(GET_DATA_ERROR_NOTIFICATION);
        }

        return {
            init: init
        }
    })();

    var editProductBrandCategory = (function(){
        
        var editProductBrandCategoryButton, 
        editProductBrandCategoryButtonUpdate,
        productBrandCategoryButtonUpdate,
        productBrandCategoryIdAttribute;

        const EDIT_PRODUCT_BRAND_CATEGORY_BUTTON_CLASS = ".editProductBrandCategory",
        PRODUCT_CATEGORY_BRAND_FORM = "#ProductCategoryBrand",
        PRODUCT_BRAND_CATEGORY_FORM = "#ProductBrandCategory",
        PRODUCT_BRAND_CATEGORY_BUTTON_CLASS = ".productBrandCategoryButton",
        PRODUCT_BRAND_CATEGORY_ID_ATTRIBUTE = "productBrandCategoryId",
        PRODUCT_BRAND_CATEGORY_BUTTON_UPDATE = "Update",
        PRODUCT_BRAND_CATEGORY_BUTTON_ADD_CLASS = "updateProductBrandCategory",
        PRODUCT_BRAND_CATEGORY_BUTTON_UPDATE_CLASS = "updateBrandCategory",
        PRODUCT_BRAND_CATEGORY_POST_URL =  "/product/show_form_product_brand_category/",
        GET_DATA_ERROR_NOTIFICATION = "Sorry, The data cannot be loaded for a moment.",
        CLICK_EVENT_LISTENER_IDENTIFIER = "click";
    
        var init = function init(){
            initDom();
            initEventListener();
        }
    
        var initDom = function (){            
            editProductBrandCategoryButton = $(EDIT_PRODUCT_BRAND_CATEGORY_BUTTON_CLASS);
            editProductBrandCategoryButtonUpdate = $(editProductBrandCategoryButtonUpdate).parent().parent().parent().children();
            productBrandCategoryButtonUpdate = $(editProductBrandCategoryButtonUpdate).parent().parent();
            productBrandCategoryIdAttribute = $(editProductBrandCategoryButtonUpdate).attr(PRODUCT_BRAND_CATEGORY_ID_ATTRIBUTE);
        }
    
        var initEventListener = function (){
            editProductBrandCategoryButton.on(CLICK_EVENT_LISTENER_IDENTIFIER, function(){
                getProductBrandCategoryData($(this).attr(PRODUCT_BRAND_CATEGORY_ID_ATTRIBUTE));
            });
        }

        var getProductBrandCategoryData = function (productBrandCategoryIdAttribute){
            var productControllerUrl = BaseUrl + PRODUCT_BRAND_CATEGORY_POST_URL+productBrandCategoryIdAttribute;
            $.get(productControllerUrl, function(data){
                if(data){
                    console.log(data);
                    onSuccessGetProductBrandCategoryData(data);
                } else {
                    onErrorGetProductBrandCategoryData(GET_DATA_ERROR_NOTIFICATION);
                }
            });
        }
    
        var onSuccessGetProductBrandCategoryData = function (data){
            $(PRODUCT_CATEGORY_BRAND_FORM).val(data.productCategoryId);
            $(PRODUCT_BRAND_CATEGORY_FORM).val(data.productBrandId);
            $(PRODUCT_BRAND_CATEGORY_BUTTON_CLASS).val(PRODUCT_BRAND_CATEGORY_BUTTON_UPDATE);
            $(PRODUCT_BRAND_CATEGORY_BUTTON_CLASS).addClass(PRODUCT_BRAND_CATEGORY_BUTTON_ADD_CLASS);
            $(productCategoryButtonUpdate).removeClass(PRODUCT_BRAND_CATEGORY_BUTTON_UPDATE_CLASS);
            $(productCategoryButtonUpdate).addClass(PRODUCT_BRAND_CATEGORY_BUTTON_UPDATE_CLASS);
        }
    
        var onErrorGetProductBrandCategoryData = function (GET_DATA_ERROR_NOTIFICATION){
            alert(GET_DATA_ERROR_NOTIFICATION);
        }

        return {
            init: init
        }
    })();

    var editProductPrice = (function(){
        
        var editProductPriceButton, 
        editProductPriceButtonUpdate,
        productPriceButtonUpdate,
        productPriceIdAttribute;

        const EDIT_PRODUCT_PRICE_BUTTON_CLASS = ".editProductPrice",
        PRODUCT_PRICE_FORM = "#ProductPrice",
        PRODUCT_PRICE_DESC_FORM = "#ProductPriceDesc",
        PRODUCT_PRICE_STATUS = "#ProductPriceStatus",
        PRODUCT_PRICE_ID_FORM = "#ProductIdInPrice",
        PRODUCT_PRICE_BUTTON_CLASS = ".productPriceButton",
        PRODUCT_PRICE_ID_ATTRIBUTE = "productPriceId",
        PRODUCT_PRICE_BUTTON_UPDATE = "Update",
        PRODUCT_PRICE_BUTTON_ADD_CLASS = "updateProductPrice",
        PRODUCT_PRICE_BUTTON_UPDATE_CLASS = "updatePrice",
        PRODUCT_PRICE_POST_URL =  "/product/show_form_product_price/",
        GET_DATA_ERROR_NOTIFICATION = "Sorry, The data cannot be loaded for a moment.",
        CLICK_EVENT_LISTENER_IDENTIFIER = "click";
    
        var init = function init(){
            initDom();
            initEventListener();
        }
    
        var initDom = function (){            
            editProductPriceButton = $(EDIT_PRODUCT_PRICE_BUTTON_CLASS);
            editProductPriceButtonUpdate = $(editProductPriceButtonUpdate).parent().parent().parent().children();
            productPriceButtonUpdate = $(editProductPriceButtonUpdate).parent().parent();
            productPriceIdAttribute = $(editProductPriceButtonUpdate).attr(PRODUCT_PRICE_ID_ATTRIBUTE);
        }
    
        var initEventListener = function (){
            editProductPriceButton.on(CLICK_EVENT_LISTENER_IDENTIFIER, function(){
                getProductPriceData($(this).attr(PRODUCT_PRICE_ID_ATTRIBUTE));
            });
        }

        var getProductPriceData = function (productPriceIdAttribute){
            var productControllerUrl = BaseUrl + PRODUCT_PRICE_POST_URL+productPriceIdAttribute;
            $.get(productControllerUrl, function(data){
                if(data){
                    console.log(data);
                    onSuccessGetProductPriceData(data);
                } else {
                    onErrorGetProductPriceData(GET_DATA_ERROR_NOTIFICATION);
                }
            });
        }
    
        var onSuccessGetProductPriceData = function (data){
            $(PRODUCT_PRICE_FORM).val(data.productPrice);
            $(PRODUCT_PRICE_ID_FORM).val(data.productId);
            $(PRODUCT_PRICE_STATUS).val(data.productPriceStatus);
            $(PRODUCT_PRICE_DESC_FORM).val(data.productPriceDescription);
            $(PRODUCT_PRICE_BUTTON_CLASS).val(PRODUCT_PRICE_BUTTON_UPDATE);
            $(PRODUCT_PRICE_BUTTON_CLASS).addClass(PRODUCT_PRICE_BUTTON_ADD_CLASS);
            $(productPriceButtonUpdate).removeClass(PRODUCT_PRICE_BUTTON_UPDATE_CLASS);
            $(productPriceButtonUpdate).addClass(PRODUCT_PRICE_BUTTON_UPDATE_CLASS);
        }
    
        var onErrorGetProductPriceData = function (GET_DATA_ERROR_NOTIFICATION){
            alert(GET_DATA_ERROR_NOTIFICATION);
        }

        return {
            init: init
        }
    })();

    var editProductPromo = (function(){
        
        var editProductPromoButton, 
        editProductPromoButtonUpdate,
        productPromoButtonUpdate,
        productPromoIdAttribute;

        const EDIT_PRODUCT_PROMO_BUTTON_CLASS = ".editProductPromo",
        PRODUCT_PROMO_FORM = "#ProductPromo",
        PRODUCT_PROMO_DESC_FORM = "#PromoProductDesc",
        PRODUCT_PROMO_STATUS = "#ProductPromoStatus",
        PRODUCT_PROMO_ID_FORM = "#ProductIdInPrice",
        PRODUCT_PROMO_BUTTON_CLASS = ".productPromoButton",
        PRODUCT_PROMO_ID_ATTRIBUTE = "productPromoId",
        PRODUCT_PROMO_BUTTON_UPDATE = "Update",
        PRODUCT_PROMO_BUTTON_ADD_CLASS = "updateProductPromo",
        PRODUCT_PROMO_BUTTON_UPDATE_CLASS = "updatePromo",
        PRODUCT_PROMO_POST_URL =  "/product/show_form_product_promo/",
        GET_DATA_ERROR_NOTIFICATION = "Sorry, The data cannot be loaded for a moment.",
        CLICK_EVENT_LISTENER_IDENTIFIER = "click";
    
        var init = function init(){
            initDom();
            initEventListener();
        }
    
        var initDom = function (){            
            editProductPromoButton = $(EDIT_PRODUCT_PROMO_BUTTON_CLASS);
            editProductPromoButtonUpdate = $(editProductPromoButtonUpdate).parent().parent().parent().children();
            productPromoButtonUpdate = $(editProductPromoButtonUpdate).parent().parent();
            productPromoIdAttribute = $(editProductPromoButtonUpdate).attr(PRODUCT_PROMO_ID_ATTRIBUTE);
        }
    
        var initEventListener = function (){
            editProductPromoButton.on(CLICK_EVENT_LISTENER_IDENTIFIER, function(){
                getProductPromoData($(this).attr(PRODUCT_PROMO_ID_ATTRIBUTE));
            });
        }

        var getProductPromoData = function (productPromoIdAttribute){
            var productControllerUrl = BaseUrl + PRODUCT_PROMO_POST_URL+productPromoIdAttribute;
            $.get(productControllerUrl, function(data){
                if(data){
                    console.log(data);
                    onSuccessGetProductPromoData(data);
                } else {
                    onErrorGetProductPromoData(GET_DATA_ERROR_NOTIFICATION);
                }
            });
        }
    
        var onSuccessGetProductPromoData = function (data){
            $(PRODUCT_PROMO_ID_FORM).val(data.productId);
            $(PRODUCT_PROMO_STATUS).val(data.productPromoStatus);
            $(PRODUCT_PROMO_DESC_FORM).val(data.productPromoDescription);
            $(PRODUCT_PROMO_BUTTON_CLASS).val(PRODUCT_PROMO_BUTTON_UPDATE);
            $(PRODUCT_PROMO_BUTTON_CLASS).addClass(PRODUCT_PROMO_BUTTON_ADD_CLASS);
            $(productPromoButtonUpdate).removeClass(PRODUCT_PROMO_BUTTON_UPDATE_CLASS);
            $(productPromoButtonUpdate).addClass(PRODUCT_PROMO_BUTTON_UPDATE_CLASS);
        }
    
        var onErrorGetProductPromoData = function (GET_DATA_ERROR_NOTIFICATION){
            alert(GET_DATA_ERROR_NOTIFICATION);
        }

        return {
            init: init
        }
    })();

    var deleteProduct = (function(){
        
        var deleteProductButton, 
        deleteProductButtonUpdate,
        productIdAttribute;

        const DELETE_PRODUCT_BUTTON_CLASS = ".deleteProduct",
        PRODUCT_ID_ATTRIBUTE = "productId",
        DELETE_DATA_SUCCESS_NOTIFICATION = "Data Delete Succeed.",
        PRODUCT_DELETE_URL =  "/product/delete_product/",
        DELETE_DATA_ERROR_NOTIFICATION = "Sorry, The data cannot be deleted for a moment.",
        CLICK_EVENT_LISTENER_IDENTIFIER = "click";
    
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

    var deleteProductBrand = (function(){
        
        var deleteProductBrandButton, 
        deleteProductBrandButtonUpdate,
        productBrandNameAttribute,
        productBrandIdAttribute;

        const DELETE_PRODUCT_BRAND_BUTTON_CLASS = ".deleteProductBrand",
        PRODUCT_BRAND_ID_ATTRIBUTE = "productBrandId",
        PRODUCT_BRAND_NAME_ATTRIBUTE = "productBrandName",
        DELETE_DATA_SUCCESS_NOTIFICATION = "Data Delete Succeed.",
        PRODUCT_BRAND_DELETE_URL =  "/product/delete_product_brand/",
        DELETE_DATA_ERROR_NOTIFICATION = "Sorry, The data cannot be deleted for a moment.",
        CLICK_EVENT_LISTENER_IDENTIFIER = "click";
    
        var init = function init(){
            initDom();
            initEventListener();
        }
    
        var initDom = function initDom(){            
            deleteProductBrandButton = $(DELETE_PRODUCT_BRAND_BUTTON_CLASS);
            deleteProductBrandButtonUpdate = $(deleteProductBrandButton).parent().parent();
            productBrandNameAttribute = $(deleteProductBrandButton).attr(PRODUCT_BRAND_NAME_ATTRIBUTE);
            productBrandIdAttribute = $(deleteProductBrandButton).attr(PRODUCT_BRAND_ID_ATTRIBUTE);
        }
    
        var initEventListener = function (){
            deleteProductBrandButton.on(CLICK_EVENT_LISTENER_IDENTIFIER, function(){
                deleteProductBrandData($(this).attr(PRODUCT_BRAND_ID_ATTRIBUTE));
            });
        }

        var deleteProductBrandData = function (productBrandIdAttribute){
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
    
        var onSuccessDeleteProductBrandData = function (data){
            alert(DELETE_DATA_SUCCESS_NOTIFICATION);
        }
    
        var onErrorDeleteProductBrandData = function (DELETE_DATA_ERROR_NOTIFICATION){
            alert(DELETE_DATA_ERROR_NOTIFICATION);
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

        const DELETE_PRODUCT_CATEGORY_BUTTON_CLASS = ".deleteProductCategory",
        PRODUCT_CATEGORY_ID_ATTRIBUTE = "productCategoryId",
        PRODUCT_CATEGORY_NAME_ATTRIBUTE = "productCategoryName",
        DELETE_DATA_SUCCESS_NOTIFICATION = "Data Delete Succeed.",
        PRODUCT_CATEGORY_DELETE_URL =  "/product/delete_product_category/",
        DELETE_DATA_ERROR_NOTIFICATION = "Sorry, The data cannot be deleted for a moment.",
        CLICK_EVENT_LISTENER_IDENTIFIER = "click";
    
        var init = function init(){
            initDom();
            initEventListener();
        }
    
        var initDom = function initDom(){            
            deleteProductCategoryButton = $(DELETE_PRODUCT_CATEGORY_BUTTON_CLASS);
            deleteProductCategoryButtonUpdate = $(deleteProductCategoryButton).parent().parent();
            productCategoryNameAttribute = $(deleteProductCategoryButton).attr(PRODUCT_CATEGORY_NAME_ATTRIBUTE);
            productCategoryIdAttribute = $(deleteProductCategoryButton).attr(PRODUCT_CATEGORY_ID_ATTRIBUTE);
        }
    
        var initEventListener = function (){
            deleteProductCategoryButton.on(CLICK_EVENT_LISTENER_IDENTIFIER, function(){
                deleteProductCategoryData($(this).attr(PRODUCT_CATEGORY_ID_ATTRIBUTE));
            });
        }

        var deleteProductCategoryData = function (productCategoryIdAttribute){
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
    
        var onSuccessDeleteProductCategoryData = function (data){
            alert(DELETE_DATA_SUCCESS_NOTIFICATION);
        }
    
        var onErrorDeleteProductCategoryData = function (DELETE_DATA_ERROR_NOTIFICATION){
            alert(DELETE_DATA_ERROR_NOTIFICATION);
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

        const DELETE_PRODUCT_BRAND_CATEGORY_BUTTON_CLASS = ".deleteProductBrandCategory",
        PRODUCT_BRAND_CATEGORY_ID_ATTRIBUTE = "productBrandCategoryId",
        PRODUCT_BRAND_CATEGORY_NAME_ATTRIBUTE = "productBrandCategoryName",
        DELETE_DATA_SUCCESS_NOTIFICATION = "Data Delete Succeed.",
        PRODUCT_BRAND_CATEGORY_DELETE_URL =  "/product/delete_product_brand_category/",
        DELETE_DATA_ERROR_NOTIFICATION = "Sorry, The data cannot be deleted for a moment.",
        CLICK_EVENT_LISTENER_IDENTIFIER = "click";
    
        var init = function init(){
            initDom();
            initEventListener();
        }
    
        var initDom = function initDom(){            
            deleteProductBrandCategoryButton = $(DELETE_PRODUCT_BRAND_CATEGORY_BUTTON_CLASS);
            deleteProductBrandCategoryButtonUpdate = $(deleteProductBrandCategoryButton).parent().parent();
            productBrandCategoryNameAttribute = $(deleteProductBrandCategoryButton).attr(PRODUCT_BRAND_CATEGORY_NAME_ATTRIBUTE);
            productBrandCategoryIdAttribute = $(deleteProductBrandCategoryButton).attr(PRODUCT_BRAND_CATEGORY_ID_ATTRIBUTE);
        }
    
        var initEventListener = function (){
            deleteProductBrandCategoryButton.on(CLICK_EVENT_LISTENER_IDENTIFIER, function(){
                deleteProductBrandCategoryData($(this).attr(PRODUCT_BRAND_CATEGORY_ID_ATTRIBUTE));
            });
        }

        var deleteProductBrandCategoryData = function (productBrandCategoryIdAttribute){
            var productControllerUrl = BaseUrl + PRODUCT_BRAND_CATEGORY_DELETE_URL+productBrandCategoryIdAttribute;
            $.get(productControllerUrl, function(data){
                if(data){
                    console.log(data);
                    onSuccessDeleteProductBrandCategoryData(data);
                } else {
                    onErrorDeleteProductBrandCategoryData(GET_DATA_ERROR_NOTIFICATION);
                }
            });
        }
    
        var onSuccessDeleteProductBrandCategoryData = function (data){
            alert(DELETE_DATA_SUCCESS_NOTIFICATION);
        }
    
        var onErrorDeleteProductBrandCategoryData = function (DELETE_DATA_ERROR_NOTIFICATION){
            alert(DELETE_DATA_ERROR_NOTIFICATION);
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

        const DELETE_PRODUCT_PRICE_BUTTON_CLASS = ".deleteProductPrice",
        PRODUCT_PRICE_ID_ATTRIBUTE = "productPriceId",
        PRODUCT_PRICE_NAME_ATTRIBUTE = "productPriceName",
        DELETE_DATA_SUCCESS_NOTIFICATION = "Data Delete Succeed.",
        PRODUCT_PRICE_DELETE_URL =  "/product/delete_product_price/",
        DELETE_DATA_ERROR_NOTIFICATION = "Sorry, The data cannot be deleted for a moment.",
        CLICK_EVENT_LISTENER_IDENTIFIER = "click";
    
        var init = function init(){
            initDom();
            initEventListener();
        }
    
        var initDom = function (){            
            deleteProductPriceButton = $(DELETE_PRODUCT_PRICE_BUTTON_CLASS);
            deleteProductPriceButtonUpdate = $(deleteProductPriceButton).parent().parent();
            productPriceNameAttribute = $(deleteProductPriceButton).attr(PRODUCT_PRICE_NAME_ATTRIBUTE);
            productPriceIdAttribute = $(deleteProductPriceButton).attr(PRODUCT_PRICE_ID_ATTRIBUTE);
        }
    
        var initEventListener = function (){
            deleteProductPriceButton.on(CLICK_EVENT_LISTENER_IDENTIFIER, function(){
                deleteProductPriceData($(this).attr(PRODUCT_PRICE_ID_ATTRIBUTE));
            });
        }

        var deleteProductPriceData = function (productPriceIdAttribute){
            var productControllerUrl = BaseUrl + PRODUCT_PRICE_DELETE_URL+productPriceIdAttribute;
            $.get(productControllerUrl, function(data){
                if(data){
                    console.log(data);
                    onSuccessDeleteProductPriceData(data);
                } else {
                    onErrorDeleteProductPriceData(GET_DATA_ERROR_NOTIFICATION);
                }
            });
        }
    
        var onSuccessDeleteProductPriceData = function (data){
            alert(DELETE_DATA_SUCCESS_NOTIFICATION);
        }
    
        var onErrorDeleteProductPriceData = function (DELETE_DATA_ERROR_NOTIFICATION){
            alert(DELETE_DATA_ERROR_NOTIFICATION);
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

        const DELETE_PRODUCT_PROMO_BUTTON_CLASS = ".deleteProductPromo",
        PRODUCT_PROMO_ID_ATTRIBUTE = "productPromoId",
        PRODUCT_PROMO_NAME_ATTRIBUTE = "productPromoName",
        DELETE_DATA_SUCCESS_NOTIFICATION = "Data Delete Succeed.",
        PRODUCT_PROMO_DELETE_URL =  "/product/delete_product_promo/",
        DELETE_DATA_ERROR_NOTIFICATION = "Sorry, The data cannot be deleted for a moment.",
        CLICK_EVENT_LISTENER_IDENTIFIER = "click";
    
        var init = function init(){
            initDom();
            initEventListener();
        }
    
        var initDom = function (){            
            deleteProductPromoButton = $(DELETE_PRODUCT_PROMO_BUTTON_CLASS);
            deleteProductPromoButtonUpdate = $(deleteProductPromoButton).parent().parent();
            productPromoNameAttribute = $(deleteProductPromoButton).attr(PRODUCT_PROMO_NAME_ATTRIBUTE);
            productPromoIdAttribute = $(deleteProductPromoButton).attr(PRODUCT_PROMO_ID_ATTRIBUTE);
        }
    
        var initEventListener = function (){
            deleteProductPromoButton.on(CLICK_EVENT_LISTENER_IDENTIFIER, function(){
                deleteProductPromoData($(this).attr(PRODUCT_PROMO_ID_ATTRIBUTE));
            });
        }

        var deleteProductPromoData = function (productPromoIdAttribute){
            var productControllerUrl = BaseUrl + PRODUCT_PROMO_DELETE_URL+productPromoIdAttribute;
            $.get(productControllerUrl, function(data){
                if(data){
                    console.log(data);
                    onSuccessDeleteProductPromoData(data);
                } else {
                    onErrorDeleteProductPromoData(GET_DATA_ERROR_NOTIFICATION);
                }
            });
        }
    
        var onSuccessDeleteProductPromoData = function (data){
            alert(DELETE_DATA_SUCCESS_NOTIFICATION);
        }
    
        var onErrorDeleteProductPromoData = function (DELETE_DATA_ERROR_NOTIFICATION){
            alert(DELETE_DATA_ERROR_NOTIFICATION);
        }

        return {
            init: init
        }
    })();

    deleteProductPromo.init();
    deleteProductPrice.init();
    deleteProductBrandCategory.init();
    deleteProductCategory.init();
    deleteProductBrand.init();
    deleteProduct.init();
    editProductPromo.init();
    editProductPrice.init();
    editProductBrandCategory.init();
    editProductCategory.init();
    productMenu.init(); 
    editProduct.init(); 
    editProductBrand.init(); 
 
})();