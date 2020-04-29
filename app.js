var uiController = (function() {

})();

var financeController = (function() {

})();

var appController = (function(uiCntrl, fnCntrl) {
    var ctrlAddItem = function() {

    }
    document.querySelector('.add__btn').addEventListener('click', function() {
        ctrlAddItem();
    });
    document.addEventListener('keypress', function(event) {
        if (event.keyCode === 13) {
            ctrlAddItem();
        }
    });
})(uiController, financeController);