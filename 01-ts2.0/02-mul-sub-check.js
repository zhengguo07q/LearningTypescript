function foo(options) {
    if (options && options.location && options.location.x) {
        var x = options.location.x; // x的类型是number
    }
}
