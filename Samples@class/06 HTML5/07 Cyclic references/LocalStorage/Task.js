console.log("Worker created");

addEventListener("message", function (e) {
    var command = e.data;

    if (command.type == "isPrime") {
        var num = command.num;

        var res = !!(num % 2);

        var response = {type: "isPrime", result: res};
        postMessage(response);
    }

    console.log("%O", e);
});
