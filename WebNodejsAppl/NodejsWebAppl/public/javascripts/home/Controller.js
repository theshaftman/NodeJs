var Controller = (function () {
    var tableId = "getTable";
    var model = new ViewModel();

    function init() {
        model.loadTable(tableId);
    }

    return {
        init: init
    }
}());