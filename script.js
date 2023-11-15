function resetCalculator() {
  
    document.getElementById('vat-rate').value = '21';
    document.getElementById('amount').value = '';
    document.getElementById('results').style.display = 'none';
}

document.getElementById('vat-calculator-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var vatRate = document.getElementById('vat-rate').value;
    var amount = document.getElementById('amount').value;

    if (isNaN(amount)) {
        alert('Please enter a valid number for the amount.');
        return;
    }

    var vat = (vatRate / 100) * amount;
    var total = parseFloat(amount) + parseFloat(vat);

    document.getElementById('vat').innerHTML = vat.toFixed(2);
    document.getElementById('total').innerHTML = total.toFixed(2);
    document.getElementById('results').style.display = '';
});
