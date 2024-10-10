
// scripts.js


document.getElementById('bookingForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const concert = document.getElementById('concert').value;
    const ticketType = document.getElementById('ticketType').value;
    const quantity = parseInt(document.getElementById('ticketQuantity').value);

    const errorMessage = document.getElementById('errorMessage');
    const summaryConcert = document.getElementById('summaryConcert');
    const summaryTicketType = document.getElementById('summaryTicketType');
    const summaryQuantity = document.getElementById('summaryQuantity');
    const summaryTotalPrice = document.getElementById('summaryTotalPrice');
   

    // Clear previous error messages
    errorMessage.textContent = '';

    // Validation
    if (!concert || !ticketType || quantity < 1) {
        errorMessage.textContent = 'Please fill in all required fields.';
        return;
    }

    // Calculate total price
    let pricePerTicket = ticketType === 'General Admission' ? 80 : 150;
    let totalPrice = pricePerTicket * quantity;

    // Update the booking summary
    summaryConcert.textContent = concert;
    summaryTicketType.textContent = ticketType;
    summaryQuantity.textContent = quantity;
    summaryTotalPrice.textContent = totalPrice;
    document.getElementById('bookingSummary').style.display = 'block';
    document.getElementById('message').textContent = 'Your ticket booking is successfully ';
    setTimeout(function() {
        // Clear the success message
        document.getElementById('message').textContent = '';

    }, 2000);  // 2000 milliseconds = 2 seconds
});