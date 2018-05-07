var kristina = {

    name: "Kristina",
    age: 26,
    job: "student",
    hobby: ["reading books", "playing tennis", "traveling"],
    run: function (){
          console.log(kristina.name + " doesn't run!");
    }
 
}

var colors = {

    red: "brick",
    blue: "aqua" 
}

var movies = {

    comedy: "Mr.Bean",
    horror: "Psycho"
}

kristina.mix = [colors, movies];
console.log(kristina);

// kristina.run();

// console.log(kristina.hobby);

var barbara = {

    name: "Barbara",
    age: 26,
    job: "student",
    interests: ["reading books", "making pinatas", "listening to music", "watching movies"],
    cooking: function() {
         console.log(barbara.name + " is not so good at cooking");
    },

    haveFun: function() {
        var result = "";
        for (var i = 0; i < barbara.interests.length; i++) {
        result += barbara.interests[i] + ", ";
        }
        return result;
    }
}

// console.log(barbara.haveFun());
// barbara.cooking();
// console.log(barbara.age);

barbara.music = {
    janisJoplin : "Maybe",
    theDoors: "People are strange"
}

console.log(barbara);
