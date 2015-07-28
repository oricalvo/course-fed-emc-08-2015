(function () {

    function IndexView(element) {
        this.element = element;
    }

    IndexView.prototype.newContact = function () {
        alert("ddd");
    }

    IndexView.prototype.run = function () {
        alert("xxx");
    }

    MyApp.registerClass("IndexView", IndexView);
})();
