$(function () {
  $(".create-form").on("submit", function (event) {
    event.preventDefault();

    let newBurger = {
      burger_name: $("#burg").val().trim(),
      devoured: 0
    };

    console.log(newBurger);
    // Send the POST request
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

  // Send the PUT request
  $(".devour-burger").on("click", function (event) {
    console.log("trying to change to devoured");
    event.preventDefault;
    let id = $(this).data("id");

    console.log(id);
    let devour = true;
    // let devour = $(this).data("devoured");
    let newState = { devoured: devour };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      id: id,
      data: newState  // did have true here
    }).then(
      function () {
        console.log("changed devoured status to", newState);
        // console.log("changed devoured status to", true);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});
