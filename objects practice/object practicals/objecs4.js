// Write a function that creates an object that represents a culinary recipe. Each recipe is described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction. 
// Add a method that prints out all the ingredients necessary for the meal preparation. 
// Add a method that checks if a meal can be prepared for 15 minutes. 
// Add a method that changes the type of cuisine to the given value. 
// Add a method that delete a given ingredient from the list of ingredients.  


function culinaryRecipe (name, type, complexity, ingredients, preparationTime, instruction) {
    var recipe = {
        mealName: name,
        mealType: type,
        complexity: complexity,
        listOfIngredients: ingredients,
        preparingTime: preparationTime,
        preparingInstructions: instruction,

        printIngredients: function() {
            console.log(recipe.listOfIngredients);
        },
        canBePreparedFor15Min: function() {
            return recipe.preparingTime < 15;    
        },
        changeTypeOfCuisine: function(newTypeOfCuisine) {
            return recipe.mealType = newTypeOfCuisine;
        },
        deleteAnIngredient: function (ingredient) {
            var changedListOfIngredients = [];
            for(var i = 0; i < recipe.listOfIngredients.length; i++) {
                if(recipe.listOfIngredients[i] !== ingredient) {
                    changedListOfIngredients[changedListOfIngredients.length] = recipe.listOfIngredients[i];
                } else {
                    continue;
                }

            }

            return recipe.listOfIngredients = changedListOfIngredients;
        }
    }

    return recipe;
}

var newRecipe = culinaryRecipe("Pizza", "Italian Food", "simple",["bacon", "mozzarella", "origano", "ketchup", "olives"], 30, "nesto nesto nesto");
console.log(newRecipe);
console.log(newRecipe.canBePreparedFor15Min());
console.log(newRecipe.printIngredients());
console.log(newRecipe.changeTypeOfCuisine("mexican"));
console.log(newRecipe.deleteAnIngredient("origano"));