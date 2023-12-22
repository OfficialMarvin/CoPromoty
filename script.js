const API_URL = 'https://5b987o7oal.execute-api.us-east-2.amazonaws.com/Prod/';

fetch(API_URL, { mode: 'no-cors' })
  .then(response => {
    if (!response.ok) {
      throw new Error('API request failed');
    }
    return response.text(); // Get the response text
  })
  .then(text => {
    console.log('API response string:', text);
    // Display the string on your webpage
  })
  .catch(error => {
    console.error('Error fetching API data:', error);
  });
