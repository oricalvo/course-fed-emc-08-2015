define([], function () {

    var map = {};

    return {
        register: function (name, instance) {
            if (map[name]) {
                throw new Error("Instance with name: " + name + " is already registered");
            }

            map[name] = instance;
        },

        resolve: function (name) {
            var instance = map[name];
            if (!instance) {
                throw new Error("Instance with name: " + name + " was not found");
            }

            return instance;
        }
    };
});
