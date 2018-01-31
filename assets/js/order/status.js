var deleteOrderStatus = (function(){
        
    var deleteOrderStatusButton, 
    deleteOrderStatusUpdate,
    clickEventListenerIdentifier,
    orderStatusAttribute,
    getDataErrorNotification,
    orderStatusDeleteUrl,
    deleteDataSuccessNotification,
    deleteDataErrorNotification,
    orderStatusIdAttribute;

    const DELETE_ORDER_STATUS_BUTTON_CLASS  = ".deleteOrderStatus",
    ORDER_STATUS_ATTRIBUTE                  = "orderStatusId",
    DELETE_DATA_SUCCESS_NOTIFICATION        = "Data Delete Succeed.",
    ORDER_STATUS_DELETE_URL                 = "/order/delete_order_status/",
    GET_DATA_ERROR_NOTIFICATION             = "Sorry, The data cannot be loaded for a moment.",
    DELETE_DATA_ERROR_NOTIFICATION          = "Sorry, The data cannot be deleted for a moment.",
    CLICK_EVENT_LISTENER_IDENTIFIER         = "click";

    var init = () => {
        initDom();
        initEventListener();
    };

    var initDom = () => {         
        clickEventListenerIdentifier    = CLICK_EVENT_LISTENER_IDENTIFIER;   
        getDataErrorNotification        = GET_DATA_ERROR_NOTIFICATION;   
        deleteDataSuccessNotification   = DELETE_DATA_SUCCESS_NOTIFICATION;   
        deleteDataErrorNotification     = DELETE_DATA_ERROR_NOTIFICATION;   
        orderStatusDeleteUrl            = ORDER_STATUS_DELETE_URL;   
        orderStatusAttribute            = ORDER_STATUS_ATTRIBUTE;   
        deleteOrderStatusButton         = $(DELETE_ORDER_STATUS_BUTTON_CLASS);
        deleteOrderStatusUpdate         = $(deleteOrderStatusButton).parent().parent();
        orderStatusIdAttribute          = $(deleteOrderStatusUpdate).attr(ORDER_STATUS_ATTRIBUTE);
    };

    var initEventListener = () => {
        deleteOrderStatusButton.on(clickEventListenerIdentifier, function(){
            deleteOrderStatus($(this).attr(orderStatusAttribute));
        });
    };

    var deleteOrderStatus = (orderStatusIdAttribute) => {
        var orderStatusControllerUrl = BaseUrl + orderStatusDeleteUrl+orderStatusIdAttribute;
        $.get(orderStatusControllerUrl, function(data){
            if(data){
                console.log(data);
                onSuccessDeleteOrderStatusData(data);
            } else {
                onErrorDeleteOrderStatusData(getDataErrorNotification);
            }
        });
    };

    var onSuccessDeleteOrderStatusData = (data) => {
        alert(deleteDataSuccessNotification);
    };

    var onErrorDeleteOrderStatusData = (deleteDataErrorNotification) => {
        alert(deleteDataErrorNotification);
    };

    return {
        init: init
    }
})();

var editOrderStatus = (function(){

    const EDIT_ORDER_STATUS_BUTTON_CLASS    = ".editOrderStatus",
    ORDER_STATUS_DESCRIPTION_FORM           = "#StatusOrderDesc",
    ORDER_STATUS_BUTTON_CLASS               = ".orderStatusButton",
    ORDER_STATUS_ID_ATTRIBUTE               = "orderStatusId",
    ORDER_STATUS_BUTTON_UPDATE              = "Update",
    ORDER_STATUS_BUTTON_UPDATE_CLASS        = "updateStatus",
    ORDER_STATUS_UPDATE_BUTTON_CLASS        = "updateOrderStatus",
    ORDER_STATUS_POST_URL                   = "/order/show_form_order_status/",
    GET_DATA_ERROR_NOTIFICATION             = "Sorry, The data cannot be loaded for a moment.",
    CLICK_EVENT_LISTENER_IDENTIFIER         = "click";

    var init = () => {
        initDom();
        initEventListener();
    };

    var initDom = () => {            
        clickEventListenerIdentifier        = CLICK_EVENT_LISTENER_IDENTIFIER;
        orderStatusDescriptionForm          = ORDER_STATUS_DESCRIPTION_FORM;
        orderStatusButtonClass              = ORDER_STATUS_BUTTON_CLASS;
        orderStatusButtonUpdateClass        = ORDER_STATUS_BUTTON_UPDATE_CLASS;
        orderStatusButtonUpdateValue        = ORDER_STATUS_BUTTON_UPDATE;
        orderStatusIdAttributeIdentifier    = ORDER_STATUS_ID_ATTRIBUTE;
        getDataErrorNotification            = GET_DATA_ERROR_NOTIFICATION;
        orderStatusPostUrl                  = ORDER_STATUS_POST_URL;
        editOrderStatusButton               = $(EDIT_ORDER_STATUS_BUTTON_CLASS);
        editOrderStatusButtonUpdate         = $(editOrderStatusButton).parent().parent().parent().children();
        orderStatusButtonUpdate             = $(editOrderStatusButtonUpdate).parent().parent();
        orderStatusIdAttribute              = $(editOrderStatusButtonUpdate).attr(ORDER_STATUS_ID_ATTRIBUTE);
    };

    var initEventListener = () => {           
        editOrderStatusButton.on(clickEventListenerIdentifier, function(){
            getOrderStatusData($(this).attr(orderStatusIdAttributeIdentifier));
        });
    };

    var getOrderStatusData = (orderStatusIdAttribute) => {
        var orderControllerUrl = BaseUrl + orderStatusPostUrl+orderStatusIdAttribute;
        $.get(orderControllerUrl, function(data){
            if(data){
                onSuccessGetOrderStatusData(data);
            } else {
                onErrorGetOrderStatusData(getDataErrorNotification);
            }
        });
    };

    var onSuccessGetOrderStatusData = (data) => {
        $(orderStatusDescriptionForm).val(data.orderStatusDescription);
        $(orderStatusButtonClass).val(orderStatusButtonUpdateValue);
        $(orderStatusButtonUpdate).removeClass(orderStatusButtonClass);
        $(orderStatusButtonUpdate).addClass(orderStatusButtonUpdateClass);
    };

    var onErrorGetOrderStatusData = (getDataErrorNotification) => {
        alert(getDataErrorNotification);
    };

    return {
        init: init
    }
})();