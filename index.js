// Write your code here!// Remove the main#main element
const main = document.getElementById('main');
if (main) {
  main.remove();
}

// Create a new h1 element
const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.textContent = 'YOUR-NAME is the champion'; // Replace YOUR-NAME

// Append the new h1 to the body
document.body.append(newHeader);