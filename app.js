const submit = document.getElementById('sub');
document.querySelector('.alert').style.display = 'none';

function currencyConvert(event) {
    event.preventDefault();
    let amount = document.querySelector('#currencyAmount').value;
    let currency = document.querySelector('#currency').value;
    let totalAmount = '';

    if (amount == '' || currency == '') {
        document.querySelector('.alert').innerHTML = `Please Enter Your Amount`;
        document.querySelector('.alert').style.display = 'block';
    } else {
        if (currency == 'doller') {
            totalAmount = amount * 80;
        } else if (currency == 'pound') {
            totalAmount = amount * 116;
        } else if (currency == 'euro') {
            totalAmount = amount * 97.17;
        } else if (currency == 'rupee') {
            totalAmount = amount * 1.15;
        }
        document.querySelector('.result').innerHTML = `${amount}  ${currency} = ${totalAmount} BDT`;
        document.querySelector('.alert').style.display = 'none';
    }
}


submit.addEventListener('click', currencyConvert);