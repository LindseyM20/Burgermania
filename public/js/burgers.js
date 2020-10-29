$(function () {
  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#ca").val().trim(),
      devoured: $("[name=sleepy]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


  $(".devour-burger").on("click", function (event) {
    var id = $(this).data("id").val();
    // var devoured = $(this).data("devoured");

    // Send the PUT request.
    $.ajax( {
      method: "PUT",
      URL: "/api/burgers/" + id,
      data: true
    }).then(
      function () {
        console.log("changed devoured status to", true);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});