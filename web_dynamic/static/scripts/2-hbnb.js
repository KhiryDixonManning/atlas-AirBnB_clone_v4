$(document).ready(function () {
    // Define the API endpoint. changed to localhost for task 3
    const apiUrl = 'http://localhost:5001/api/v1/status/';
    
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
    

});