$(function () {

    var routes = {
    };

    var currentView, defaultView;
    defaultView = currentView = $(".view.active");

    $(".view[data-url]").each(function () {
        var view = $(this);

        url = view.attr("data-url");

        routes[url] = view;
    });

    //window.addEventListener("hashchange", function () {
    //    console.log("HASHCHNAGE");
    //});

    window.addEventListener("popstate", function (e) {
        if (!e.state) {
            switchToView(defaultView);
        }
        else {
            var view = routes[e.state.url];
            switchToView(view);
        }
    });

    function switchToView(view) {
        currentView.removeClass("active");
        view.addClass("active");
        currentView = view;
    }

    $("body").on("click", "a", function () {
        var link = $(this);

        var url = link.attr("href");

        var view = routes[url];
        switchToView(view);

        location.hash = url;
        //history.pushState({
        //    url: url,
        //}, null, url);

        return false;
    });

});
