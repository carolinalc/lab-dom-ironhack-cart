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
  let decreaseNum = () => {
  counter.innerText = Number(counter.innerText) - 1;
}
  let buttonDom = event.querySelector(".btn-remove");
  buttonDom.target.remove("click", decreaseNum);

  return event;
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
