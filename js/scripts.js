$(function() {
 $("form#quiz").submit(function(event) {
   event.preventDefault();

   var name = $("input#name").val();
   var date = $("input#date").val();
   var weather = $("submit:radio[name=weather]:checked").val();
   var location = $("submit:radio[name=location]:checked").val();
   var city = $("submit:radio[name=city]:checked").val();
   var active = $("submit:radio[name=active]:checked").val();
   var cost = $("submit:radio[name=cost]:checked").val();
   var total1 = 0;
   var total2 = 0;
   var total3 = 0;

// question 1
   if (weather === "b") {
     total1 += 1;
   } else if (weather === "a") {
     total2 += 1;
   } else if (weather === "c"){
     total3 += 1;
   }

// question 2
   if (location === "b") {
      total1 += 1;
    } else if (location === "c") {
      total2 += 1;
    } else if (location === "a") {
      total3 += 1;
    }

// question 3
   if (city === "c") {
      total1 += 1;
    } else if (city === "a") {
      total2 += 1;
    } else if (city === "b") {
      total3 += 1;
    }

// question 4
    if (active === "c") {
       total1 += 1;
     } else if (active === "b") {
       total2 += 1;
     } else if (active === "a") {
       total3 += 1;
     }

// question 5
   if (cost === "a") {
      total1 += 1;
    } else if (cost === "c") {
      total2 += 1;
    } else if (cost === "b") {
      total3 += 1;
    }

    if (total1 > total2 && total1 > total3) {
      $("#switzerland").show();
      $("#belize").hide();
      $("#rockaway").hide();
    } else if (total2 > total1 && total2 > total3) {
      $("#belize").show();
      $("#switzerland").hide();
      $("#rockaway").hide();
    } else {
      $("#rockaway").show();
      $("#switzerland").hide();
      $("#belize").hide();

    }

    // return text(name);
    // return text(date);

 });
});
