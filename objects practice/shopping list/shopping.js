"use strict";

(function () {

    function Product(name, price, expDate) {

        this.id = parseInt(Math.random() * 100000);
        this.name = name;
        this.price = parseFloat(price.toFixed(2));
        this.expirationDate = new Date(expDate);

        this.getInfo = function () {

        var firstLetter = this.name[0];
        var lastLetter = this.name[this.name.length - 1];
        var productCode = firstLetter + lastLetter + this.id;
        return productCode + ", " + this.name + ", " + this.price;
        }
    }

    function ShoppingBag() {

        this.listOfProducts = [];

        this.addProduct = function (product) {
            if (!product && (!product instanceof Product) || Date.now() > product.expirationDate.getTime()) {
                console.log("Input Error!");
                return
            } else {
                return this.listOfProducts.push(product);
            }
        }

        this.calcAverageProductPrice = function () {

            var totalPrice = 0;
            this.listOfProducts.forEach(function (product) {
                totalPrice += product.price;
            })

            return totalPrice / this.listOfProducts.length;
        }

        this.getMostExpensive = function () {
            var max = 0;
            for (var i = 0; i < this.listOfProducts.length; i++) {
                var product = this.listOfProducts[i];
                if (max < product.price) {
                    max = product.price;
                }
            }
            return product.getInfo();
        }

        this.calculateTotalPrice = function () {
            var totalPrice = 0;
            this.listOfProducts.forEach(function (product) {
                totalPrice += product.price;
            })
            return totalPrice;
        }

    }

    function PaymentCard(balance, validUntilDate) {
        
        this.accountBalance = parseFloat(balance.toFixed(2));
        this.validUntilDate = new Date(validUntilDate);
        
        this.isActive = function (){

            return Date.now() < this.validUntilDate.getTime();      
        }

    }

    function checkoutAndBuy(bag, card) {
        var missingMoney = 0; 
        if (card.accountBalance >= bag.calculateTotalPrice() && card.isActive()) {

            console.log("Successful purchase!");
            card.accountBalance = card.accountBalance - bag.calculateTotalPrice();
            
        } else {
            missingMoney = bag.calculateTotalPrice() - card.accountBalance;
          console.log("Unsuccessful purchase, missing money: " + missingMoney + " ,or card expired!");
           
        }
        return card.accountBalance;
    }
    var rest = new Product("rest", 100, "12/12/2018");
    var kiwi = new Product("kiwi", 200, "12/12/2018");
    var lemon = new Product("lemon", 400, "01.05.2019");
    var chocolate = new Product ("chocolate", 300, "05.08.2019")

    var kristinasBag = new ShoppingBag();
    var barbarasBag = new ShoppingBag();
    var kristinasCard = new PaymentCard (50, "01.05.2020" );
    var barbarasCard = new PaymentCard (10000, "01.01.2019");

    kristinasBag.addProduct(kiwi);
    kristinasBag.addProduct(lemon);
    kristinasBag.addProduct(chocolate);
    barbarasBag.addProduct(rest);

    
    checkoutAndBuy(barbarasBag, barbarasCard);
    console.log(barbarasCard.accountBalance);
    

})();
