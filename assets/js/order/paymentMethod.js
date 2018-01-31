var editOrderMethodPayment = (function(){

    const EDIT_ORDER_METHOD_PAYMENT_BUTTON_CLASS    = ".editOrderMethodPayment",
    ORDER_METHOD_PAYMENT_DESCRIPTION_FORM           = "#MethodPaymentOrderDesc",
    ORDER_METHOD_PAYMENT_BUTTON_CLASS               = ".paymentMethodButton",
    ORDER_METHOD_PAYMENT_ID_ATTRIBUTE               = "orderMethodPaymentId",
    ORDER_METHOD_PAYMENT_BUTTON_UPDATE              = "Update",
    ORDER_METHOD_PAYMENT_BUTTON_UPDATE_CLASS        = "updateMethodPayment",
    ORDER_METHOD_PAYMENT_BUTTON_ADD_CLASS           = "updateOrderMethodPayment",
    ORDER_METHOD_PAYMENT_POST_URL                   =  "/order/show_form_order_method_payment/",
    GET_DATA_ERROR_NOTIFICATION                     = "Sorry, The data cannot be loaded for a moment.",
    CLICK_EVENT_LISTENER_IDENTIFIER                 = "click";

    var init = () => {
        initDom();
        initEventListener();
    };

    var initDom = () => {            
        clickEventListenerIdentifier                = CLICK_EVENT_LISTENER_IDENTIFIER;
        orderMethodPaymentPostUrl                   = ORDER_METHOD_PAYMENT_POST_URL;
        orderMethodPaymentButtonUpdateClass         = ORDER_METHOD_PAYMENT_BUTTON_UPDATE_CLASS;
        orderMethodPaymentButtonAddClass            = ORDER_METHOD_PAYMENT_BUTTON_ADD_CLASS;
        orderMethodPaymentButtonUpdateIdentifier    = ORDER_METHOD_PAYMENT_BUTTON_UPDATE;
        orderMethodPaymentDescriptionForm           = ORDER_METHOD_PAYMENT_DESCRIPTION_FORM;
        getDataErrorNotification                    = GET_DATA_ERROR_NOTIFICATION;
        orderMethodPaymentButtonClass               = ORDER_METHOD_PAYMENT_BUTTON_CLASS;
        orderMethodPaymentIdAttributeIdentifier     = ORDER_METHOD_PAYMENT_ID_ATTRIBUTE;
        editOrderMethodPaymentButton                = $(EDIT_ORDER_METHOD_PAYMENT_BUTTON_CLASS);
        editOrderMethodPaymentButtonUpdate          = $(editOrderMethodPaymentButton).parent().parent().parent().children();
        orderMethodPaymentButtonUpdate              = $(editOrderMethodPaymentButton).parent().parent();
        orderMethodPaymentIdAttribute               = $(editOrderMethodPaymentButton).attr(ORDER_METHOD_PAYMENT_ID_ATTRIBUTE);
    };

    var initEventListener = () => {           
        editOrderMethodPaymentButton.on(clickEventListenerIdentifier, function(){
            getOrderMethodPaymentData($(this).attr(orderMethodPaymentIdAttributeIdentifier));
        });
    };

    var getOrderMethodPaymentData = (orderMethodPaymentIdAttribute) => {
        var orderMethodPaymentControllerUrl = BaseUrl + orderMethodPaymentPostUrl+orderMethodPaymentIdAttribute;
        $.get(orderMethodPaymentControllerUrl, function(data){
            if(data){
                onSuccessGetMethodPaymentData(data);
            } else {
                onErrorGetOrderMethodPaymentData(getDataErrorNotification);
            }
        });
    };

    var onSuccessGetMethodPaymentData = (data) => {
        $(orderMethodPaymentDescriptionForm).val(data.paymentMethodDescription);
        $(orderMethodPaymentButtonClass).val(orderMethodPaymentButtonUpdateIdentifier);
        $(orderMethodPaymentButtonClass).addClass(orderMethodPaymentButtonAddClass);
        $(orderMethodPaymentButtonUpdate).removeClass(orderMethodPaymentButtonClass);
        $(orderMethodPaymentButtonUpdate).addClass(orderMethodPaymentButtonUpdateClass);
    };

    var onErrorGetOrderMethodPaymentData = (getDataErrorNotification) => {
        alert(getDataErrorNotification);
    };

    return {
        init: init
    }
})();

var deleteOrderPaymentMethod = (function(){

    const DELETE_ORDER_PAYMENT_METHOD_BUTTON_CLASS  = ".deleteOrderMethodPayment",
    ORDER_PAYMENT_METHOD_ATTRIBUTE                  = "paymentmethodid",
    DELETE_DATA_SUCCESS_NOTIFICATION                = "Data Delete Succeed.",
    GET_DATA_ERROR_NOTIFICATION                     =  "Sorry, The data cannot be loaded for a moment.",
    ORDER_PAYMENT_METHOD_DELETE_URL                 =  "/order/delete_order_payment_method/",
    DELETE_DATA_ERROR_NOTIFICATION                  = "Sorry, The data cannot be deleted for a moment.",
    CLICK_EVENT_LISTENER_IDENTIFIER                 = "click";

    var init = () => {
        initDom();
        initEventListener();
    };

    var initDom = () => { 
        clickEventListenerIdentifier    = CLICK_EVENT_LISTENER_IDENTIFIER;           
        orderPaymentMethodDeleteUrl     = ORDER_PAYMENT_METHOD_DELETE_URL;           
        deleteDataSuccessNotification   = DELETE_DATA_SUCCESS_NOTIFICATION;           
        deleteDataErrorNotification     = DELETE_DATA_ERROR_NOTIFICATION;           
        getErrorDataNotification        = GET_DATA_ERROR_NOTIFICATION;           
        orderPaymentMethodAttribute     = ORDER_PAYMENT_METHOD_ATTRIBUTE;           
        deleteOrderPaymentMethodButton  = $(DELETE_ORDER_PAYMENT_METHOD_BUTTON_CLASS);
        deleteOrderPaymentMethodUpdate  = $(deleteOrderPaymentMethodButton).parent().parent();
        orderPaymentMethodIdAttribute   = $(deleteOrderPaymentMethodUpdate).attr(ORDER_PAYMENT_METHOD_ATTRIBUTE);
    };

    var initEventListener = () => {
        deleteOrderPaymentMethodButton.on(clickEventListenerIdentifier, function(){
            console.log(this);
            deleteOrderPaymentMethod($(this).attr(orderPaymentMethodAttribute));
        });
    };

    var deleteOrderPaymentMethod = (orderPaymentMethodIdAttribute) => {
        var orderPaymentMethodControllerUrl = BaseUrl + orderPaymentMethodDeleteUrl+orderPaymentMethodIdAttribute;
        $.get(orderPaymentMethodControllerUrl, function(data){
            if(data){
                console.log(data);
                onSuccessDeleteOrderPaymentMethodData(data);
            } else {
                onErrorDeleteOrderPaymentMethodData(getErrorDataNotification);
            }
        });
    };

    var onSuccessDeleteOrderPaymentMethodData = (data) => {
        alert(deleteDataSuccessNotification);
    };

    var onErrorDeleteOrderPaymentMethodData = (deleteDataErrorNotification) => {
        alert(deleteDataErrorNotification);
    };

    return {
        init: init
    }
})();