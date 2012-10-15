window.onload = function () {

    function makeCORSRequest(method, url) {
        var xhr = new XMLHttpRequest();
        if ("withCredentials" in xhr) {
            // XHR for Chrome/Safari/Firefox.
            xhr.open(method, url, true);
        } else if (typeof XDomainRequest != "undefined") {
            // XDomainRequest for IE.
            xhr = new XDomainRequest();
            xhr.open(method, url);
        } else {
            // Browser doesn't support CORS
            xhr = null;
        }
        return xhr;
    }

    var btnGet = document.getElementById("btnGet");
    var txtData = document.getElementById("txtData");

    btnGet.onclick = function () {
        var url = "http://localhost:81/js/serve.js";
        var xhr = makeCORSRequest('GET', url);
        if (!xhr) {
            alert('CORS not supported');
            return;
        }

        // Response handlers.
        xhr.onload = function () {
            var text = xhr.responseText;
            txtData.value = 'CORS request URL: \n' + url + '\n\nCORS Response: \n' + text;
        };

        xhr.onerror = function () {
            alert('Woops, there was an error making the request.');
        };

        xhr.send();
    }

    var btnPost = document.getElementById("btnPost");
    btnPost.onclick = function () {
        //var url = "http://localhost:81/Default.aspx";
        var url = "http://localhost:81/handler.ashx";
        var txtName = document.getElementById("txtName").value;
        var params = 'name=' + txtName;

        var xhr = makeCORSRequest('POST', url);
        if (!xhr) {
            alert('CORS not supported');
            return;
        }

        // Response handlers.
        xhr.onload = function () {
            var text = xhr.responseText;
            txtData.value = 'CORS request URL: \n' + url + '\n\nCORS Response: \n' + text;
        };

        xhr.onerror = function () {
            alert('Woops, there was an error making the request.');
        };
        
        xhr.setRequestHeader("Content-Type", 'application/x-www-form-urlencoded');
        xhr.send(params);
    }

    /*
    var http = new XMLHttpRequest();
    http.open("POST", "http://localhost:81/service/WebService.asmx/GetZuckJsonP", true);
    http.setRequestHeader("Content-Type", "text/plain");
    http.onreadystatechange = function () {
    if (http.readyState == 4) {
    var response = http.responseText;
    document.getElementById('divResult').innerHTML = response;
    }
    }
    http.send();
    */
}