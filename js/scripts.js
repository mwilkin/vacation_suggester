//Business logic:




//User Interface logic:

$(document).ready(function() {
 $("#quiz").submit(function(event) {
   event.preventDefault();
   var weather = $("submit:radio[name=weather]:checked").val();
   var location = $("submit:radio[name=location]:checked").val();
   var city = $("submit:radio[name=city]:checked").val();
   var active = $("submit:radio[name=active]:checked").val();
   var cheap = $("submit:radio[name=cheap]:checked").val();
   alert("I am here");
   if (weather) {
// stuck here. trying to sort out how to build the conditional questions

   $(".quiz").hide();
   $(".result").show();

    } else {
      alert("Please answer all of the questions before submitting.");
    };

    $(".result button").click(function(event) {
      event.preventDefault();
      $(".result").hide();
      $(".quiz").show();
    });

 });
});
