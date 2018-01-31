var deleteOrder = (function(){

    const DELETE_ORDER_STATUS_BUTTON_CLASS  = ".deleteOrderStatus",
    ORDER_STATUS_ATTRIBUTE                  = "orderStatusId",
    DELETE_DATA_SUCCESS_NOTIFICATION        = "Data Delete Succeed.",
    ORDER_STATUS_DELETE_URL                 =  "/order/delete_order_status/",
    GET_DATA_ERROR_NOTIFICATION             = "Sorry, The data cannot be loaded for a moment.",
    DELETE_DATA_ERROR_NOTIFICATION          = "Sorry, The data cannot be deleted for a moment.",
    CLICK_EVENT_LISTENER_IDENTIFIER         = "click";

    var init = () => {
        initDom();
        initEventListener();
    };

    var initDom = () => {            
        clickEventListenerIdentifier    = CLICK_EVENT_LISTENER_IDENTIFIER;
        orderStatusAttribute            = ORDER_STATUS_ATTRIBUTE;
        orderStatusDeleteUrl            = ORDER_STATUS_DELETE_URL;
        getDataErrorNotification        = GET_DATA_ERROR_NOTIFICATION;
        deleteDataSuccessNotification   = DELETE_DATA_SUCCESS_NOTIFICATION;
        deleteDataErrorNotification     = DELETE_DATA_ERROR_NOTIFICATION;
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

var editOrder = (function(){

    const EDIT_ORDER_BUTTON_CLASS       = ".editOrder",
    ORDER_TOTAL_PRICE_FORM              = "#OrderTotalPrice",
    ORDER_DATE_FORM                     = "#OrderDate",
    ORDER_CART_FORM                     = "#Cart",
    ORDER_STATUS_FORM                   = "#OrderStatus",
    ORDER_PRODUCT_WEIGHT_FORM           = "#OrderProductWeight",
    ORDER_SHIPMENT_DETAIL_FORM          = "#ShipmentDetail",
    ORDER_BUTTON_UPDATE                 = "Update",
    ORDER_BUTTON_CLASS                  = ".orderButton",
    ORDER_BUTTON_ADD_CLASS              = "updateOrder",
    ORDER_SHOW_URL                      = "/order/show_form_order/",
    ORDER_ID_ATTRIBUTE                  = "orderId",
    GET_DATA_ERROR_NOTIFICATION         = "Sorry, The data cannot be loaded for a moment.",
    CLICK_EVENT_LISTENER_IDENTIFIER     = "click";

    var init = () => {
        initDom();
        initEventListener();
    };

    var initDom = () => {            
        clickEventListenerIdentifier        = CLICK_EVENT_LISTENER_IDENTIFIER;
        orderShowUrl                        = ORDER_SHOW_URL;
        editOrderButtonClass                = $(EDIT_ORDER_BUTTON_CLASS);
        orderTotalPriceForm                 = ORDER_TOTAL_PRICE_FORM;
        orderDateForm                       = ORDER_DATE_FORM;
        orderCartForm                       = ORDER_CART_FORM;
        orderStatusForm                     = ORDER_STATUS_FORM;
        orderIdAttribute                    = ORDER_ID_ATTRIBUTE;
        orderButtonClass                    = ORDER_BUTTON_CLASS;
        orderButtonUpdate                   = ORDER_BUTTON_UPDATE;
        orderProductWeightForm              = ORDER_PRODUCT_WEIGHT_FORM;
        orderShipmentDetailForm             = ORDER_SHIPMENT_DETAIL_FORM;
        getDataErrorNotification            = GET_DATA_ERROR_NOTIFICATION;
    };

    var initEventListener = () => {           
        editOrderButtonClass.on(clickEventListenerIdentifier, function(){
            getOrderData($(this).attr(orderIdAttribute));
        });
    };

    var getOrderData = (orderIdAttribute) => {
        var orderControllerUrl = BaseUrl + orderShowUrl+orderIdAttribute;
        $.get(orderControllerUrl, function(data){
            if(data){
                onSuccessGetOrderData(data);
            } else {
                onErrorGetOrderData(getDataErrorNotification);
            }
        });
    };

    var onSuccessGetOrderData = (data) => {
        $(orderTotalPriceForm).val(data.orderProductPriceFull);
        $(orderDateForm).val(data.orderTime);
        $(orderProductWeightForm).val(data.orderProductWeightFull);
        $(orderCartForm).addClass(data.cartId);
        $(orderStatusForm).removeClass(data.orderStatusId);
        $(orderButtonClass).val(orderButtonUpdate);
    };

    var onErrorGetOrderStatusData = (getDataErrorNotification) => {
        alert(getDataErrorNotification);
    };

    return {
        init: init
    }
})();