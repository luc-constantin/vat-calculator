document.getElementById('vat-calculator-form').addEventListener
('submit', function(event) {
    event.preventDefault();
    var vatRate = '';
    var vatRate = document.getElementById('vat-rate').value;
       var amount = document.getElementById('amount').value;
    var vat = (vatRate / 100) * amount;
    var total = parseFloat(amount) + parseFloat(vat);
    document.getElementById('vat').innerHTML = vat.toFixed(2);
    document.getElementById('total').innerHTML = total.toFixed(2);
    document.getElementById('results').style.display = '';
  });
