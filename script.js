function resetCalculator() {
    document.getElementById('vat-rate').value = '21';
    document.getElementById('amount').value = '';
    document.getElementById('results').style.display = 'none';
}

document.getElementById('vat-calculator-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var vatRate = document.getElementById('vat-rate').value;
    var amountInput = document.getElementById('amount').value;

    // Match both comma and period as decimal separators
    var amount = parseFloat(amountInput.replace(/,/g, '.'));

    if (isNaN(amount)) {
        alert('Please enter a valid number for the amount.');
        return;
    }

    var vat = (vatRate / 100) * amount;
    var total = amount + vat;

    document.getElementById('vat').innerHTML = vat.toFixed(2);
    document.getElementById('total').innerHTML = total.toFixed(2);
    document.getElementById('results').style.display = '';
});
