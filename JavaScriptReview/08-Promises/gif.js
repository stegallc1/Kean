// Example queryURL for Giphy API
var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC";


// This is how you can reach out to an API in JavaScript using D3

d3.json(queryURL)
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })

let promise = d3.json(queryURL);

console.log(promise);

// Handling promises using JS async and await keywords (advanced topic)

const promiseFunc = async (url) => {
    let response = await d3.json(url);
    let resolvedResponse = await response;
    // This will console log the results
    console.log(resolvedResponse)
    return resolvedResponse;
}

// This will console log the Promise
console.log(promiseFunc(queryURL));

// Why does async/await exist even if you have to handle the Promise?

// The point is that within the async function, you can write async code
// as if it were synchronous. However, from outside the async function,
// you need to treat the asynchronous result of that function as usual.
// Which is usually not a problem, since you should be only getting asynchronous
// results in your UI logic anyway.

// This is how you can reach out to an API in JavaScript using jQuery

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
});

// This is how you can reach out to an API using the native fetch library in JavaScript

// Basic implementation of GET method

fetch(queryURL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })

// Example GET method implementation using async/await:
async function getData(url) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
    //   mode: 'cors', // no-cors, *cors, same-origin
    //   cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //   credentials: 'same-origin', // include, *same-origin, omit
    //   headers: {
    //     'Content-Type': 'application/json'
    //     // 'Content-Type': 'application/x-www-form-urlencoded',
    //   },
    //   redirect: 'follow', // manual, *follow, error
    //   referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    //   body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

let gifResults = getData(queryURL);

console.log(gifResults);