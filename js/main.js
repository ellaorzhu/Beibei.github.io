
$(document).ready(function(){
$("[type='checkbox']").click(function(){
$(this).parent().toggleClass("active");
});
$("#btn").click(function(){
 var bestBank = $("#bestBank");
  bestBank.html("<h1>best bank</h1><p>this is line</p>");
  });
});
$(document.body).on("click", "#nextBtn", function(){
       $("#change").text("New Example Text");
  });
 });
