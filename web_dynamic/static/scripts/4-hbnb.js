$(document).ready(function () {
    const apiUrl = 'http://localhost:5001/api/v1/status/';
    const placesSearchUrl = 'http://localhost:5001/api/v1/places_search/';
    
    // Function to check API status
    function checkApiStatus() {
        $.get(apiUrl, function (data) {
            // If the API status is OK
            if (data.status === 'OK') {
                $('#api_status').addClass('available');
            } else {
                // If the API status is not OK
                $('#api_status').removeClass('available');
            }
        }).fail(function () {
            // Handle request failure (e.g., server not reachable)
            $('#api_status').removeClass('available');
        });
    }
    
    // Call the function to check API status on page load
    checkApiStatus();

    // Task 5: Function to fetch places
    
    // Task 4: Function to fetch places. Use ajax to send a POST request with appropriate headers and an empty dictionary.
    $.ajax({
        url: 'http://localhost:5001/api/v1/places_search/',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({}),
        dataType: 'json',
        success: function(data) {
          $('.places').empty(); // Clear the section before appending new articles
          for (let place of data) { // Loop through each place in the response data
            // Create an article element for each place.
            const article = `
              <article>
                <div class="title">
                  <h2>${place.name}</h2>
                  <div class="price_by_night">${place.price_by_night}</div>
                </div>
                <div class="information">
                  <div class="max_guest">${place.max_guest} Guest${place.max_guest !== 1 ? 's' : ''}</div>
                  <div class="number_rooms">${place.number_rooms} Bedroom${place.number_rooms !== 1 ? 's' : ''}</div>
                  <div class="number_bathrooms">${place.number_bathrooms} Bathroom${place.number_bathrooms !== 1 ? 's' : ''}</div>
                </div>
                <div class="description">
                  ${place.description}
                </div>
              </article>
            `;
            // Append the created article element to the section.places
            $('.places').append(article);
          }
        },
        error: function() {
          console.log('Error');
        }
    });
  });