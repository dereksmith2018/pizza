// backend
var price = 0;

function Pizza(type,toppings,price) {
  this.type = type;
  this.toppings = toppings;
  this.price = 0;
}

var typeValue = {"thin":10,"regular":12,"deepdish":14}
var toppingsValue = {"cheese":1,"pepperoni":1,"cBacon":1,"sausage":1,"bacon":1,"ham":1,"Mushrooms":1,"jalapeno":1, "peppers":1, "olive":1, "pineapple":1}

Pizza.prototype.getPrice = function() {
  var totalForToppings = 0;
  this.toppings.forEach(function() {
    totalForToppings += toppingsPrice[];
  });

  this.price = (sizePrice[this.type] + totalForToppings);
  return this.price;
}

//user logic

$(document).ready(function() {
  $("form#order").submit(function(event) {
    event.preventDefault();

    var size = $("input[type=radio][name=type]:checked").val();
    var toppings = [];
    $("input[type=checkbox][name=toppings]:checked").each(function() {
      toppings.push($(this).val());
    });

    var newPizza = new Pizza(type,toppings,price);
    newPizza.getPrice();



  });
  $("#answer").click(function(){
    alert("working");
  });
});
