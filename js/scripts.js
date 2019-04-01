// $(function() {
//   $("#ice-cream-list").text(function() {
//     var flavors = [];
//     flavors.push("unicorn", "tree bark", "ear wax");
//
//
//     console.log(flavors);
//   });
// });


$(function(){
  var flavors = ["unicorn", "tree bark", "ear wax"];

  // flavors.push(flavors[0], flavors[1], flavors[2])

  flavors.forEach(function(flavor){
    $(".flavors").append("<li>" + flavor + "</li>").val();

  });
});
