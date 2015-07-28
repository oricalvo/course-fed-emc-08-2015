define([], function () {
    var baseAddress = "???";

    function httpGet(url) {
        console.log("Network.httpGet");
    }

    return {
        httpGet: httpGet,
    };
});
