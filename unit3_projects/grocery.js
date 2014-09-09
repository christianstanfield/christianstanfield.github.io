

$(document).ready(function() {
  $('#addButton').click(function() {
    var item = $('input[name=addItem]').val();
    var quantity = $('input[name=addQuantity]').val();
    var aisle = $('input[name=addAisle]').val();
    $('.groceryList').append('<div class="item"> <input type="checkbox" style="display: inline" /> <p style="display: inline">' + quantity + ' ' + item + ' in the ' + aisle + ' aisle.</p></div>');
  });
});

$(document).on('click','.item', function() {
  $(this).fadeOut('slow');
});


// var groceryList = {};

// groceryList.add = function(item, quantity, aisle) {
//   this[item] = {quantity: quantity, aisle: aisle};
// }

// groceryList.remove = function(item) {
//   delete this[item];
// }

// groceryList.changeQuantity = function(item, quantity) {
//   this[item]["quantity"] = quantity;
// }

// var show = function(obj) {
// 	console.log("Your grocery list:");
//   for (prop in obj) {
//   	if (!(obj[prop] instanceof Function)) {
//   		console.log("> " + obj[prop]["quantity"] + " " + prop + " in the " + obj[			prop]["aisle"] + " aisle.");
//   	}
//   }
// }