var editShipmentReference = (function(){

    const EDIT_SHIPMENT_REFERENCE_BUTTON_CLASS      = ".editShipmentReference",
    SHIPMENT_REFERENCE_DETAIL_FORM                  = "#ShipmentReferenceDetail",
    SHIPMENT_REFERENCE_FORM                         = "#ShipmentReference",
    SHIPMENT_REFERENCE_BUTTON_UPDATE                = "Update",
    SHIPMENT_REFERENCE_BUTTON_CLASS                 = ".shipmentReferenceButton",
    SHIPMENT_REFERENCE_BUTTON_ADD_CLASS             = "updateShipmentReference",
    SHIPMENT_REFERENCE_SHOW_URL                     = "/order/show_form_order_shipment_reference/",
    SHIPMENT_REFERENCE_ID_ATTRIBUTE                 = "shipmentReferenceId",
    GET_DATA_ERROR_NOTIFICATION                     = "Sorry, The data cannot be loaded for a moment.",
    CLICK_EVENT_LISTENER_IDENTIFIER                 = "click";

    var init = () => {
        initDom();
        initEventListener();
    };

    var initDom = () => {            
        clickEventListenerIdentifier        = CLICK_EVENT_LISTENER_IDENTIFIER;
        shipmentReferenceShowUrl            = SHIPMENT_REFERENCE_SHOW_URL;
        editShipmentReferenceButtonClass    = $(EDIT_SHIPMENT_REFERENCE_BUTTON_CLASS);
        shipmentReferenceDetailForm         = SHIPMENT_REFERENCE_DETAIL_FORM;
        shipmentReferenceForm               = SHIPMENT_REFERENCE_FORM;
        shipmentReferenceIdAttribute        = SHIPMENT_REFERENCE_ID_ATTRIBUTE;
        shipmentReferenceButtonClass        = SHIPMENT_REFERENCE_BUTTON_CLASS;
        shipmentReferenceButtonUpdate       = SHIPMENT_REFERENCE_BUTTON_UPDATE;
        getDataErrorNotification            = GET_DATA_ERROR_NOTIFICATION;
    };

    var initEventListener = () => {           
        editShipmentReferenceButtonClass.on(clickEventListenerIdentifier, function(){
            getShipmentReferenceData($(this).attr(shipmentReferenceIdAttribute));
        });
    };

    var getShipmentReferenceData = (shipmentReferenceIdAttribute) => {
        var shipmentReferenceControllerUrl = BaseUrl + shipmentReferenceShowUrl + shipmentReferenceIdAttribute;
        $.get(shipmentReferenceControllerUrl, function(data){
            if(data){
                onSuccessGetShipmentReferenceData(data);
            } else {
                onSuccessGetShipmentReferenceData(getDataErrorNotification);
            }
        });
    };

    var onSuccessGetShipmentReferenceData = (data) => {
        $(shipmentReferenceDetailForm).val(data.shipmentReferenceDetail);
        $(shipmentReferenceForm).val(data.shipmentReference);
        $(shipmentReferenceButtonClass).val(shipmentReferenceButtonUpdate);
    };

    var onErrorGetOrderStatusData = (getDataErrorNotification) => {
        alert(getDataErrorNotification);
    };

    return {
        init: init
    }
})();

var deleteShipmentReference = (function(){
    
    const DELETE_SHIPMENT_REFERENCE_BUTTON_CLASS     = ".deleteShipmentReference",
    SHIPMENT_REFERENCE_STATUS_ATTRIBUTE              = "shipmentReferenceId",
    DELETE_DATA_SUCCESS_NOTIFICATION                 = "Data Delete Succeed.",
    SHIPMENT_REFERENCE_DELETE_URL                    =  "/order/delete_order_shipment_reference/",
    GET_DATA_ERROR_NOTIFICATION                      = "Sorry, The data cannot be loaded for a moment.",
    DELETE_DATA_ERROR_NOTIFICATION                   = "Sorry, The data cannot be deleted for a moment.",
    CLICK_EVENT_LISTENER_IDENTIFIER                  = "click";

    var init = () => {
        initDom();
        initEventListener();
    };

    var initDom = () => {            
        clickEventListenerIdentifier        = CLICK_EVENT_LISTENER_IDENTIFIER;
        shipmentReferenceAttribute          = SHIPMENT_REFERENCE_STATUS_ATTRIBUTE;
        shipmentReferenceDeleteUrl          = SHIPMENT_REFERENCE_DELETE_URL;
        getDataErrorNotification            = GET_DATA_ERROR_NOTIFICATION;
        deleteDataSuccessNotification       = DELETE_DATA_SUCCESS_NOTIFICATION;
        deleteDataErrorNotification         = DELETE_DATA_ERROR_NOTIFICATION;
        deleteShipmentReferenceButton       = $(DELETE_SHIPMENT_REFERENCE_BUTTON_CLASS);
        deleteShipmentReferenceUpdate       = $(deleteShipmentReferenceButton).parent().parent();
    };

    var initEventListener = () => {
        deleteShipmentReferenceButton.on(clickEventListenerIdentifier, function(){
            deleteShipmentReference($(this).attr(shipmentReferenceAttribute));
        });
    };

    var deleteShipmentReference = (shipmentReferenceAttribute) => {
        var shipmentReferenceControllerUrl = BaseUrl + shipmentReferenceDeleteUrl+shipmentReferenceAttribute;
        $.get(shipmentReferenceControllerUrl, function(data){
            if(data){
                console.log(data);
                onSuccessDeleteShipmentReferenceData(data);
            } else {
                onErrorDeleteShipmentReferenceData(getDataErrorNotification);
            }
        });
    };

    var onSuccessDeleteShipmentReferenceData = (data) => {
        alert(deleteDataSuccessNotification);
    };

    var onErrorDeleteShipmentReferenceData = (deleteDataErrorNotification) => {
        alert(deleteDataErrorNotification);
    };

    return {
        init: init
    }
})();