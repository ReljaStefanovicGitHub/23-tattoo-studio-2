(function(){
    emailjs.init("RbJnchpjuGU3LF_3h"); // Replace with your actual User ID
 })();
 
 function sendEmail() {
     const email = document.getElementById('email').value;
     const message = document.getElementById('message').value;
     const templateParams = {
         from_email: email,
         to_email: '23tattostudio23@gmail.com',
         message: message,
     };

     emailjs.send('service_ka403lu', 'template_ny20fd9', templateParams) // Replace with your actual Service ID and Template ID
         .then(function(response) {
            swal({
                title: "Hvala na kontaktiranju!",
                text: "Email je uspešno poslat",
                icon: "success",
                button: "Nastavi",
            });
         }, function(error) {
            swal({
                title: "Greška!",
                text: "Greška pri slanju email-a",
                icon: "success",
                button: "Pokušaj opet",
            });
         });
 }