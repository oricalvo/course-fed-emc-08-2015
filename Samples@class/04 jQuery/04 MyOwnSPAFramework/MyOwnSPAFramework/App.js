var MyApp = (function () {

    var classes = {};

    function registerClass(className, ctor) {
        classes[className] = ctor;
    }

    function init() {
        $("[js-class]").each(function () {
            var element = $(this);
            var className = element.attr("js-class");

            var ctor = classes[className];
            if (!ctor) {
                throw new Error("Ctor " + className + " was not found");
            }

            var view = new ctor(element);

            element.data("view", view);
        });

        $("[js-click]").each(function () {
            var element = $(this);

            var methodName = element.attr("js-click");

            var viewElement = element.closest("[js-class]");
            if (!viewElement.length) {
                return;
            }

            var view = viewElement.data("view");

            element.on("click", function () {
                view[methodName]();
            });
        });
    }

    $(function () {
        init();
    });

    return {
        registerClass: registerClass,
    };
})();
