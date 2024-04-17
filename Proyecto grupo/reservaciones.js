document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('reserve-button').addEventListener('click', function(event) {
        event.preventDefault(); 
 
  
        var checkIn = document.getElementById('check-in').value;
        var checkOut = document.getElementById('check-out').value;
        var guests = document.getElementById('guests').value;

   
        if (checkIn === "" || checkOut === "" || guests === "") {
            alert("Por favor complete todos los campos del formulario.");
            return;
        }

        var whatsappURL = "https://api.whatsapp.com/send/?phone=50494204478&text&type=phone_number&app_absent=0";
        window.location.href = whatsappURL;
    });
});
