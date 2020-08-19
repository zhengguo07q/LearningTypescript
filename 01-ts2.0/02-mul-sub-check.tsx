interface Options {
    location: {
        x: number;
        y: number;
    };
}

function foo(options: Options) {
    if (options && options.location && options.location.x) {
        const x = options.location.x;  // x的类型是number
    }
}