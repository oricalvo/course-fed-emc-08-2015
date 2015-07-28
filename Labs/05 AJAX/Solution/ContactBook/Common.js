function inherit(derived, base) {
    derived.prototype = Object.create(base.prototype);
}
