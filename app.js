var uiController = (function() {
    var DomStrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        addBtn: '.add__btn',
    };
    return {
        getInput: function() {
            return {
                type: document.querySelector(DomStrings.inputType).value,
                description: document.querySelector(DomStrings.inputDescription).value,
                value: document.querySelector(DomStrings.inputValue).value,
            };
        },
        getDomStrings: function() {
            return DomStrings;
        }
    };
})();

var financeController = (function() {

})();

var appController = (function(uiController, financeController) {

    var ctrlAddItem = function() {
        console.log(uiController.getInput());
    };


    var setupEventListeners = function() {
        var DOM = uiController.getDomStrings();

        document.querySelector(DOM.addBtn).addEventListener('click', function() {
            ctrlAddItem();
        });
        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    };
    return {
        init: function() {
            console.log('App starting');
            setupEventListeners();
        }
    }
})(uiController, financeController);

appController.init();