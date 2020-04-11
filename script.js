/** Add any JavaScript you need to this file. */

function hideAllProductList() {
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

document.getElementById('tree-link').addEventListener('click', function() {
  hideAllProductList();
  showProductList('tree-cards');
});

document.getElementById('flower-link').addEventListener('click', function() {
  hideAllProductList();
  showProductList('flower-cards');
});

document.getElementById('tool-link').addEventListener('click', function() {
  hideAllProductList();
  showProductList('tool-cards');
});

document.getElementById('produce-link').addEventListener('click', function() {
  hideAllProductList();
  showProductList('produce-cards');
});

/*Contact function*/

function hide() {
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
    //1. check if the form is valid
    if (!form.checkValidity()) {
      form.classList.add('was-validated');

      event.preventDefault();
      return false;
    }
    return true;
  };
}

window.onload = function() {
  hide();
  checkValidate();
  hideAllProductList();
  showProductList(productID);
};
