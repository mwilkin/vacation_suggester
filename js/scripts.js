$(document).ready(function() {
 $("form#submit").submit(function(event) {
   event.preventDefault();

   var weather = $("submit:radio[name=weather]:checked").val();
   var location = $("submit:radio[name=location]:checked").val();
   var city = $("submit:radio[name=city]:checked").val();
   var active = $("submit:radio[name=active]:checked").val();
   var cheap = $("submit:radio[name=cheap]:checked").val();
   var total1 = 0;
   var total2 = 0;
   var total3 = 0;

// question 1
   if (weather === "warm") {
     total1 += 1;
   } else if (weather === "cold") {
     total2 += 1;
   } else (weather === "no preference"){
     total3 += 1;
   }

// question 2
   if (location === "remote") {
      total1 += 1;
    } else if (location === "near") {
      total2 += 1;
    } else (location === "no preference") {
      total3 += 1;
    }

// question 3
   if (city === "city") {
      total1 += 1;
    } else if (city === "country") {
      total2 += 1;
    } else (city === "no preference") {
      total3 += 1;
    }

// question 4
    if (active === "active") {
       total1 += 1;
     } else if (active === "lazy") {
       total2 += 1;
     } else (active === "no preference") {
       total3 += 1;
     }

// question 5
   if (cost === "expensive") {
      total1 += 1;
    } else if (cost === "cheap") {
      total2 += 1;
    } else (cost === "no preference") {
      total3 += 1;
    }

    if (total1 > total2 && total1 > total3) {
      $("#switzerland").show();
      $("#belize").hide();
      $("#rockaway").hide();
    } if else (total2 > total1 && total2 > total3) {
      $("#switzerland").hide();
      $("#belize").show();
      $("#rockaway").hide();
    } else {
      $("#switzerland").hide();
      $("#belize").hide();
      $("#rockaway").show();
    }

    $(#name).text(name);
    $(#date).text(date);

 });
});
