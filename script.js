/** Add any JavaScript you need to this file. */

function hideLists() {
  let gardenProducts = document.getElementsByClassName('garden');
  Object.entries(gardenProducts).forEach(entry => {
    entry[1].style.display = 'none';
  });
}

function showLists(productCard) {
  let gardenProduct = document.getElementById(productCard);
  gardenProduct.style.display = 'block';
}

function setupMenuHandlers() {
  document.getElementById('tree-link').addEventListener('click', function() {
    hideLists();
    showLists('tree-cards');
  });

  document.getElementById('flower-link').addEventListener('click', function() {
    hideLists();
    showLists('flower-cards');
  });

  document.getElementById('produce-link').addEventListener('click', function() {
    hideLists();
    showLists('produce-cards');
  });

  document.getElementById('tool-link').addEventListener('click', function() {
    hideLists();
    showLists('tool-cards');
  });
}

window.onload = function() {
  setupMenuHandlers();
};
