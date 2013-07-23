// Traverse the DOM!

function traverse_dom(search_term) {
  // I want to traverse the dom and find all the divs
  // elements
  var elements = document.getElementsByTagName('div');
  for (var i = 0; i < elements.length; i++) {
    if (elements[i].innerText === search_term) {
      return elements[i];
    }
  }
  return null;
}

