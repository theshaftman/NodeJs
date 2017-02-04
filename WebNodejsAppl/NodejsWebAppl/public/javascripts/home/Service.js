var Service = (function () {
    //var params = "lorem=ipsum&name=binny";

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
        
    return {
        getData: getData,
        modifyData: modifyData,
        deleteData: deleteData
    }
}());