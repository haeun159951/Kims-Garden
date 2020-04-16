/** Add any JavaScript you need to this file. */

function hideLists() {
  let gardenProducts = document.getElementsByClassName('garden');
  Object.entries(gardenProducts).forEach(entry => {
    entry[1].style.display = 'none';
  });
}

function showLists(productID) {
  let gardenProduct = document.getElementById(productID);
  gardenProduct.style.display = 'block';
}

/*1. nav - tree*/
document.getElementById('tree-link').addEventListener('click', function() {
  hideLists();
  showLists('tree-cards');
});

/*2. nav - flower*/
document.getElementById('flower-link').addEventListener('click', function() {
  hideLists();
  showLists('flower-cards');
});
/*3. nav - tool*/
document.getElementById('tool-link').addEventListener('click', function() {
  hideLists();
  showLists('tool-cards');
});
/*4. nav - produce*/
document.getElementById('produce-link').addEventListener('click', function() {
  hideLists();
  showLists('produce-cards');
});
