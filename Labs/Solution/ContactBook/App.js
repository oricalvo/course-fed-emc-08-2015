(function ($) {

    var ul = $("ul.items-view");

    $(function () {
        updateUI();
    });

    function updateUI() {
        $.ajax({
            url: "http://google.com/items.html",
            type: "GET",
            dataType: "json",
            success: function (items) {
                fillIndex(items);
            },
            error: function () {
                console.log("ERROR");
            },
            cache: false,
        });
    }

    function fillIndex(items) {
        ul.empty();

        items.forEach(function (item) {
            var li = $("<li />");
            ul.append(li);

            var div = $('<div class="selection"><input type="checkbox" /></div>');
            div.appendTo(li);

            var span = $("<span class='title' />");
            span.text(item.name);
            span.appendTo(li);

            if (item.email) {
                $('<span class="sub-title"></span>').text(item.email).appendTo(li);
            }
        });
    }

})(jQuery);

   