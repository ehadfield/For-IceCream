
$(function(){
  var flavors = ["unicorn", "tree bark", "ear wax"];

  flavors.forEach(function(flavor){
    $(".flavors").append("<li>" + flavor + "</li>").val();

  });
});
