const API_URL = 'https://nph770z2xd.execute-api.us-east-2.amazonaws.com/Prod/';

fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    const apiResponseDiv = document.getElementById('api-response');
    apiResponseDiv.textContent = data.body; // Display the API response
  })
  .catch(error => {
    console.error('Error fetching API data:', error);
  });
