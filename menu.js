function orderPerfume(perfumeName) {
    document.getElementById('selected-perfume').innerText = perfumeName;
    document.getElementById('order-modal').style.display = 'flex';
  }
  
  // Function to close the modal
  function closeModal() {
    document.getElementById('order-modal').style.display = 'none';
  }
  
  // Handling form submission
  document.getElementById('order-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from refreshing the page
    
    const email = document.getElementById('email').value;
    const creditCard = document.getElementById('credit-card').value;
  
    if (email && creditCard) {
      alert('Order successfully submitted! We will process your order shortly.');
      closeModal(); // Close the modal after submission
    } else {
      alert('Please fill in both email and credit card details.');
    }
  });