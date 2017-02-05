var Service = (function () {
    //var params = "lorem=ipsum&name=binny";
    var namesOption = [];
    
    function getData(url, data) {
        data = data ? data : "";
        
        var settings = {
            "type": "GET",
            "url": url,
            "data": data
        };
        
        return $.ajax(settings);
    }
    
    function modifyData(requestType, url, data) {
        var settings = {
            "type": requestType,
            "url": url,
            "data": data
        };
        
        return $.ajax(settings);
    }
    
    function deleteData(url, data) {
        if (data) {
            var settings = {
                "type": "DELETE",
                "url": url + "?" + data
            };
            
            return $.ajax(settings);
        }
        
        return null;
    }
    
    function options(currentData) {
        var dfd = $.Deferred();
        var settings = {
            dom: "Bfrtip", 
            columns: [
                {
                    data: null, render: function (data, type, row) {
                        return "<input type=\"checkbox\" />";
                    }
                },
                { data: "ID", title: "Id" },
                { data: "Name", title: "Name" },
                { data: "Age", title: "Age" }
            ],
            select: true,
            pageLength: 6,
            drawCallback: function (data) {
                namesOption = [];
                for (var i = 0; i < currentData.length; i++) {
                    namesOption.push(currentData[i]["Name"]);
                };
                
                $("#loginSubmit").unbind();
                $("#loginSubmit").on("click", function (e) {
                    var usernameValue = $("input[name=\"username\"]").val();
                    if (namesOption.indexOf(usernameValue) == -1) {
                        // Username not equal
                        $("#modal").modal("toggle");
                        return false;    
                    }                    
                });
            }
        }
        
        dfd.resolve(settings);
        return dfd;
    }
    
    return {
        getData: getData,
        modifyData: modifyData,
        deleteData: deleteData,
        options: options
    }
}());