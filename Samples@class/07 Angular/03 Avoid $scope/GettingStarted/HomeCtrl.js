(function () {

    function HomeCtrl() {
        this.contacts = [
        ];
    }

    HomeCtrl.prototype.add = function () {
        var contact = { name: this.name };

        this.contacts.push(contact);
    }

    HomeCtrl.prototype.remove = function (index) {
        this.contacts.splice(index, 1);
    }

    angular.module("MyApp").controller("HomeCtrl", HomeCtrl);
})();
