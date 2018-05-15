function WebApp (name, url, technologies, license, stars) {
    this.name = name;
    this.url = url;
    this.technologies = technologies;
    this.license = license;
    this.stars = stars;
}

WebApp.prototype.getData = function () {
    return this.name + ", " + this.url + ", " + this.technologies + ", " + this.license + ", " + this.stars;
}

WebApp.prototype.isReact = function () {
    return this.technologies === "react";
}

WebApp.prototype.isCCLicense = function () {
    return this.license === "CC"
}

WebApp.prototype.like = function() {
    return ++ this.stars;
}

WebApp.prototype.showStars = function () {
    return this.stars;
}

function MobileApp(name, platforms, license, stars) {
    this.name = name;
    this.platforms = platforms;
    this.license = license;
    this.stars = stars;
}


MobileApp.prototype = Object.create(WebApp.prototype);
MobileApp.prototype.constructor = MobileApp;

MobileApp.prototype.getData = function () {
    return this.name + ", " + this.platforms + ", " + this.license + ", " + this.stars;
}
MobileApp.prototype.isAndroid = function () {
    return this.platforms === "android";
}

var web = new WebApp ("google", "www.google.com", "not react", "google", 7);
var mob = new MobileApp ("facebook", "mobile", "CC", 4);

console.log(web.getData());
console.log(mob.getData());

