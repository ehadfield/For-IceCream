
$(function(){
  var flavors = ["unicorn", "tree bark", "ear wax"];
console.log("flavors")
var total =0
var icecream = [];

for(var i = 0; i < flavors.length; i ++){
  total += flavors[i];
    icecream.unshift("<li>" + flavors[i] + "!!!!!!!" + "</li>");
  }
$(".flavors").append(icecream).val();
});
