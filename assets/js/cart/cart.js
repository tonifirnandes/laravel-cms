var viewCartDetail = (function(){
    
    const VIEW_CART_BUTTON_CLASS        = ".viewCart",
    CART_USER_EMAIL_FORM                = "#cartUserEmail",
    CART_USER_NAME_FORM                 = "#cartUserName",
    CART_USER_STATUS_FORM               = "#cartUserStatus",
    CART_PROUCT_TABLE_FORM              = "#cartProductTable",
    CART_AMOUNT_DUE_FORM                = "#amountDue",
    TOTAL_CART_PRICE_FORM               = "#totalCartPrice",
    TOTAL_PRICE_FORM                    = "#totalPrice",
    CART_FORM_CLASS                     = ".cartForm",
    CART_ID_ATTRIBUTE                   = "cartId",
    CART_URL                            = "/cart/show_form_cart/",
    GET_DATA_ERROR_NOTIFICATION         = "Sorry, The data cannot be loaded for a moment.",
    AMOUNT_DUE_TEXT                     = "Amount Due",
    CLICK_EVENT_LISTENER_IDENTIFIER     = "click";
    DOLLAR_IDENTIFIER                   = "$";
    OPEN_ROW_TABLE_IDENTIFIER           = "<tr><td>";
    OPEN_COLUMN_TABLE_IDENTIFIER        = "</td><td>";
    CLOSE_COLUMN_TABLE_IDENTIFIER       = "</td></tr>";
    TOTAL_PRICE_CART                    =   0;

    var init = () => {
        initDom();
        initEventListener();
    };

    var initDom = () => {            
        clickEventListenerIdentifier    = CLICK_EVENT_LISTENER_IDENTIFIER;
        getDataErrorNotification        = GET_DATA_ERROR_NOTIFICATION;
        viewCartButtonClass             = $(VIEW_CART_BUTTON_CLASS);
        dollarIdentifier                = DOLLAR_IDENTIFIER;
        openRowTableIdentifier          = OPEN_ROW_TABLE_IDENTIFIER;
        openColumnTableIdentifier       = OPEN_COLUMN_TABLE_IDENTIFIER;
        closeColumnTableIdentifier      = CLOSE_COLUMN_TABLE_IDENTIFIER;
        amountDueText                   = AMOUNT_DUE_TEXT;
        totalPriceCart                  = TOTAL_PRICE_CART;
        cartUrl                         = CART_URL;
        cartProductTableForm            = $(CART_PROUCT_TABLE_FORM);
        cartUserEmailForm               = $(CART_USER_EMAIL_FORM);
        cartUserNameForm                = $(CART_USER_NAME_FORM);
        cartUserStatusForm              = $(CART_USER_STATUS_FORM);
        cartAmountDueForm               = $(CART_AMOUNT_DUE_FORM);
        totalCartPriceForm              = $(TOTAL_CART_PRICE_FORM);
        totalPriceForm                  = $(TOTAL_PRICE_FORM);
        cartFormClass                   = $(CART_FORM_CLASS);
        cartIdAttribute                 = $(viewCartButtonClass).attr(CART_ID_ATTRIBUTE);

    };

    var initEventListener = () => {           
        viewCartButtonClass.on(clickEventListenerIdentifier, function(){
            getCartData(cartIdAttribute);
        });
    };

    var getCartData = (cartIdAttribute) => {
        var cartControllerUrl = BaseUrl + cartUrl + cartIdAttribute;
        $.get(cartControllerUrl, function(data){
            if(data){
                onSuccessGetCartData(data);
            } else {
                onErrorGetCartData(getDataErrorNotification);
            }
        });
    };

    var onSuccessGetCartData = (data) => {
        cartProductTableForm.html('');
        cartUserEmailForm.html(data[0].customerEmail);
        cartUserNameForm.html(data[0].customerEmail);
        cartUserStatusForm.html(data[0].cartStatus);
        cartAmountDueForm.html(amountDueText+data[0].cartExpireTime);
        $.each(data, function(i , val) {
            totalPriceCart = totalPriceCart + (data[i].cartItemQuantity*data[i].cartItemTotalPrice);
            var row = $(openRowTableIdentifier+ data[i].cartItemQuantity + openColumnTableIdentifier + data[i].productName + openColumnTableIdentifier + data[i].productPartNumber + openColumnTableIdentifier + data[i].productDescription + openColumnTableIdentifier + data[i].cartTime + openColumnTableIdentifier+ dollarIdentifier + data[i].cartItemQuantity*data[i].cartItemTotalPrice +closeColumnTableIdentifier);
            $(cartProductTableForm).append(row);
        });
        totalCartPriceForm.html(dollarIdentifier+totalPriceCart);
        totalPriceForm.html(dollarIdentifier+(10.34+5.80+totalPriceCart));
        cartFormClass.show();
    };

    var onErrorGetCartData = (getDataErrorNotification) => {
        alert(getDataErrorNotification);
    };

    return {
        init: init
    }
})();