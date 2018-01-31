var deleteOrderStatusInvoice = (function(){

    const DELETE_ORDER_INVOICE_STATUS_BUTTON_CLASS = ".deleteInvoiceStatus",
    ORDER_INVOICE_STATUS_ATTRIBUTE = "orderinvoicestatusid",
    DELETE_DATA_SUCCESS_NOTIFICATION = "Data Delete Succeed.",
    ORDER_INVOICE_STATUS_DELETE_URL =  "/order/delete_order_invoice_status/",
    DELETE_DATA_ERROR_NOTIFICATION = "Sorry, The data cannot be deleted for a moment.",
    GET_DATA_ERROR_NOTIFICATION   = "Sorry, The data cannot be loaded for a moment.",
    CLICK_EVENT_LISTENER_IDENTIFIER = "click";

    var init = () => {
        initDom();
        initEventListener();
    };

    var initDom = () => {            
        clickEventListenerIdentifier = CLICK_EVENT_LISTENER_IDENTIFIER;
        orderInvoiceStatusDeleteUrl = ORDER_INVOICE_STATUS_DELETE_URL;
        orderInvoiceStatusAttribute = ORDER_INVOICE_STATUS_ATTRIBUTE;
        getDataErrorNotification = GET_DATA_ERROR_NOTIFICATION;
        deleteDataErrorNotification = DELETE_DATA_ERROR_NOTIFICATION;
        deleteDataSuccessNotification = DELETE_DATA_SUCCESS_NOTIFICATION;
        deleteOrderInvoiceStatusButton = $(DELETE_ORDER_INVOICE_STATUS_BUTTON_CLASS);
        deleteOrderInvoiceStatusUpdate = $(deleteOrderInvoiceStatusButton).parent().parent();
        orderInvoiceStatusIdAttribute = $(deleteOrderInvoiceStatusUpdate).attr(ORDER_INVOICE_STATUS_ATTRIBUTE);
    };

    var initEventListener = () => {
        deleteOrderInvoiceStatusButton.on(clickEventListenerIdentifier, function(){
            deleteOrderInvoiceStatus($(this).attr(orderInvoiceStatusAttribute));
        });
    };

    var deleteOrderInvoiceStatus = (orderInvoiceStatusIdAttribute) => {
        var orderInvoiceStatusControllerUrl = BaseUrl + orderInvoiceStatusDeleteUrl+orderInvoiceStatusIdAttribute;
        $.get(orderInvoiceStatusControllerUrl, function(data){
            if(data){
                onSuccessDeleteOrderInvoiceStatusData(data);
            } else {
                onErrorDeleteOrderInvoiceStatusData(getDataErrorNotification);
            }
        });
    };

    var onSuccessDeleteOrderInvoiceStatusData = (data) => {
        alert(deleteDataSuccessNotification);
    };

    var onErrorDeleteOrderInvoiceStatusData = (deleteDataErrorNotification) => {
        alert(deleteDataErrorNotification);
    };

    return {
        init: init
    }
})();

var editOrderStatusInvoice = (function(){

    const EDIT_ORDER_INVOICE_STATUS_BUTTON_CLASS = ".editInvoiceStatus",
    ORDER_INVOICE_STATUS_DESCRIPTION_FORM = "#orderStatusInvoiceDesc",
    ORDER_INVOICE_STATUS_BUTTON_CLASS = ".orderStatusInvoiceButton",
    ORDER_INVOICE_STATUS_ID_ATTRIBUTE = "orderInvoiceStatusId",
    ORDER_INVOICE_STATUS_BUTTON_UPDATE = "Update",
    ORDER_INVOICE_STATUS_BUTTON_UPDATE_CLASS = "updateInvoiceStatus",
    ORDER_INVOICE_STATUS_BUTTON_ADD_CLASS = "updateOrderInvoiceStatus",
    ORDER_INVOICE_STATUS_POST_URL =  "/order/show_form_order_invoice_status/",
    GET_DATA_ERROR_NOTIFICATION = "Sorry, The data cannot be loaded for a moment.",
    CLICK_EVENT_LISTENER_IDENTIFIER = "click";

    var init = () => {
        initDom();
        initEventListener();
    };

    var initDom = () => {            
        orderInvoiceStatusDescriptionForm = ORDER_INVOICE_STATUS_DESCRIPTION_FORM;
        orderInvoiceStatusButtonClass = ORDER_INVOICE_STATUS_BUTTON_CLASS;
        orderInvoiceStatusButtonUpdateIdentifier = ORDER_INVOICE_STATUS_BUTTON_UPDATE;
        clickEventListenerIdentifier = CLICK_EVENT_LISTENER_IDENTIFIER;
        orderInvoiceStatusButtonAddClass = ORDER_INVOICE_STATUS_BUTTON_ADD_CLASS;
        orderInvoiceStatusIdAttributeIdentifier = ORDER_INVOICE_STATUS_ID_ATTRIBUTE;
        orderInvoiceStatusButtonUpdateClass = ORDER_INVOICE_STATUS_BUTTON_UPDATE_CLASS;
        getDataErrorNotification = GET_DATA_ERROR_NOTIFICATION;
        orderInvoiceStatusPostUrl = ORDER_INVOICE_STATUS_POST_URL;
        editOrderInvoiceStatusButton = $(EDIT_ORDER_INVOICE_STATUS_BUTTON_CLASS);
        editOrderInvoiceStatusButtonUpdate = $(editOrderInvoiceStatusButton).parent().parent().parent().children();
        orderInvoiceStatusButtonUpdate = $(editOrderInvoiceStatusButtonUpdate).parent().parent();
        orderInvoiceStatusIdAttribute = $(editOrderInvoiceStatusButtonUpdate).attr(ORDER_INVOICE_STATUS_ID_ATTRIBUTE);
    };

    var initEventListener = () => {           
        editOrderInvoiceStatusButton.on(clickEventListenerIdentifier, function(){
            getOrderStatusInvoiceData($(this).attr(orderInvoiceStatusIdAttributeIdentifier));
        });
    };

    var getOrderStatusInvoiceData = (orderInvoiceStatusIdAttribute) => {
        var orderStatusInvoiceControllerUrl = BaseUrl + orderInvoiceStatusPostUrl+orderInvoiceStatusIdAttribute;
        $.get(orderStatusInvoiceControllerUrl, function(data){
            if(data){
                onSuccessGetOrderInvoiceStatusData(data);
            } else {
                onErrorGetOrderInvoiceStatusData(getDataErrorNotification);
            }
        });
    };

    var onSuccessGetOrderInvoiceStatusData = (data) => {
        $(orderInvoiceStatusDescriptionForm).val(data.invoiceStatusDescription);
        $(orderInvoiceStatusButtonClass).val(orderInvoiceStatusButtonUpdateIdentifier);
        $(orderInvoiceStatusButtonClass).addClass(orderInvoiceStatusButtonAddClass);
        $(orderInvoiceStatusButtonUpdate).removeClass(orderInvoiceStatusButtonClass);
        $(orderInvoiceStatusButtonUpdate).addClass(orderInvoiceStatusButtonUpdateClass);
    };

    var onErrorGetOrderInvoiceStatusData = (getDataErrorNotification) => {
        alert(getDataErrorNotification);
    };

    return {
        init: init
    }
})();