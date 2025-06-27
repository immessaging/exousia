document.getElementById('payButton').addEventListener('click', function () {
    var email = document.getElementById('email').value;
    var amount = document.getElementById('amount').value;

    var handler = PaystackPop.setup({
        key: 'your-public-key',
        email: email,
        amount: amount * 100, // Amount in kobo
        currency: 'NGN', // Nigerian Naira
        callback: function (response) {
            // Call your backend to verify the payment
            // You need to send the response.reference to your server
            // for verification (backend implementation not shown here)
            console.log(response);
        },
        onClose: function () {
            alert('Payment window closed.');
        }
    });
    handler.openIframe();
});


