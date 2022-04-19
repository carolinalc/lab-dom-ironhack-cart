// ITERATION 1


  function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');

  let price = product.querySelector('.price span');
  let prices=price.innerHTML
  let quantity = product.querySelector('.quantity input');
  let quantitys=quantity.value
  let total =prices * quantitys ;
  
  let subtotalDOM = product.querySelector('.subtotal span');
  subtotalDOM.innerHTML = total
  return total
  //console.log(total);
}



function calculateAll(product) {
 

  let precioTotal = document.querySelector("#total-value span")

  let calcularTodos = document.querySelectorAll(".product")

   let counter= 0;
  
   calcularTodos.forEach((eachProduct) => {
      
     let superTotal = updateSubtotal(eachProduct)
     counter = superTotal + counter;
  })
   
return precioTotal.innerHTML = counter;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}


window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
