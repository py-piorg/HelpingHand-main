emailjs.init("Xlf09Ip0Ym9vekvI0");


function rsvp(eventName) {
  // Collect RSVP information
  var attendeeName = prompt("Please enter your name:");
  var attendeeEmail = prompt("Please enter your email:");

  // Prepare data to be sent via EmailJS
  var data = {
    eventName: eventName,
    attendeeName: attendeeName,
    attendeeEmail: attendeeEmail
  };

  // Send email using EmailJS
  emailjs.send("service_qshvmqj", "template_3xshfgq", data)
    .then(function(response) {
      console.log("Email sent successfully!", response);
      alert("RSVP submitted successfully!");
    }, function(error) {
      console.error("Email sending failed:", error);
      alert("Failed to submit RSVP. Please try again later.");
    });
}
