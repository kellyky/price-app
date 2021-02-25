// Business Logic:
const salesTax = function(taxRate) {
  return 1 + taxRate;
}



// Interface Logic:
$(document).ready(function() {
  $("form#calculator").submit(function(event) {
    event.preventDefault();
    $("#form-results").show();



  })

});
