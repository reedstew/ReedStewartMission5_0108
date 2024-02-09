// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(document).ready(function () {
    $('#calculate').click(function () {
        var hours = $('#hours').val();
        var rate = 50; // Fixed hourly rate

        // Check if the number of hours is filled
        if (hours !== "") {
            if (hours >= 0) {
                // Calculate total cost
                var totalCost = hours * rate;
            }

            // Display result
            $('#result').text('Total Cost: $' + totalCost.toFixed(2));
        } else {
            // Display error message if the number of hours is empty
            $('#result').text('Please enter the number of hours.');
        }
    });
});
