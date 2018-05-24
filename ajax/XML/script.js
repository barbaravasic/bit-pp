const ajax = new XMLHttpRequest;
ajax.open("GET", "http://thecatapi.com/api/images/get?format=xml");
const body = document.querySelector("body");

ajax.onload = function(){
    const xmlDoc = ajax.responseXML;
    const imgUrl = xmlDoc.querySelector("url").textContent;
    const image = document.createElement("img");
    image.setAttribute("src", imgUrl);
    body.appendChild(image);
}

ajax.send();