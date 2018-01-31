var deleteOrderInvoice = (function(){

    const DELETE_ORDER_INVOICE_BUTTON_CLASS = ".deleteInvoice",
    ORDER_INVOICE_ATTRIBUTE                 = "orderInvoiceId",
    DELETE_DATA_SUCCESS_NOTIFICATION        = "Data Delete Succeed.",
    GET_DATA_ERROR_NOTIFICATION             = "Sorry, The data cannot be uploaded for now.",
    ORDER_INVOICE_DELETE_URL                =  "/order/delete_order_invoice/",
    DELETE_DATA_ERROR_NOTIFICATION          = "Sorry, The data cannot be deleted for a moment.",
    CLICK_EVENT_LISTENER_IDENTIFIER         = "click";

    var init = () => {
        initDom();
        initEventListener();
    };

    var initDom = () => {            
        deleteOrderInvoiceButton        = $(DELETE_ORDER_INVOICE_BUTTON_CLASS);
        deleteOrderInvoiceUpdate        = $(deleteOrderInvoiceButton).parent().parent();
        orderInvoiceIdAttribute         = $(deleteOrderInvoiceUpdate).attr(ORDER_INVOICE_ATTRIBUTE);
        clickEventListenerIdentifier    = CLICK_EVENT_LISTENER_IDENTIFIER;
        orderInvoiceAttribute           = ORDER_INVOICE_ATTRIBUTE;
        orderInvoiceDeleteUrl           = ORDER_INVOICE_DELETE_URL;
        getDataErrorNotification        = GET_DATA_ERROR_NOTIFICATION;
        deleteDataSuccessNotification   = DELETE_DATA_SUCCESS_NOTIFICATION;
        deleteDataErrorNotification     = DELETE_DATA_ERROR_NOTIFICATION;
    };

    var initEventListener = () => {
        deleteOrderInvoiceButton.on(clickEventListenerIdentifier, function(){
            deleteOrderInvoice($(this).attr(orderInvoiceAttribute));
        });
    };

    var deleteOrderInvoice = (orderInvoiceIdAttribute) => {
        var orderInvoiceControllerUrl = BaseUrl + orderInvoiceDeleteUrl+orderInvoiceIdAttribute;
        $.get(orderInvoiceControllerUrl, function(data){
            if(data){
                onSuccessDeleteOrderInvoiceData(data);
            } else {
                onErrorDeleteOrderInvoiceData(getDataErrorNotification);
            }
        });
    };

    var onSuccessDeleteOrderInvoiceData = (data) => {
        alert(deleteDataSuccessNotification);
    };

    var onErrorDeleteOrderInvoiceData = (deleteDataErrorNotification) => {
        alert(deleteDataErrorNotification);
    };

    return {
        init: init
    }
})();

var editOrderInvoice = (function(){

    const EDIT_ORDER_INVOICE_BUTTON_CLASS   = ".editInvoice",
    ORDER_INVOICE_DESCRIPTION_FORM          = "#orderInvoiceDetail",
    ORDER_INVOICE_DATE                      = "#orderInvoiceDate",
    ORDER_INVOICE_ORDER                     = "#orderInvoiceOrder",
    ORDER_INVOICE_STATUS                    = "#orderInvoiceStatus",
    ORDER_INVOICE_BUTTON_CLASS              = ".orderInvoiceButton",
    ORDER_INVOICE_ID_ATTRIBUTE              = "orderInvoiceId",
    ORDER_INVOICE_BUTTON_UPDATE             = "Update",
    ORDER_INVOICE_BUTTON_UPDATE_CLASS       = "updateInvoice",
    ORDER_INVOICE_BUTTON_ADD_CLASS          = "updateOrderInvoice",
    ORDER_INVOICE_POST_URL                  =  "/order/show_form_order_invoice/",
    GET_DATA_ERROR_NOTIFICATION             = "Sorry, The data cannot be loaded for a moment.",
    CLICK_EVENT_LISTENER_IDENTIFIER         = "click";

    var init = () => {
        initDom();
        initEventListener();
    };

    var initDom = () => {            
        getDataErrorNotification        = GET_DATA_ERROR_NOTIFICATION;
        clickEventListenerIdentifier    = CLICK_EVENT_LISTENER_IDENTIFIER;
        orderInvoicePostUrl             = ORDER_INVOICE_POST_URL;
        orderInvoiceDescriptionForm     = ORDER_INVOICE_DESCRIPTION_FORM;
        orderInvoiceDate                = ORDER_INVOICE_DATE;
        orderInvoiceOrder               = ORDER_INVOICE_ORDER;
        orderInvoiceStatus              = ORDER_INVOICE_STATUS;
        orderInvoiceButtonClass         = ORDER_INVOICE_BUTTON_CLASS;
        orderInvoiceButtonUpdateValue   = ORDER_INVOICE_BUTTON_UPDATE;
        editOrderInvoiceButton          = $(EDIT_ORDER_INVOICE_BUTTON_CLASS);
        orderInvoiceIdAttributeIdentifier = ORDER_INVOICE_ID_ATTRIBUTE;
        orderInvoiceButtonAddClass      = ORDER_INVOICE_BUTTON_ADD_CLASS;
        editOrderInvoiceButtonUpdate    = $(editOrderInvoiceButton).parent().parent().parent().children();
        orderInvoiceButtonUpdate        = $(editOrderInvoiceButtonUpdate).parent().parent();
        orderInvoiceIdAttribute         = $(editOrderInvoiceButtonUpdate).attr(ORDER_INVOICE_ID_ATTRIBUTE);
    };

    var initEventListener = () => {           
        editOrderInvoiceButton.on(clickEventListenerIdentifier, function(){
            getOrderInvoiceData($(this).attr(orderInvoiceIdAttributeIdentifier));
        });
    };

    var getOrderInvoiceData = (orderInvoiceIdAttribute) => {
        var orderInvoiceControllerUrl = BaseUrl + orderInvoicePostUrl+orderInvoiceIdAttribute;
        $.get(orderInvoiceControllerUrl, function(data){
            if(data){
                onSuccessGetOrderInvoiceData(data);
            } else {
                onErrorGetOrderInvoiceData(getDataErrorNotification);
            }
        });
    };

    var onSuccessGetOrderInvoiceData = (data) => {
        $(orderInvoiceDescriptionForm).val(data.invoiceDetail);
        $(orderInvoiceDate).val(data.invoiceDate);
        $(orderInvoiceOrder).val(data.orderId);
        $(orderInvoiceStatus).val(data.invoiceStatusId);
        $(orderInvoiceButtonClass).val(orderInvoiceButtonUpdateValue);
        $(orderInvoiceButtonClass).addClass(orderInvoiceButtonAddClass);
        $(orderInvoiceButtonUpdate).removeClass(orderInvoiceButtonClass);
        $(orderInvoiceButtonUpdate).addClass(orderInvoiceButtonUpdate);
    };

    var onErrorGetOrderInvoiceData = (getDataErrorNotification) => {
        alert(getDataErrorNotification);
    };

    return {
        init: init
    }
})();