//Business logic:




//User Interface logic:

$(document).ready(function() {
 $("#quiz").submit(function(event) {
   event.preventDefault();
   var weather = $("input:radio[name=weather]:checked").val();
   var location = $("input:radio[name=location]:checked").val();
   var city = $("input:radio[name=city]:checked").val();
   var active = $("input:radio[name=active]:checked").val();
   var cheap = $("input:radio[name=cheap]:checked").val();

   if () {

   $(".quiz").hide();
   $(".result").show();

 } else {
   alert("Please answer all of the questions before submitting.");
 }
 });
 $(".result button").click(function(event) {
   event.preventDefault();
   $(".result").hide();
   $(".quiz").show();
 });
 });


 });

});
