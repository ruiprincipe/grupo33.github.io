var time = 500;

$(document).ready(function(){
  $("#alcateia").hide();
  $("#tes").hide();
  $("#tex").hide();
  $("#cla").hide();
});
  
$("#alcateia-button").click(function(){
  $("#tes:visible").fadeOut(time);
  $("#tex:visible").fadeOut(time);
  $("#cla:visible").fadeOut(time); 
  $("#alcateia:visible").delay(time).fadeOut(time);
  $("#alcateia:hidden").delay(time).fadeIn(time);
});

$("#tes-button").click(function(){
  $("#alcateia:visible").fadeOut(time);
  $("#tex:visible").fadeOut(time);
  $("#cla:visible").fadeOut(time);
  $("#tes:visible").fadeOut(time).fadeOut(time);
  $("#tes:hidden").delay(time).fadeIn(time);
});

$("#tex-button").click(function(){
  $("#alcateia:visible").fadeOut(time);
  $("#tes:visible").fadeOut(time);
  $("#cla:visible").fadeOut(time);
  $("#tex:visible").delay(time).fadeOut(time);
  $("#tex:hidden").delay(time).fadeIn(time);
});

$("#cla-button").click(function(){
  $("#alcateia:visible").fadeOut(time);
  $("#tes:visible").fadeOut(time);
  $("#tex:visible").fadeOut(time);
  $("#cla:visible").delay(time).fadeOut(time);
  $("#cla:hidden").delay(time).fadeIn(time);
});