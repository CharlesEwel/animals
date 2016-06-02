$(document).ready(function() {
  $("form#animal").change(function(event) {
    event.preventDefault();
    $('#noselection').hide();
    var animal = $("input:radio[name=animal]:checked").val();

    if(animal === "turtle"){
      $('#turtle').show();
      $('#snake').hide();
      $('#insect').hide();
    } else if (animal === "snake"){
      $('#snake').show();
      $('#turtle').hide();
      $('#insect').hide();
    } else if (animal === "insect"){
      $('#insect').show();
      $('#turtle').hide();
      $('#snake').hide();
    }
  });
});
