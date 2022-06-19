const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const modalSpan = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

modalSpan.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Navbar toggle
const navToggle = document.querySelector('.navbar-toggle');
const navbarNav = document.querySelector('.navbar-nav');

const navbarLink = document.querySelector('.navbar-link');

navToggle.addEventListener('click', function () {
    navbarNav.classList.toggle('navbar-active');
});


// Accordion script 
const accordionSelector = document.querySelectorAll(".accordion");
accordionSelector.forEach((accordion) => {
    accordion.onclick = function () {
        this.classList.toggle('open');
        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    };
});

// Smooth Scrolling
$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 2000, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

// Form JS
const usernameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const confirmPasswordEl = document.querySelector('#password-confirm');
const signUpForm = document.querySelector('#signup');

// Reuseable functions
const required = value => value === '' ? false : true;
const between = (length, min, max) => length < min || length > max ? false : true;
const emailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};
const securePassword = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};

const showError = (input, message) => {
    const formGroup = input.parentElement;

    formGroup.classList.remove('success');
    formGroup.classList.add('error');

    const error = formGroup.querySelector('small');
    error.textContent = message;
}

const showSuccess = (input) => {
    // get the form-field element
    const formGroup = input.parentElement;

    // remove the error class
    formGroup.classList.remove('error');
    formGroup.classList.add('success');

    // hide the error message
    const error = formGroup.querySelector('small');
    error.textContent = '';
}