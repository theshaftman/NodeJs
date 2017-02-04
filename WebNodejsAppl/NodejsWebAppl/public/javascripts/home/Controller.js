var Controller = (function () {
    var model = new ViewModel();

    function init() {
        model.load();
    }

    return {
        init: init
    }
}());