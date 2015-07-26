var Network = (function () {

    var baseAddress;

    return {
        get: function (url) {
            console.log("httpGet: " + url);
        },

        post: function (url) {
            console.log("httpPost: " + url);
        }
    };

})();

