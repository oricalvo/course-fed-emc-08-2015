(function (Group, Contact) {

    var root = new Group("~");

    var friends = new Group("Friends");
    root.add(friends);

    var ori = new Contact("Ori Calvo", "ori@gmail.com");
    root.add(ori);

    var roni = new Contact("Roni", "roni@gmail.com");
    friends.add(roni);

    root.dump();

})(ContactBook.Group, ContactBook.Contact);
