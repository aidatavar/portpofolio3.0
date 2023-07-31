// Function to handle the fade-in effect
//  slide in effect

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log("each element: ", entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            entry.target.classList.remove('hidden');

        } else  {
            entry.target.classList.remove('show');
            entry.target.classList.add('hidden');
        }
        return true
        
    })
});

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el))



document.getElementById('btnSwitch').addEventListener('click', () => {
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("bg-dark");
    document.body.classList.toggle("text-white");
});

function validate() {
    if (document.myForm.Name.value == "") {
        alert("Please provide your name!");
        document.myForm.Name.focus();
        return false;
    }
    if (document.myForm.Subject.value == "") {
        alert("Please provide a subject!");
        document.myForm.Subject.focus();
        return false;
    }
    if (document.myForm.Email.value == "") {
        alert("Please provide your Email!");
        document.myForm.EMail.focus();
        return false;
    }
    if (document.myForm.Phone.value == "" || isNaN(document.myForm.Phone.value) ||
        document.myForm.Phone.value.length != 5) {
        alert("Please Provide Your Phone Number");
        document.myForm.Phone.focus();
        return false;
    }
    if (document.myForm.Message.value == "") {
        alert("Please Enter Your Message!");
        document.myForm.Message.focus();
        return false;
    }
    return true;
}