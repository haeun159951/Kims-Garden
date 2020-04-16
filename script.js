/** Add any JavaScript you need to this file. */

function hideProductLists() {
  let gardenProducts = document.getElementsByClassName('garden');
  Object.entries(gardenProducts).forEach(entry => {
    entry[1].style.display = 'none';
  });
}

let productID;
function showProductList(productID) {
  let gardenProduct = document.getElementById(productID);
  gardenProduct.style.display = 'block';
}
/*1. nav - tree*/
document.getElementById('tree-link').addEventListener('click', function() {
  hideProductLists();
  showProductList('tree-cards');
});
/*2. nav - flower*/
document.getElementById('flower-link').addEventListener('click', function() {
  hideProductLists();
  showProductList('flower-cards');
});
/*3. nav - tool*/
document.getElementById('tool-link').addEventListener('click', function() {
  hideProductLists();
  showProductList('tool-cards');
});
/*4. nav - produce*/
document.getElementById('produce-link').addEventListener('click', function() {
  hideProductLists();
  showProductList('produce-cards');
});

/*Contact -  order problem function*/
function hideOption() {
  let problem = document.getElementById('help-problem');
  let text = document.getElementById('orderNumber');
  if (problem.checked === true) {
    text.style.display = 'block';
  } else {
    text.style.display = 'none';
  }
}

function checkValidate() {
  let form = document.querySelector('#signup-form');
  form.onsubmit = function(event) {
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      event.preventDefault();
      return false;
    }
    return true;
  };
}

window.onload = function() {
  hideOption();
  checkValidate();
  hideProductLists();
  showProductList(productID);
};
