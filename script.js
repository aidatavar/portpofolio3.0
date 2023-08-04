// Function to handle the fade-in effect
//  slide in effect

$(document).ready(function() {
   setTimeout(function() {
       $("#about").fadeOut(1000)
       $("#about").fadeIn(1000)
   }, 2000)

})

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log("each element: ", entry)
//         if (entry.isIntersecting) {
//             entry.target.classList.add('show');
//             entry.target.classList.remove('slide-in');

//         } else  {
//             entry.target.classList.remove('show');
//             entry.target.classList.add('slide-in');
//         }
//         return true
        
//     })
// });

// const hiddenElements = document.querySelectorAll('.slide-in')
// hiddenElements.forEach((el) => observer.observe(el))



// form validation jQuery
// Wait for the DOM to be ready
$(function() {
    // Initialize form validation on the form.
    // It has the name attribute "myForm"
    $("form[name='myForm']").validate({
      // Specify validation rules
      rules: {
        // The key name on the left side is the name attribute
        // of an input field. Validation rules are defined
        // on the right side
        name: "required",
        subject: "required",
        email: {
          required: true,
          // Specify that email should be validated
          // by the built-in "email" rule
          email: true
        },
        phone: {
            required: true,
            phoneUs: true
        },
        message:"required",

      },
      // Specify validation error messages
      messages: {
        name: "Please enter your name",
        email: "Please enter a valid email address",
        subject: "Please provide a subject!",
        phone: "please provide a phone number",
        message: "Please enter your message",
      },
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
      submitHandler: function(form) {
        form.submit();
      }
    });
  });


$(document).ready(function() {
    $('#btnSwitch').click(function() {
        $('body').toggleClass("dark-theme")
        $('body').toggleClass("bg-dark")
        $('body').toggleClass("text-white")

    })
})

