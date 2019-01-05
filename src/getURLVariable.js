/**
 * Get the value corresponding with a variable in the URL's query string.
 * 
 * @param {String} variable - a variable to get in the URL's query string.
 * @returns the value of the variable.
 * 
 * Assume the URL is "http://www.example.com/index.php?id=1&image=awesome.jpg".
 * The query string is the result of calling "window.location.search"
 * So queryString = "?id=1&image=awesome.jpg".
 * 
 * Calling getQueryVariable("id") - would return "1".
 * Calling getQueryVariable(queryString, "image") - would return "awesome.jpg".
 * 
 * Ref: https://css-tricks.com/snippets/javascript/get-url-variables/
 */
function getURLVariable(variable) {
  const query = window.location.search.substring(1);
  const vars = query.split("&");
  const length = vars.length;

  for (let i = 0; i < length; i++) {
    const pair = vars[i].split("=");
    if (pair[0] === variable) { 
      return pair[1]; 
    }
  }

  return (false);
}

// Export for both Browser and Node.js
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
  module.exports = getURLVariable;
else
  window.getURLVariable = getURLVariable;