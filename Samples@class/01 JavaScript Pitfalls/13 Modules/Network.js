var Network = (function () {

    var baseAddress;

    function httpGet(url) {
        console.log("httpGet: " + url);
    }

    function httpPost(url) {
        console.log("httpPost: " + url);
    }

    return {
        get: httpGet,
        post: httpPost,
    };

})();

