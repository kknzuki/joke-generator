# joke-generator
README

This is a simple joke generator that uses an XHR request to fetch a random joke from an external API.

To use:

    Clone the repository to your local machine.
    Open the index.html file in a web browser.
    Click the "Generate Joke" button.

A random joke will be displayed on the page.

How it works:

The index.html file contains a simple JavaScript script that uses the XMLHttpRequest object to fetch a random joke from the chuck norris Joke API (https://api.chucknorris.io/jokes/random')

When the user clicks the "Generate Joke" button, the JavaScript script sends an XHR request to thechuck norris  Joke API. The API returns a JSON object containing a random joke. The JavaScript script then parses the JSON object and displays the joke on the page.

