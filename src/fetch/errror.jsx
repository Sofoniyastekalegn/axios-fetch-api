fetch('https://jsonplaceholder.typicode.com/invalid-url')

  .then(response => {

    if (!response.ok) { // Manually handle non-2xx responses

      throw new Error(`HTTP Error! Status: ${response.status}`);

    }

    return response.json();

  })

  .then(data => console.log(data))

  .catch(error => console.log('Error:', error.message));