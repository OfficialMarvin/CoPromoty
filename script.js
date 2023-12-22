const API_URL = 'https://5b987o7oal.execute-api.us-east-2.amazonaws.com/Prod/';

fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    const apiResponseDiv = document.getElementById('api-response');
    apiResponseDiv.textContent = data.body; // Display the API response text
    console.log('API response:', data); // Log the API response to the console
  })
  .catch(error => {
    console.error('Error fetching API data:', error);
    apiResponseDiv.textContent = 'Error fetching data from API.'; // Display error message
  });
