// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

    $(".new").click( function(event) {
        let id = $(this).data("id");

        let newDevoured = {
            devoured: true
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevoured
        }).then(
            function() {
                console.log("changed sleep to", newDevoured);
                location.reload();
            }
        );
    });

    $("#add-burger").on("click", function(event) {

        var newBurger = {
            burger_name: $("#burger-name").val().trim(),
            devoured: false
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

});