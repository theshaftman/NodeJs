var ViewModel = function () {
    var self = this;
    self.dataTable;

    //Service.getData(window.location.origin + "/getEmployees")
    //Service.getData(window.location.origin + "/getEmployee", "Id=13");
    //Service.modifyData("POST", window.location.origin + "/createEmployee", { Name: 'Marinel Ivanov', Age: 90 });
    //Service.modifyData("PUT", window.location.origin + "/updateEmployee", { Id: 17, Name: 'Marinel Ivanov', Age: 90 });
    //Service.deleteData(window.location.origin + "/deleteEmployee", "Id=36");
    
    self.loadTable = function (tableId) {
        Service.options().done(function (resp) {
            self.dataTable = $("#" + tableId).DataTable(resp);

            Service.getData(window.location.origin + "/getEmployees").done(function (response) {
                self.dataTable
                    .rows.add(response)
                    .draw()
                    .to$();
            });
        });
    }
}