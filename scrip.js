$(document).ready(function() {
    // Add smooth scrolling to all links
    $("a").on("click", function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
  
        // Scroll to the target element
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          800
        );
      }
    });
  
    // Initialize tooltips
    $('[data-toggle="tooltip"]').tooltip();
  
    // Initialize popovers
    $('[data-toggle="popover"]').popover();
  
    // Initialize the modal
    $("#loginModal").modal({
      show: false,
    });
  
    // Show the login modal when the "Iniciar sesión" button is clicked
    $(".btn-login").on("click", function() {
      $("#loginModal").modal("show");
    });
  
    // Initialize the register modal
    $("#registerModal").modal({
      show: false,
    });
  
    // Show the register modal when the "Registrarse" button is clicked
    $(".btn-register").on("click", function() {
      $("#registerModal").modal("show");
    });
  
    // Add functionality to the product cards
    $(".card").on("click", function() {
      var productID = $(this).data("product-id");
  
      // Redirect to the product page
      window.location.href = "product.php?id=" + productID;
    });
  
    // Add functionality to the contact form
    $("#contactForm").on("submit", function(event) {
      event.preventDefault();
  
      var name = $("#contactName").val();
      var email = $("#contactEmail").val();
      var message = $("#contactMessage").val();
  
      // Send the contact form data to the server
      $.ajax({
        type: "POST",
        url: "contact.php",
        data: {
          name: name,
          email: email,
          message: message,
        },
        success: function(response) {
          // Display a success message
          alert("¡Tu mensaje ha sido enviado!");
  
          // Clear the contact form
          $("#contactForm").trigger("reset");
        },
        error: function(error) {
          // Display an error message
          alert("Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.");
        },
      });
    });
  });
  