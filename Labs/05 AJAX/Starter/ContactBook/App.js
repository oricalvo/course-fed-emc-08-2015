(function ($) {

    $(function () {

        var viewModel = {
            items: ko.observableArray([]),
        };

        var page1 = $(".page1");
        ko.applyBindings(viewModel, page1[0]);

        $.ajax({
            type: "GET",
            url: "/items.html",
            dataType: "json",
            success: function (items) {
                console.log("SUCCESS");

                viewModel.items(items);
            },
            error: function () {
                console.log("ERROR");
            }
        });
    });

})(jQuery);
