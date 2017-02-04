var Service = (function () {
    //var params = "lorem=ipsum&name=binny";

    function getData(url, data) {
        var dfd = $.Deferred();
        data = data ? "?" + data : "";
        var http = new XMLHttpRequest();
        http.open("GET", url + data, true);
        http.onreadystatechange = function () {
            dfd.resolve(http.responseText);
        }
        http.send(null);
        return dfd;
    }
    
    function postData(url, data) {
        var dfd = $.Deferred();
        var http = new XMLHttpRequest();
        http.open("POST", url, true);
        
        //Send the proper header information along with the request
        http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        http.setRequestHeader("Content-length", data.length);
        http.setRequestHeader("Connection", "close");
        
        http.onreadystatechange = function () {
            dfd.resolve(http.responseText);
        }
        http.send(data);

        return dfd;
    }
    
    function putData(url, data) {
        var dfd = $.Deferred();
        var xhr = new XMLHttpRequest();
        xhr.open("PUT", url, true);
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.onreadystatechange = function () {
            dfd.resolve(xhr.responseText);
        }
        xhr.send(data);
        return dfd;
    }
    
    function deleteData(url, data) {
        var dfd = $.Deferred();
        data = data ? "?" + data : "";
        var xhr = new XMLHttpRequest();
        xhr.open("PUT", url, true);
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.onreadystatechange = function () {
            dfd.resolve(xhr.responseText);
        }
        xhr.send(null);
        return dfd;
    }
    
    return {
        getData: getData,
        postData: postData,
        putData: putData,
        deleteData: deleteData
    }
}());