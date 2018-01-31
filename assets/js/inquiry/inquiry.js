
(function($){
    
    var viewDetailInquiry = (function(){
        
        var viewInquiryButton, 
        inquiryIdAttribute,
        inquiryProductTableFormId,
        getDataErrorNotification,
        inquiryUserEmailFormId,
        inquiryUserNameFormId,
        inquiryDetailClass,
        inquiryUserTelephoneFormId,
        inquiryUserStatusFormId,
        inquiryFormClass,
        inquiryShowFormUrl,
        orderInvoiceIdAttribute;

        const VIEW_INQUIRY_BUTTON_CLASS     = ".viewInquiry",
        INQUIRY_ID_ATTRIBUTE                = "inquiryId",
        INQUIRY_PRODUCT_TABLE_FORM_ID       = "#inquiryProductTable",
        INQUIRY_DETAIL_CLASS                = ".inquiryDetail",
        INQUIRY_USER_EMAIL_FORM_ID          = "#inquiryUserEmail",
        INQUIRY_USER_NAME_FORM_ID           = "#inquiryUserName",
        INQUIRY_USER_TELEPHONE_FORM_ID      = "#inquiryUserTelephone",
        INQUIRY_USER_STATUS_FORM_ID         = "#inquiryStatus",
        INQUIRY_FORM_CLASS                  = ".inquiryForm",
        GET_DATA_ERROR_NOTIFICATION         = "Sorry, The data cannot be uploaded for now.",
        INQUIRY_SHOW_FORM_URL               = "/inquiry/show_form_inquiry/",
        CLICK_EVENT_LISTENER_IDENTIFIER     = "click",
        OPENING_ROW_TABLE                   = "<tr><td>",
        COLUMN_ROW_TABLE                    = "</td><td>",
        CLOSING_ROW_TABLE                   = "</td></tr>",
        BLANK_CONTENT                       = "";
    
        var init = () => {
            initDom();
            initEventListener();
        };
    
        var initDom = () => {            
            viewInquiryButton               = $(VIEW_INQUIRY_BUTTON_CLASS);
            inquiryIdAttribute              = INQUIRY_ID_ATTRIBUTE;
            clickEventListenerIdentifier    = CLICK_EVENT_LISTENER_IDENTIFIER;
            inquiryProductTableFormId       = INQUIRY_PRODUCT_TABLE_FORM_ID;
            inquiryUserEmailFormId          = INQUIRY_USER_EMAIL_FORM_ID;
            inquiryFormClass                = INQUIRY_FORM_CLASS;
            inquiryDetail                   = INQUIRY_DETAIL_CLASS;
            getDataErrorNotification        = GET_DATA_ERROR_NOTIFICATION;
            inquiryUserNameFormId           = INQUIRY_USER_NAME_FORM_ID;
            inquiryUserTelephoneFormId      = INQUIRY_USER_TELEPHONE_FORM_ID;
            inquiryUserStatusFormId         = INQUIRY_USER_STATUS_FORM_ID;
            inquiryShowFormUrl              = INQUIRY_SHOW_FORM_URL;
            blankContent                    = BLANK_CONTENT;
            openingRowTable                 = OPENING_ROW_TABLE;
            columnRowTable                  = COLUMN_ROW_TABLE;
            closingRowTable                 = CLOSING_ROW_TABLE;
        };
    
        var initEventListener = () => {
            viewInquiryButton.on(clickEventListenerIdentifier, function(){
                viewInquiryDetail($(this).attr(inquiryIdAttribute));
            });
        };

        var viewInquiryDetail = (inquiryIdAttribute) => {
            var viewInquiryControllerUrl = BaseUrl + inquiryShowFormUrl+inquiryIdAttribute;
            $.get(viewInquiryControllerUrl, function(data){
                if(data){
                    onSuccessShowInquiryDetail(data);
                } else {
                    onErrorShowInquiryDetail(getDataErrorNotification);
                }
            });
        };
    
        var onSuccessShowInquiryDetail = (data) => {
            $(inquiryProductTableFormId).html(blankContent);
            $(inquiryUserEmailFormId).html(data[0].customerEmail);
            $(inquiryUserNameFormId).html(data[0].customerEmail);
            $(inquiryUserTelephoneFormId).html(data[0].customerTelephone);
            $(inquiryUserTelephoneFormId).html(data[0].customerTelephone);
            $(inquiryUserStatusFormId).html(data[0].customerInquiryStatus);
            $.each(data, function(i , val) {
                var row = $(openingRowTable+ data[i].productName + columnRowTable + data[i].productDescription + columnRowTable + data[i].productPartNumber + columnRowTable + data[i].customerInquiryNotes + columnRowTable + data[i].customerInquiryDate + closingRowTable);
                $(inquiryProductTableFormId).append(row);
            });
            $(inquiryDetail).show();
            $(inquiryFormClass).hide();
        };
    
        var onErrorShowInquiryDetail = (getDataErrorNotification) => {
            alert(getDataErrorNotification);
        };

        return {
            init: init
        }
    })();
    
    var proceedToCart = (function(){
        
        var proceedToCartButton, 
        inquiryIdAttribute,
        inquiryProductTableFormId,
        getDataErrorNotification,
        inquiryUserEmailFormId,
        inquiryUserNameFormId,
        inquiryDetailClass,
        inquiryUserTelephoneFormId,
        inquiryUserStatusFormId,
        inquiryFormClass,
        inquiryShowFormUrl,
        orderInvoiceIdAttribute;

        const PROCEED_TO_CART_BUTTON_CLASS  = ".proceedToCart",
        INQUIRY_ID_ATTRIBUTE                = "inquiryId",
        INQUIRY_CUSTOMER_EMAIL_FORM_ID      = "#inquiryCustomerEmail",
        INQUIRY_CUSTOMER_TELEPHONE_FORM_ID  = "#inquiryCustomerTelephone",
        INQUIRY_CUSTOMER_NOTES_FORM_ID      = "#inquiryCustomerNotes",
        INQUIRY_CUSTOMER_DATE_FORM_ID       = "#inquiryCustomerDate",
        INQUIRY_FORM_CLASS                  = ".inquiryForm",
        INQUIRY_SHOW_FORM_URL               = "/inquiry/show_form_inquiry/",
        CLICK_EVENT_LISTENER_IDENTIFIER     = "click",
        GET_DATA_ERROR_NOTIFICATION         = "Sorry, The data cannot be uploaded for now.",
        INQUIRY_DETAIL_CLASS                = ".inquiryDetail";
    
        var init = () => {
            initDom();
            initEventListener();
        };
    
        var initDom = () => {            
            proceedToCartButton             = $(PROCEED_TO_CART_BUTTON_CLASS);
            inquiryIdAttribute              = INQUIRY_ID_ATTRIBUTE;
            clickEventListenerIdentifier    = CLICK_EVENT_LISTENER_IDENTIFIER;
            inquiryShowFormUrl              = INQUIRY_SHOW_FORM_URL;
            inquiryDetail                   = INQUIRY_DETAIL_CLASS;
            inquiryFormClass                = INQUIRY_FORM_CLASS;
            inquiryCustomerEmailFormId      = INQUIRY_CUSTOMER_EMAIL_FORM_ID;
            inquiryCustomerTelephoneFormId  = INQUIRY_CUSTOMER_TELEPHONE_FORM_ID;
            inquiryCustomerNotesFormId      = INQUIRY_CUSTOMER_NOTES_FORM_ID;
            inquiryCustomerDateFormId       = INQUIRY_CUSTOMER_DATE_FORM_ID;
            getDataErrorNotification        = GET_DATA_ERROR_NOTIFICATION;
        };
    
        var initEventListener = () => {
            proceedToCartButton.on(clickEventListenerIdentifier, function(){
                proceedToCart($(this).attr(inquiryIdAttribute));
            });
        };

        var proceedToCart = (inquiryIdAttribute) => {
            var viewInquiryControllerUrl = BaseUrl + inquiryShowFormUrl+inquiryIdAttribute;
            $.get(viewInquiryControllerUrl, function(data){
                if(data){
                    onSuccessShowInquiryDetail(data);
                } else {
                    onErrorShowInquiryDetail(getDataErrorNotification);
                }
            });
        };
    
        var onSuccessShowInquiryDetail = (data) => {
            $(inquiryCustomerEmailFormId).val(data[0].customerEmail);
            $(inquiryCustomerTelephoneFormId).val(data[0].customerTelephone);
            $(inquiryCustomerNotesFormId).val(data[0].customerInquiryNotes);
            $(inquiryCustomerDateFormId).val(data[0].customerInquiryDate);
            $(inquiryFormClass).show();
            $(inquiryDetail).hide();
        };
    
        var onErrorShowInquiryDetail = (getDataErrorNotification) => {
            alert(getDataErrorNotification);
        };

        return {
            init: init
        }
    })();

    var changeInquiryStatus = (function(){
        
        var changeInquiryStatusButton, 
        inquiryIdAttribute,
        csrfToken,
        getDataErrorNotification,
        getDataSucceedNotification,
        metaNameCsrfToken,
        content,
        inquiryChangeStatusUrl,
        clickEventListenerIdentifier;

        const CHANGE_INQUIRY_STATUS_BUTTON  = ".changeInquiryStatus",
        INQUIRY_ID_ATTRIBUTE                = "inquiryId",
        CSRF_TOKEN                          = 'X-CSRF-TOKEN',
        META_NAME_CSRF_TOKEN                = 'meta[name="csrf-token"]',
        CONTENT                             = 'content',
        INQUIRY_CHANGE_STATUS_URL           = "/inquiry/change_inquiry_status",
        CLICK_EVENT_LISTENER_IDENTIFIER     = "click",
        GET_DATA_ERROR_NOTIFICATION         = "Sorry, The data cannot be uploaded for now.",
        GET_DATA_SUCCEED_NOTIFICATION       = "Change Status Succeed";
    
        var init = () => {
            initDom();
            initEventListener();
        };
    
        var initDom = () => {            
            changeInquiryStatusButton       = $(CHANGE_INQUIRY_STATUS_BUTTON);
            inquiryIdAttribute              = INQUIRY_ID_ATTRIBUTE;
            clickEventListenerIdentifier    = CLICK_EVENT_LISTENER_IDENTIFIER;
            csrfToken                       = CSRF_TOKEN;
            metaNameCsrfToken               = META_NAME_CSRF_TOKEN;
            content                         = CONTENT;
            inquiryChangeStatusUrl          = INQUIRY_CHANGE_STATUS_URL;
            getDataErrorNotification        = GET_DATA_ERROR_NOTIFICATION;
            getDataSucceedNotification      = GET_DATA_SUCCEED_NOTIFICATION;
        };
    
        var initEventListener = () => {
            
            
            changeInquiryStatusButton.on(clickEventListenerIdentifier, function(){
                changeInquiryStatus($(this).parent().children().attr(inquiryIdAttribute));
            });
        };

        var changeInquiryStatus = (inquiryIdAttribute) => {
            $.ajaxSetup({
                headers:{'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')}
            });
            var changeInquiryStatusControllerUrl = BaseUrl + inquiryChangeStatusUrl;
            $.post(changeInquiryStatusControllerUrl,{idInquiry:inquiryIdAttribute}, function(data){
                if(data){
                    onSuccessChangeInquiryStatus(data);
                } else {
                    onErrorChangeInquiryStatus(getDataErrorNotification);
                }
            });
        };
    
        var onSuccessChangeInquiryStatus = (data) => {
            alert(getDataSucceedNotification);
            window.location.href=BaseUrl;
        };
    
        var onErrorChangeInquiryStatus = (getDataErrorNotification) => {
            alert(getDataErrorNotification);
        };

        return {
            init: init
        }
    })();

    proceedToCart.init();
    changeInquiryStatus.init();
    viewDetailInquiry.init();
            
})(jQuery);

