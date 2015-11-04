
$(document).ready(function(){
$("[type='checkbox']").click(function(){
$(this).parent().toggleClass("active");
});
$("#btn").click(function(){
 var bestBank = $("#bestBank");
  bestBank.html("<h1 id='change'>best bank</h1><p id ="word">this is line</p><button type='button' id='nextBtn'>change h1</button>");
   $("#word").hide();
});
$(document.body).on("click", "#nextBtn", function(){
       $("#change").text("New Example Text");
     
  });
}); 
