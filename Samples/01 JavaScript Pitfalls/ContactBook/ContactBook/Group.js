var ContactBook = ContactBook || {};

ContactBook.Group = (function (BookItem) {

    function Group(name) {
        BookItem.call(this);

        this.name = name;
        this.items = [];
    }

    Group.prototype = Object.create(BookItem.prototype);

    Group.prototype.add = function (item) {

        if (!(item instanceof BookItem)) {
            throw new Error("item must be of BookItem type");
        }

        item.onAdding(this);

        this.items.push(item);
    }

    Group.prototype.dump = function () {
        console.log(this.name);

        for (var i = 0; i < this.items.length; i++) {
            var item = this.items[i];

            item.dump();
        }
    }

    return Group;

})(ContactBook.BookItem);
