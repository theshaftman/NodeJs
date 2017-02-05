var Controller = (function () {
    var tableId = "getTable";
    var model = new ViewModel();

    function init() {
        model.loadUser();
        model.loadTable(tableId);
    }

    return {
        init: init
    }
}());