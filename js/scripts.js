$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const person1Input = $("input#person1").val();
    $(".person1").text(person1Input);
    $("#story").show();
    $(".to-be-hidden").slideUp();
    event.preventDefault();
  });
});