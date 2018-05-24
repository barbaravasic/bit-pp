const body = document.querySelector('body');

for (let i = 0; i < 10; i++) {

    const request = new XMLHttpRequest;
    request.open('GET', 'https://dog.ceo/api/breeds/image/random');


    request.onload = function () {
        const dogResponse = JSON.parse(request.responseText);
        const dogImg = document.createElement('img');
        dogImg.setAttribute('src', dogResponse.message);
        body.appendChild(dogImg);

    }


    request.send();

}


for (let i = 0; i < 10; i++) {
    const ajax = new XMLHttpRequest;
    ajax.open("GET", "http://thecatapi.com/api/images/get?format=xml");

    ajax.onload = function () {
        const xmlDoc = ajax.responseXML;
        const imgUrl = xmlDoc.querySelector("url").textContent;
        const image = document.createElement("img");
        image.setAttribute("src", imgUrl);
        body.appendChild(image);
    }

    ajax.send();
}