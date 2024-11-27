#!/usr/bin/node
$(document).ready(function () {
    // Initialize an empty dictionary to store checked amenities
    const selectedAmenities = {};

    // Event listener for checkbox changes
    $('input[type=checkbox]').change(function () {
        // Get the ID and name of the checkbox that was changed
        const amenityId = $(this).data('id');
        const amenityName = $(this).data('name');

        if (this.checked) {
            // If checked, add the ID and name to the dictionary
            selectedAmenities[amenityId] = amenityName;
        } else {
            // If unchecked, remove the ID from the dictionary
            delete selectedAmenities[amenityId];
        }

        // Update the <h4> tag with the list of checked amenities
        const amenitiesList = Object.values(selectedAmenities).join(', ');
        $('.amenities h4').text(amenitiesList);
    });
});