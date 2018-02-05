$(document).ready(function() {

  var d = new Date();
    var n = d.getHours();
    if (n > 19 || n < 6)
      $("#mainImage").addClass("night");
    else if (n > 16 && n < 19)
      $("#mainImage").addClass("sunset");
    else
      $("#mainImage").addClass("day");

});
