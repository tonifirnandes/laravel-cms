var productShowTable;
var editProductBrandFunction;

(function($){
    
    var showContent = (function(){

        const PRODUCT_MENU_CLASS        = ".ProductMenu",
        NEW_PRODUCT_MENU_CLASS          = ".NewProductMenu",
        ORDER_SHIPMENT_CLASS            = ".OrderShipment",
        ORDER_SHIPMENT_REFERENCE_CLASS  = ".OrderShipmentReference",
        ORDER_INVOICE_STATUS_CLASS      = ".OrderInvoiceStatus",
        ORDER_INVOICE_CLASS             = ".OrderInvoice",
        ORDER_STATUS_CLASS              = ".OrderStatus",
        ORDER_METHOD_PAYMENT_CLASS      = ".OrderMethodPayment",
        ORDER_CLASS                     = ".Order",
        PRODUCT_BRAND_CLASS             = ".ProductBrand",
        PRODUCT_CATEGORY_CLASS          = ".ProductCategory",
        PRODUCT_PRICE_CLASS             = ".ProductPrice",
        PRODUCT_BRAND_CATEGORY_CLASS    = ".ProductBrandCategory",
        PRODUCT_PROMO_CLASS             = ".ProductPromo",
        USER_ACTIVITY_CLASS             = ".UserActivity",
        TICKET_CLASS                    = ".Ticket",
        CART_LIST_CLASS                 = ".CartList",
        INQUIRY_LIST_CLASS              = ".InquiryList",
        UPLOAD_PRODUCT_CLASS            = ".UploadProduct",
        NEW_DATA_CLASS                  = ".NewData",
        FIRST_SHOW_CLASS                = ".first-show",
        MANAGE_ACCOUNTS_CLASS           = ".ManageAccounts",
        BUTTON_NEXT_CLASS               = ".ButtonNext",
        STEP_HEIGHT_CLASS               = "StepHeight",
        STEP_CONTAINER_CLASS            = "StepContainer",

        INPUT_PRODUCT_CONTENT                   = "#InputProduct",
        INPUT_NEW_PRODUCT_CONTENT               = "#InputNewProduct",
        INPUT_PRODUCT_BRAND_CONTENT             = "#InputProductBrand",
        INPUT_PRODUCT_CATEGORY_CONTENT          = "#InputProductCategory",
        INPUT_PRODUCT_PRIZE_CONTENT             = "#InputProductPrize",
        INPUT_PRODUCT_BRAND_CATEGORY_CONTENT    = "#InputProductBrandCategory",
        INPUT_PRODUCT_PROMO_CONTENT             = "#InputProductPromo",
        CART_LIST_PAGE_CONTENT                  = "#CartListPage",
        INQUIRY_LIST_PAGE_CONTENT               = "#InquiryListPage",
        ORDER_SHIPMENT_PAGE_CONTENT             = "#OrderShipmentPage",
        ORDER_SHIPMENT_REFERENCE_PAGE_CONTENT   = "#OrderShipmentReferencePage",
        ORDER_INVOICE_STATUS_PAGE_CONTENT       = "#OrderInvoiceStatusPage",
        ORDER_INVOICE_PAGE_CONTENT              = "#OrderInvoicePage",
        ORDER_STATUS_PAGE_CONTENT               = "#OrderStatusPage",
        ORDER_METHOD_PAYMENT_PAGE_CONTENT       = "#OrderMethodPaymentPage",
        ORDER_PAGE_CONTENT                      = "#OrderPage",
        WIZARD_FORM_CONTENT                     = "#WizardForm",
        USER_ACTIVITY_CONTENT                   = "#UserActivityForm",
        TICKET_CONTENT                          = "#TicketForm",
        ACCOUNTS_FORM_CONTENT                   = "#AccountsForm",
        UPLOAD_PRODUCT_PAGE_CONTENT             = "#UploadProduct",
        SHOW_MESSAGE_CLASS                      = ".show-message",
        ACTIVE_STYLE_IDENTIFIER                 = "active",
        ACTIVE_IN_STYLE_IDENTIFIER              = "active in",
        CLICK_EVENT_LISTENER_IDENTIFIER         = "click",
        EMPTY_BLANK_CONTENT_HTML                = "",
        CONTENT_TAB_MENU                        = "#myTabContent",
        FADE_MENU_CLASS                         = ".fade"; 

        TABLE_PRODUCT_BRAND_CATEGORY_CLASS      = "table.productBrandCategoryListTable"; 
        TABLE_PRODUCT_CLASS                     = "table.productListTable"; 
        TABLE_PRODUCT_BRAND_CLASS               = "table.productBrandListTable"; 
        TABLE_PRODUCT_CATEGORY_CLASS            = "table.productCategoryListTable"; 
        TABLE_PRODUCT_PRICE_CLASS               = "table.productPriceListTable"; 
        TABLE_PRODUCT_PROMO_CLASS               = "table.productPromoListTable"; 
        TABLE_ORDER_CLASS                       = "table.orderListTable"; 
        TABLE_ORDER_SHIPMENT_CLASS              = "table.orderShipmentListTable"; 
        TABLE_ORDER_SHIPMENT_REFERENCE_CLASS    = "table.orderShipmentReferenceListTable"; 
        TABLE_ORDER_STATUS_CLASS                = "table.orderStatusListTable"; 
        TABLE_ORDER_INVOICE_CLASS               = "table.orderInvoiceListTable"; 
        TABLE_ORDER_INVOICE_STATUS_CLASS        = "table.orderInvoiceStatusListTable"; 
        TABLE_ORDER_PAYMENT_METHOD_CLASS        = "table.orderPaymentMethodListTable"; 
        TABLE_CART_CLASS                        = "table.cartListTable"; 
        TABLE_ACCOUNT_CLASS                     = "table.accountListTable"; 

        PRODUCT_BRAND_CATEGORY_TABLE_BODY       = ".productBrandCategoryTableBody";
        PRODUCT_TABLE_BODY                      = ".productTableBody";
        PRODUCT_BRAND_TABLE_BODY                = ".productBrandTableBody";
        PRODUCT_CATEGORY_TABLE_BODY             = ".productCategoryTableBody";
        PRODUCT_PRICE_TABLE_BODY                = ".productPriceTableBody";
        PRODUCT_PROMO_TABLE_BODY                = ".productPromoTableBody";
        ORDER_TABLE_BODY                        = ".orderTableBody";
        ORDER_SHIPMENT_TABLE_BODY               = ".orderShipmentTableBody";
        ORDER_SHIPMENT_REFERENCE_TABLE_BODY     = ".orderShipmentReferenceTableBody";
        ORDER_STATUS_TABLE_BODY                 = ".orderStatusTableBody";
        ORDER_INVOICE_TABLE_BODY                = ".orderInvoiceTableBody";
        ORDER_INVOICE_STATUS_TABLE_BODY         = ".orderInvoiceStatusTableBody";
        ORDER_PAYMENT_METHOD_TABLE_BODY         = ".orderPaymentMethodTableBody";
        CART_TABLE_BODY                         = ".cartTableBody";
        ACCOUNT_TABLE_BODY                      = ".accountTableBody";

        CONTROLLER_PRODUCT_BRAND_CATEGORY       = "/product/get_data_product_brand_category";
        CONTROLLER_PRODUCT                      = "/product/get_data_product";
        CONTROLLER_NEW_PRODUCT                  = "/product/get_data_new_product";
        CONTROLLER_PRODUCT_BRAND                = "/product/get_data_product_brand";
        CONTROLLER_PRODUCT_CATEGORY             = "/product/get_data_product_category";
        CONTROLLER_PRODUCT_PRICE                = "/product/get_data_product_price";
        CONTROLLER_PRODUCT_PROMO                = "/product/get_data_product_promo";
        CONTROLLER_ORDER                        = "/order/get_data_order";
        CONTROLLER_ORDER_SHIPMENT               = "/order/get_data_order_shipment";
        CONTROLLER_ORDER_SHIPMENT_REFERENCE     = "/order/get_data_order_shipment_reference";
        CONTROLLER_ORDER_STATUS                 = "/order/get_data_order_status";
        CONTROLLER_ORDER_INVOICE                = "/order/get_data_order_invoice";
        CONTROLLER_ORDER_INVOICE_STATUS         = "/order/get_data_order_invoice_status";
        CONTROLLER_ORDER_PAYMENT_METHOD         = "/order/get_data_order_method_payment";
        CONTROLLER_CART                         = "/cart/get_data_cart";
        CONTROLLER_ACCOUNT                      = "/admin/get_data_account";
    
        var init = function init(){
            initDom();
            initEventListener();
        }

        var initDom = function initDom(){    
      
            showMessageClass            = $(SHOW_MESSAGE_CLASS);
            productContent              = $(INPUT_PRODUCT_CONTENT);
            newProductContent           = $(INPUT_NEW_PRODUCT_CONTENT);
            firstShowContent            = $(FIRST_SHOW_CLASS);
            productBrandContent         = $(INPUT_PRODUCT_BRAND_CONTENT);
            productCategoryContent      = $(INPUT_PRODUCT_CATEGORY_CONTENT);
            productBrandCategoryContent = $(INPUT_PRODUCT_BRAND_CATEGORY_CONTENT);
            productPriceContent         = $(INPUT_PRODUCT_PRIZE_CONTENT);
            productPromoContent         = $(INPUT_PRODUCT_PROMO_CONTENT);
            wizardFormContent           = $(WIZARD_FORM_CONTENT);
            userActivityContent         = $(USER_ACTIVITY_CONTENT);
            ticketContent               = $(TICKET_CONTENT);
            accountsFormContent         = $(ACCOUNTS_FORM_CONTENT);
            cartListPage                = $(CART_LIST_PAGE_CONTENT);
            inquiryListPage             = $(INQUIRY_LIST_PAGE_CONTENT);
            uploadProductPage           = $(UPLOAD_PRODUCT_PAGE_CONTENT);
            orderShipmentPage           = $(ORDER_SHIPMENT_PAGE_CONTENT);
            orderShipmentReferencePage  = $(ORDER_SHIPMENT_REFERENCE_PAGE_CONTENT);
            orderInvoiceStatusPage      = $(ORDER_INVOICE_STATUS_PAGE_CONTENT);
            orderInvoicePage            = $(ORDER_INVOICE_PAGE_CONTENT);
            orderStatusPage             = $(ORDER_STATUS_PAGE_CONTENT);
            orderMethodPaymentPage      = $(ORDER_METHOD_PAYMENT_PAGE_CONTENT);
            orderPage                   = $(ORDER_PAGE_CONTENT);
            tabFormContent              = $(CONTENT_TAB_MENU);
            showMessageEmpty            = $(SHOW_MESSAGE_CLASS);
            newData                     = $(NEW_DATA_CLASS);
            manageAccounts              = $(MANAGE_ACCOUNTS_CLASS);

            clickEventListenerIdentifier    = CLICK_EVENT_LISTENER_IDENTIFIER;
            activeStyleIdentifier           = ACTIVE_STYLE_IDENTIFIER;
            activeInStyleIdentifier         = ACTIVE_IN_STYLE_IDENTIFIER;
            fadeMenuClass                   = FADE_MENU_CLASS;
            stepHeightClass                 = STEP_HEIGHT_CLASS;
            stepContainerClass              = STEP_CONTAINER_CLASS;
            emptyBlankContentHtml           = EMPTY_BLANK_CONTENT_HTML;
            productMenuButton               = $(PRODUCT_MENU_CLASS);
            newProductMenuButton            = $(NEW_PRODUCT_MENU_CLASS);
            productBrandButton              = $(PRODUCT_BRAND_CLASS);
            buttonNextButton                = $(BUTTON_NEXT_CLASS);
            orderShipmentButton             = $(ORDER_SHIPMENT_CLASS);
            orderShipmentReferenceButton    = $(ORDER_SHIPMENT_REFERENCE_CLASS);
            orderInvoiceStatusButton        = $(ORDER_INVOICE_STATUS_CLASS);
            orderInvoiceButton              = $(ORDER_INVOICE_CLASS);
            orderButton                     = $(ORDER_CLASS);
            orderStatusButton               = $(ORDER_STATUS_CLASS);
            orderMethodPaymentButton        = $(ORDER_METHOD_PAYMENT_CLASS);
            productCategoryButton           = $(PRODUCT_CATEGORY_CLASS);
            productBrandCategoryButton      = $(PRODUCT_BRAND_CATEGORY_CLASS);
            productPriceButton              = $(PRODUCT_PRICE_CLASS);
            productPromoButton              = $(PRODUCT_PROMO_CLASS);
            userActivityButton              = $(USER_ACTIVITY_CLASS);
            ticketButton                    = $(TICKET_CLASS);
            cartListButton                  = $(CART_LIST_CLASS);
            inquiryListButton               = $(INQUIRY_LIST_CLASS);
            uploadProductButton             = $(UPLOAD_PRODUCT_CLASS);

            tableProductBrandCategoryClass      = $(TABLE_PRODUCT_BRAND_CATEGORY_CLASS);
            tableProductClass                   = $(TABLE_PRODUCT_CLASS);
            tableProductBrandClass              = $(TABLE_PRODUCT_BRAND_CLASS);
            tableProductCategoryClass           = $(TABLE_PRODUCT_CATEGORY_CLASS);
            tableProductPriceClass              = $(TABLE_PRODUCT_PRICE_CLASS);
            tableProductPromoClass              = $(TABLE_PRODUCT_PROMO_CLASS);
            tableOrderClass                     = $(TABLE_ORDER_CLASS);
            tableOrderShipmentClass             = $(TABLE_ORDER_SHIPMENT_CLASS);
            tableOrderShipmentReferenceClass    = $(TABLE_ORDER_SHIPMENT_REFERENCE_CLASS);
            tableOrderStatusClass               = $(TABLE_ORDER_STATUS_CLASS);
            tableOrderInvoiceClass              = $(TABLE_ORDER_INVOICE_CLASS);
            tableOrderInvoiceStatusClass        = $(TABLE_ORDER_INVOICE_STATUS_CLASS);
            tableOrderMethodPaymentClass        = $(TABLE_ORDER_PAYMENT_METHOD_CLASS);
            tableCartClass                      = $(TABLE_CART_CLASS);
            tableAccountClass                   = $(TABLE_ACCOUNT_CLASS);

            classContentProductBrandCategory    = $(PRODUCT_BRAND_CATEGORY_TABLE_BODY);
            classContentProduct                 = $(PRODUCT_TABLE_BODY);
            classContentProductBrand            = $(PRODUCT_BRAND_TABLE_BODY);
            classContentProductCategory         = $(PRODUCT_CATEGORY_TABLE_BODY);
            classContentProductPrice            = $(PRODUCT_PRICE_TABLE_BODY);
            classContentProductPromo            = $(PRODUCT_PROMO_TABLE_BODY);
            classContentOrder                   = $(ORDER_TABLE_BODY);
            classContentOrderShipment           = $(ORDER_SHIPMENT_TABLE_BODY);
            classContentOrderShipmentReference  = $(ORDER_SHIPMENT_REFERENCE_TABLE_BODY);
            classContentOrderStatus             = $(ORDER_STATUS_TABLE_BODY);
            classContentOrderInvoice            = $(ORDER_INVOICE_TABLE_BODY);
            classContentOrderInvoiceStatus      = $(ORDER_INVOICE_STATUS_TABLE_BODY);
            classContentOrderMethodPayment      = $(ORDER_PAYMENT_METHOD_TABLE_BODY);
            classContentCart                    = $(CART_TABLE_BODY);
            classContentAccount                 = $(ACCOUNT_TABLE_BODY);
            
        }

        var initEventListener = function (){  

            buttonNextButton.on(clickEventListenerIdentifier, function(){
                $(this).parent().parent().find(stepContainerClass).removeClass(stepHeightClass);
            });

            productMenuButton.on(clickEventListenerIdentifier, function(){
                tabFormContent.find(fadeMenuClass).removeClass(activeStyleIdentifier);
                productContent.addClass(activeInStyleIdentifier);
                firstShowContent.addClass(activeInStyleIdentifier);
                showMessageEmpty.html(emptyBlankContentHtml);
                showDataTable(classContentProduct,CONTROLLER_PRODUCT,productInitFunction,tableProductClass);
            });

            newProductMenuButton.on(clickEventListenerIdentifier, function(){
                tabFormContent.find(fadeMenuClass).removeClass(activeStyleIdentifier);
                newProductContent.addClass(activeInStyleIdentifier);
                showMessageEmpty.html(emptyBlankContentHtml);
                showDataTable(classContentProduct,CONTROLLER_NEW_PRODUCT,productInitFunction,tableProductClass);
            });

            newData.on(clickEventListenerIdentifier, function(){
                tabFormContent.find(fadeMenuClass).removeClass(activeStyleIdentifier);
                wizardFormContent.addClass(activeInStyleIdentifier);
                showMessageEmpty.html(emptyBlankContentHtml);
            });

            userActivityButton.on(clickEventListenerIdentifier, function(){
                tabFormContent.find(fadeMenuClass).removeClass(activeStyleIdentifier);
                userActivityContent.addClass(activeInStyleIdentifier);
                showMessageEmpty.html(emptyBlankContentHtml);
            });

            ticketButton.on(clickEventListenerIdentifier, function(){
                tabFormContent.find(fadeMenuClass).removeClass(activeStyleIdentifier);
                ticketContent.addClass(activeInStyleIdentifier);
                showMessageEmpty.html(emptyBlankContentHtml);
            });

            $(manageAccounts).on(clickEventListenerIdentifier, function(){
                tabFormContent.find(fadeMenuClass).removeClass(activeStyleIdentifier);
                accountsFormContent.addClass(activeInStyleIdentifier);
                showMessageEmpty.html(emptyBlankContentHtml);
                showDataTable(classContentAccount,CONTROLLER_ACCOUNT,adminAccountsInitFunction,tableAccountClass);
            });

            productBrandCategoryButton.on(clickEventListenerIdentifier, function(e){
                tabFormContent.find(fadeMenuClass).removeClass(activeStyleIdentifier);
                productBrandCategoryContent.addClass(activeInStyleIdentifier);
                showMessageEmpty.html(emptyBlankContentHtml);
                // showDataTable(classContentProductBrandCategory,CONTROLLER_PRODUCT_BRAND_CATEGORY,editProductBrandCategory,deleteProductBrandCategory,tableProductBrandCategoryClass);
            });

            productBrandButton.on(clickEventListenerIdentifier, function(){
                tabFormContent.find(fadeMenuClass).removeClass(activeStyleIdentifier);
                productBrandContent.addClass(activeInStyleIdentifier);
                showMessageEmpty.html(emptyBlankContentHtml);
                // showDataTable(classContentProductBrand,CONTROLLER_PRODUCT_BRAND,editProductBrand,deleteProductBrand,tableProductBrandClass);
            });

            productCategoryButton.on(clickEventListenerIdentifier, function(){
                tabFormContent.find(fadeMenuClass).removeClass(activeStyleIdentifier);
                productCategoryContent.addClass(activeInStyleIdentifier);
                showMessageEmpty.html(emptyBlankContentHtml);
                // showDataTable(classContentProductCategory,CONTROLLER_PRODUCT_CATEGORY,editProductCategory,deleteProductCategory,tableProductCategoryClass);
            });

            productPriceButton.on(clickEventListenerIdentifier, function(){
                tabFormContent.find(fadeMenuClass).removeClass(activeStyleIdentifier);
                productPriceContent.addClass(activeInStyleIdentifier);
                showMessageEmpty.html(emptyBlankContentHtml);
                // showDataTable(classContentProductPrice,CONTROLLER_PRODUCT_PRICE,editProductPrice,deleteProductPrice,tableProductPriceClass);
            });

            productPromoButton.on(clickEventListenerIdentifier, function(){
                tabFormContent.find(fadeMenuClass).removeClass(activeStyleIdentifier);
                productPromoContent.addClass(activeInStyleIdentifier);
                showMessageEmpty.html(emptyBlankContentHtml);
                // showDataTable(classContentProductPromo,CONTROLLER_PRODUCT_PROMO,editProductPromo,deleteProductPromo,tableProductPromoClass);
            });

            cartListButton.on(clickEventListenerIdentifier, function(){
                tabFormContent.find(fadeMenuClass).removeClass(activeStyleIdentifier);
                cartListPage.addClass(activeInStyleIdentifier);
                showMessageEmpty.html(emptyBlankContentHtml);
                // showDataTable(classContentCart,CONTROLLER_CART,viewCartDetail,viewCartDetail,tableCartClass);
            });

            inquiryListButton.on(clickEventListenerIdentifier, function(){
                tabFormContent.find(fadeMenuClass).removeClass(activeStyleIdentifier);
                inquiryListPage.addClass(activeInStyleIdentifier);
                // showMessageEmpty.html(emptyBlankContentHtml);
            });

            uploadProductButton.on(clickEventListenerIdentifier, function(){
                tabFormContent.find(fadeMenuClass).removeClass(activeStyleIdentifier);
                uploadProductPage.addClass(activeInStyleIdentifier);
                // showMessageEmpty.html(emptyBlankContentHtml);
            });

            orderButton.on(clickEventListenerIdentifier, function(){
                tabFormContent.find(fadeMenuClass).removeClass(activeStyleIdentifier);
                orderPage.addClass(activeInStyleIdentifier);
                showMessageEmpty.html(emptyBlankContentHtml);
                // showDataTable(classContentOrder,CONTROLLER_ORDER,editOrder,deleteOrder,tableOrderClass);
            });

            orderStatusButton.on(clickEventListenerIdentifier, function(){
                tabFormContent.find(fadeMenuClass).removeClass(activeStyleIdentifier);
                orderStatusPage.addClass(activeInStyleIdentifier);
                showMessageEmpty.html(emptyBlankContentHtml);
                // showDataTable(classContentOrderStatus,CONTROLLER_ORDER_STATUS,editOrderStatus,deleteOrderStatus,tableOrderStatusClass);
            });

            orderMethodPaymentButton.on(clickEventListenerIdentifier, function(){
                tabFormContent.find(fadeMenuClass).removeClass(activeStyleIdentifier);
                orderMethodPaymentPage.addClass(activeInStyleIdentifier);
                showMessageEmpty.html(emptyBlankContentHtml);
                // showDataTable(classContentOrderMethodPayment,CONTROLLER_ORDER_PAYMENT_METHOD,editOrderMethodPayment,deleteOrderPaymentMethod,tableOrderMethodPaymentClass);
            });

            orderShipmentButton.on(clickEventListenerIdentifier, function(){
                tabFormContent.find(fadeMenuClass).removeClass(activeStyleIdentifier);
                orderShipmentPage.addClass(activeInStyleIdentifier);
                showMessageEmpty.html(emptyBlankContentHtml);
                // showDataTable(classContentOrderShipment,CONTROLLER_ORDER_SHIPMENT,editShipment,deleteShipment,tableOrderShipmentClass);
            });

            orderShipmentReferenceButton.on(clickEventListenerIdentifier, function(){
                tabFormContent.find(fadeMenuClass).removeClass(activeStyleIdentifier);
                orderShipmentReferencePage.addClass(activeInStyleIdentifier);
                showMessageEmpty.html(emptyBlankContentHtml);
                // showDataTable(classContentOrderShipmentReference,CONTROLLER_ORDER_SHIPMENT_REFERENCE,editShipmentReference,deleteShipmentReference,tableOrderShipmentReferenceClass);
            });

            orderInvoiceStatusButton.on(clickEventListenerIdentifier, function(){
                tabFormContent.find(fadeMenuClass).removeClass(activeStyleIdentifier);
                orderInvoiceStatusPage.addClass(activeInStyleIdentifier);
                showMessageEmpty.html(emptyBlankContentHtml);
                // showDataTable(classContentOrderInvoiceStatus,CONTROLLER_ORDER_INVOICE_STATUS,editOrderStatusInvoice,deleteOrderStatusInvoice,tableOrderInvoiceStatusClass);
            });

            orderInvoiceButton.on(clickEventListenerIdentifier, function(){
                tabFormContent.find(fadeMenuClass).removeClass(activeStyleIdentifier);
                orderInvoicePage.addClass(activeInStyleIdentifier);
                showMessageEmpty.html(emptyBlankContentHtml);
                // showDataTable(classContentOrderInvoice,CONTROLLER_ORDER_INVOICE,editOrderInvoice,deleteOrderInvoice,tableOrderInvoiceClass);
            });
        }

        var showDataTable = (classContent, controllerUrl, functionInit, classDatatable) => {
            var contentControllerUrl = BaseUrl + controllerUrl;
            $.get(contentControllerUrl, function(data){
                if(data){
                    classDatatable.DataTable().destroy();
                    classContent.html(data);
                    functionInit.init();
                    classDatatable.DataTable( {
                        "order": [[ 3, "desc" ]]
                    } );
                } else {
                    alert(loadDataErrorNotification);
                }
            });
        }

        return {
            init: init
        }
    })();
    
    showContent.init();

})(jQuery);