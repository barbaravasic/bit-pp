

Array.prototype.myPop = function () {


    var element = this[this.length - 1];
    this.length = this.length - 1;


    return element;
}






Array.prototype.myPush = function (elements) {

    for (var i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i];
    }

    return this.length;

}


Array.prototype.myJoin = function (el) {
    var newString = "";
    el = el || ", ";

    for (var i = 0; i < this.length; i++) {
            if(i < this.length -1 ) {
                newString += this[i] + el;
            } else {
                newString += this[i];
            }
    }

    return newString;
}


// console.log(a.myJoin("-"))

Array.prototype.myFilter = function (func) {
    var newArray = [];

    for (var i = 0; i < this.length; i++) {
        if (func(this[i], i, this)) {
            newArray[newArray.length] = this[i];
        }
    }

    return newArray;
}

Array.prototype.myMap = function (func) {
    var newArray = [];

    for (var i = 0; i < this.length; i++) {
        var newEl = func(this[i]);
        newArray[newArray.length] = newEl;
    }

    return newArray;
}



Array.prototype.myCopy = function (begin, end) {
    var newArray = [];

    if (typeof begin === "undefined" && typeof end === "undefined") {
        for (var i = 0; i < this.length; i++) {
            newArray[i] = this[i];
        }
    }

    for (var i = 0, y = this.length; i < this.length; i++, y--) {
        if (i >= begin && y <= end) {
            newArray[newArray.length] = this[i];
        }

    }
    return newArray;

}

Array.prototype.myIndexOf = function(element, index) {
    index = index || 0;
    if(index < 0) {
        index = this.length + index;
    }
    for (var i = 0; i < this.length; i++) {
        if(this[i] === element && i >= index) {
            return i;
        } else {
            return -1;
        }
    }
}

var a = [0, 1, 2, 6, 5, 8, 9, 2];

Array.prototype.myLastIndexOf = function(element, index) {
    index = index || this.length - 1;

    for(var i = index; i >= 0; i--) {
        if(this[i] === element) {
            return i;
        } else {
            return -1;
        }
    }
}

// Array.prototype.mySome
// Array.prototype.myEvery

console.log(a.myLastIndexOf(2, 3));