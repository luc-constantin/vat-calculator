
document.addEventListener('DOMContentLoaded', function() {
   var form = document.getElementById('vat-calculator-form');
   var resetButton = document.getElementById('reset-button');
   
   form.addEventListener('submit', function(event) {
       event.preventDefault();

       var vatRate = parseFloat(document.getElementById('vat-rate').value);
       var amountInput = document.getElementById('amount').value;

       // Replace comma with period and parse as float
       var amount = parseFloat(amountInput.replace(',', '.'));

       if (isNaN(amount)) {
           alert('Please enter a valid number for the amount.');
           return;
       }

       var vat = (vatRate / 100) * amount;
       var total = amount + vat;

       document.getElementById('vat').textContent = vat.toFixed(2);
       document.getElementById('total').textContent = total.toFixed(2);
       document.getElementById('results').style.display = 'block';
   });

   resetButton.addEventListener('click', function() {
       document.getElementById('vat-rate').value = '21';
       document.getElementById('amount').value = '';
       document.getElementById('results').style.display = 'none';
   });
});
