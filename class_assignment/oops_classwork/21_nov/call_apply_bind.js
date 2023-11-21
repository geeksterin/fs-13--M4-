// pollyfill of map,filter,reduce,call,apply and bind

Array.prototype.myMap = function (callback) {
    const ans = [];
    for (let i = 0; i < this.length; i++) {
        ans.push(callback(this[i], i, this));
    }
    return ans;
}
Array.prototype.myFilter = function (callback) {
    const ans = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this))
            ans.push(this[i]);
    }
    return ans;
}

Array.prototype.myReduce = function (callback, acc) {

    for (let i = 0; i < this.length; i++) {
        if (acc === undefined) acc = this[i];
        else
            acc = callback(acc, this[i]);
    }
    return acc;
}

Function.prototype.myCall = function (contextObject, ...args) {
    const key = Symbol('key');
    contextObject[key] = this;
    contextObject[key](...args)
    delete contextObject[key];
}

Function.prototype.myApply = function (contextObject, ...args) {

}

Function.prototype.myBind = function (contextObject, ...args) {
    const fun = this;
    return function boundedFunction() {
        const key = Symbol('key');
        return contextObject[key](...args);
    }
}