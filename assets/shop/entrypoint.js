// In this file you can import assets like images or stylesheets
console.log('Hello Webpack Encore! Edit me in assets/shop/entrypoint.js');

var quantityInput = document.querySelector(
  '.qnty-alert input, input[name="sylius_shop_add_to_cart[cartItem][quantity]"]'
);

quantityInput.addEventListener('change', function() {
  var newValue = quantityInput.value;
  if(newValue == 70){
    alert('Great Choice!');
  }
});
