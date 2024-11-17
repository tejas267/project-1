function increaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    quantityInput.value = parseInt(quantityInput.value) + 1;
  }
  
  function decreaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    if (parseInt(quantityInput.value) > 1) {
      quantityInput.value = parseInt(quantityInput.value) - 1;
    }
  }
  
  function addToCart() {
    const quantity = document.getElementById('quantity').value;
    alert(`Added ${quantity} items to your cart!`);
  }
  