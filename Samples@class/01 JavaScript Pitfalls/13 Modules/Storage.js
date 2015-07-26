/// <reference path="Network.js" />

(function (get, post) {
    "use strict";

    x = 12;

    return {
        getAllContacts: function () {
            return get("/api/contact");
        },

        removeContactById: function (contactId) {
            return post("/api/contact/" + contactId);
        }
    };

})(Network.get, Network.post);
