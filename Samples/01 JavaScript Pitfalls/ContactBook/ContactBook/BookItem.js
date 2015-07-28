var ContactBook = ContactBook || {};

ContactBook.BookItem = (function () {

    function BookItem() {
        this.parent = null;
    }

    BookItem.prototype.onAdding = function (parent) {
        if (this.parent) {
            throw new Error("BookItem is already part of another group");
        }

        this.parent = parent;
    }

    return BookItem;

})();
