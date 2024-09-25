 fetch('https://jsonplaceholder.typicode.com/users')  // First Fetch: Requesting data from the API
  .then(response => {                                // Handle the response when it arrives (Promise)
    if (!response.ok) {                              // Check if the response status is OK (200–299)
      throw new Error('Failed to fetch users');      // If not, throw an error to stop execution
    }
    return response.json();                         // Convert the response into JSON format (another Promise)
  })
  .then(users => {                                   // Handle the parsed JSON (array of users)
    console.log('Users fetched:', users);            // Log the list of users to the console

    const userId = users[0].id;                      // Extract the ID of the first user
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`); // Fetch specific user data
  })
  .then(response => {                                // Handle the second response
    if (!response.ok) {                              // Check if the response is OK
      throw new Error('Failed to fetch user profile'); // If not, throw an error
    }
    return response.json();                          // Parse the second response as JSON
  })
  .then(userProfile => {                             // Handle the user profile JSON
    console.log('User Profile:', userProfile);       // Log the profile data to the console
  })
  .catch(error => {                                  // Catch any errors that occur in the chain
    console.error('Error:', error);                  // Log the error to the console
  });
