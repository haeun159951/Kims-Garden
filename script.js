/** Add any JavaScript you need to this file. */

function hideProductLists() {
  let gardenProducts = document.getElementsByClassName('garden');
  Object.entries(gardenProducts).forEach(entry => {
    entry[1].style.display = 'none';
  });
}

let productID;
function showProductLists(productID) {
  let gardenProduct = document.getElementById(productID);
  gardenProduct.style.display = 'block';
}

/*1. nav - tree*/
document.getElementById('tree-link').addEventListener('click', function() {
  hideProductLists();
  showProductLists('tree-cards');
});

/*2. nav - flower*/
document.getElementById('flower-link').addEventListener('click', function() {
  hideProductLists();
  showProductLists('flower-cards');
});
/*3. nav - tool*/
document.getElementById('tool-link').addEventListener('click', function() {
  hideProductLists();
  showProductLists('tool-cards');
});
/*4. nav - produce*/
document.getElementById('produce-link').addEventListener('click', function() {
  hideProductLists();
  showProductLists('produce-cards');
});

