$(document.ready(function(){
$("[type='checkbox']").click(function(){
$(this).parent().toggleClass("active");
});
});
