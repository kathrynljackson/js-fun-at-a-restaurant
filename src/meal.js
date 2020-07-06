//function nameMenuItem(menuItemName) {console.log('Delicious ' + menuItemName)
//};
//nameMenuItem(chaiItem)
//nameMenuItem(burritoItem)

function nameMenuItem(menuItem){
  return 'Delicious ' + menuItem
}

function createMenuItem(name, price, type){
  console.log(name)
  var foodItem = {
    name: name,
    price: price,
    type: type
  }
return foodItem
};


function addIngredients(){

var ingredients = [];


ingredients.push()

return ingredients.push('cheese')
};








module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}
