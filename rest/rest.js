// var url = "http://localhost:8080/api/v1/users";
// url = "http://localhost:8080/api/v1/users";

// Get all users


var Rest = function (url, separator, response, error, success) {

    this.url = url;
    this.separator = '/';
    this.response = response;
    if (separator !== undefined) {
        // this.selector = selector + 'id=';
        this.separator = separator;
    }
    // this.error = {};
    // this.success = {};
    this.error = error;
    this.success = success;

    var rest = this;

    this.setUrl = function (url) {
        rest.url = url;
    };

    this.setSeparator = function (separator) {
        rest.separator = separator;
    };


    this.setResponse = function (response) {
        rest.response = response;
    };


    this.byMethod = function (method, data) {


        if (method === 'GET') {
            var id = data.id;
            rest.get(id);
        }
        if (method === 'POST') {
            rest.post(data);
        }
        if (method === 'PUT') {
            var id = data.id;
            rest.put(id, data);
        }
        if (method === 'DELETE') {
            var id = data.id;
            rest.delete(id);
        }

    }

    this.all = function () {

        var xhr = createCORSRequest('GET', rest.url);
        if (!xhr) {
            throw new Error('CORS not supported');
        }
        xhr.onload = function () {
            rest.response(xhr, error, success);
        }
        xhr.send(null);
    }


    this.get = function (id) {

        var xhr = createCORSRequest('GET', rest.url + rest.separator + id);
        if (!xhr) {
            throw new Error('CORS not supported');
        }
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.onload = function () {
            rest.response(xhr, error, success);
        }
        try {
            xhr.send(null);
        } catch (err) {
            error(err);
        }
    }

    // create
    this.post = function (data) {

        var xhr = createCORSRequest("POST", rest.url);
        if (!xhr) {
            throw new Error('CORS not supported');
        }
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.onload = function () {
            rest.response(xhr, error, success);
        }
        try {
            xhr.send(rest.getJson(data));
        } catch (err) {
            error(err);
        }
    }

    // update
    this.put = function (id, data) {
        var xhr = createCORSRequest("PUT", rest.url + rest.separator + id);
        if (!xhr) {
            throw new Error('CORS not supported');
        }
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.onload = function () {
            rest.response(xhr, error, success);
        }
        try {
            xhr.send(rest.getJson(data));
        } catch (err) {
            error(err);
        }
    }

    this.delete = function (id) {
        var xhr = createCORSRequest("DELETE", rest.url + rest.separator + id);
        if (!xhr) {
            throw new Error('CORS not supported');
        }
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.onload = function () {
            rest.response(xhr, error, success);
        }
        try {
            xhr.send(null);
        } catch (err) {
            error(err);
        }
    }

    this.getJson = function (data) {
        var json = JSON.stringify(data);
        return json;
    }

    return this;
}

// https://www.html5rocks.com/en/tutorials/cors/
/**
 * @param method
 * @param url
 * @returns {{withCredentials}|XDomainRequest}
 */
function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {

        // Check if the XMLHttpRequest object has a "withCredentials" property.
        // "withCredentials" only exists on XMLHTTPRequest2 objects.
        xhr.open(method, url, true);

    } else if (typeof XDomainRequest != "undefined") {

        // Otherwise, check if XDomainRequest.
        // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
        xhr = new XDomainRequest();
        xhr.open(method, url, true);

    } else {

        // Otherwise, CORS is not supported by the browser.
        xhr = null;

    }
    return xhr;
}
