/// <reference path="typings/angularjs/angular.d.ts" />

class HomeCtrl {
    contacts: Contact[];
    name: string;

    constructor() {
        this.contacts = [
        ];
    }

    add() {
        var contact = { name: this.name };

        this.contacts.push(contact);
    }

    remove(index) {
        this.contacts.splice(index, 1);
    }
}

interface Contact {
    name: string;
}

angular.module("MyApp").controller("HomeCtrl", HomeCtrl);

