var deleteShipment = (function(){

    const DELETE_SHIPMENT_BUTTON_CLASS     = ".deleteShipment",
    SHIPMENT_ID_ATTRIBUTE                  = "shipmentId",
    DELETE_DATA_SUCCESS_NOTIFICATION       = "Data Delete Succeed.",
    SHIPMENT_DELETE_URL                    = "/order/delete_order_shipment/",
    GET_DATA_ERROR_NOTIFICATION            = "Sorry, The data cannot be loaded for a moment.",
    DELETE_DATA_ERROR_NOTIFICATION         = "Sorry, The data cannot be deleted for a moment.",
    CLICK_EVENT_LISTENER_IDENTIFIER        = "click";

    var init = () => {
        initDom();
        initEventListener();
    };

    var initDom = () => {            
        deleteDataSuccessNotification   = DELETE_DATA_SUCCESS_NOTIFICATION;
        deleteDataErrorNotification     = DELETE_DATA_ERROR_NOTIFICATION;
        shipmentIdAttributeIdentifier   = SHIPMENT_ID_ATTRIBUTE;
        getDataErrorNotification        = GET_DATA_ERROR_NOTIFICATION;
        shipmentDeleteUrl               = SHIPMENT_DELETE_URL;
        clickEventListenerIdentifier    = CLICK_EVENT_LISTENER_IDENTIFIER;
        deleteShipmentButton            = $(DELETE_SHIPMENT_BUTTON_CLASS);
    };

    var initEventListener = () => {
        deleteShipmentButton.on(clickEventListenerIdentifier, function(){
            deleteShipmentData($(this).attr(shipmentIdAttributeIdentifier));
        });
    };

    var deleteShipmentData = (shipmentIdAttributeIdentifier) => {
        var shipmentControllerUrl = BaseUrl + shipmentDeleteUrl+shipmentIdAttributeIdentifier;
        $.get(shipmentControllerUrl, function(data){
            if(data){
                onSuccessDeleteShipmentData(data);
            } else {
                onErrorDeleteShipmentData(getDataErrorNotification);
            }
        });
    };

    var onSuccessDeleteShipmentData = (data) => {
        alert(deleteDataSuccessNotification);
    };

    var onErrorDeleteShipmentData = (deleteDataErrorNotification) => {
        alert(deleteDataErrorNotification);
    };

    return {
        init: init
    }
})();

var editShipment = (function(){
    
    const EDIT_SHIPMENT_BUTTON_CLASS    = ".editShipment",
    SHIPMENT_ORDER_FORM                 = "#OrderShipmentDate",
    SHIPMENT_REFERENCE_FORM             = "#ShipmentReference",
    SHIPMENT_TRACKING_NUMBER_FORM       = "#ShipmentTrackingNumber",
    SHIPMENT_PRICE_FORM                 = "#ShipmentPrice",
    SHIPMENT_FULL_PRICE_FORM            = "#ShipmentFullPrice",
    SHIPMENT_BUTTON_UPDATE              = "Update",
    SHIPMENT_BUTTON_CLASS               = ".orderShipmentButton",
    SHIPMENT_BUTTON_ADD_CLASS           = "updateShipment",
    SHIPMENT_SHOW_URL                   = "/order/show_form_order_shipment/",
    SHIPMENT_ID_ATTRIBUTE               = "shipmentId",
    GET_DATA_ERROR_NOTIFICATION         = "Sorry, The data cannot be loaded for a moment.",
    CLICK_EVENT_LISTENER_IDENTIFIER     = "click";

    var init = () => {
        initDom();
        initEventListener();
    };

    var initDom = () => {            
        clickEventListenerIdentifier    = CLICK_EVENT_LISTENER_IDENTIFIER;
        shipmentShowUrl                 = SHIPMENT_SHOW_URL;
        editShipmentButtonClass         = $(EDIT_SHIPMENT_BUTTON_CLASS);
        shipmentReferenceForm           = SHIPMENT_REFERENCE_FORM;
        shipmentOrderForm               = SHIPMENT_ORDER_FORM;
        shipmentTrackingNumberForm      = SHIPMENT_TRACKING_NUMBER_FORM;
        shipmentPriceForm               = SHIPMENT_PRICE_FORM;
        shipmentFullPriceForm           = SHIPMENT_FULL_PRICE_FORM;
        shipmentIdAttribute             = SHIPMENT_ID_ATTRIBUTE;
        shipmentButtonClass             = SHIPMENT_BUTTON_CLASS;
        shipmentButtonUpdate            = SHIPMENT_BUTTON_UPDATE;
        getDataErrorNotification        = GET_DATA_ERROR_NOTIFICATION;
    };

    var initEventListener = () => {           
        editShipmentButtonClass.on(clickEventListenerIdentifier, function(){
            getShipmentData($(this).attr(shipmentIdAttribute));
        });
    };

    var getShipmentData = (shipmentIdAttribute) => {
        var shipmentControllerUrl = BaseUrl + shipmentShowUrl + shipmentIdAttribute;
        $.get(shipmentControllerUrl, function(data){
            if(data){
                console.log(data);
                onSuccessGetShipmentData(data);
            } else {
                onSuccessGetShipmentData(getDataErrorNotification);
            }
        });
    };

    var onSuccessGetShipmentData = (data) => {
        $(shipmentOrderForm).val(data.orderId);
        $(shipmentReferenceForm).val(data.shipmentReferenceId);
        $(shipmentTrackingNumberForm).val(data.shipmentTrackingNumber);
        $(shipmentPriceForm).val(data.shipmentPriceItem);
        $(shipmentFullPriceForm).val(data.shipmentFullPrice);
        $(shipmentButtonClass).val(shipmentButtonUpdate);
    };

    var onErrorGetOrderStatusData = (getDataErrorNotification) => {
        alert(getDataErrorNotification);
    };

    return {
        init: init
    }
})();