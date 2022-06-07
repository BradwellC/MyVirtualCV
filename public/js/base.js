const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');

const modalClose = document.querySelector('.modal-close');
const planBtn = document.querySelectorAll('#modal-btn');

for (var i = 0; i < planBtn.length; i++) {
    planBtn[i].addEventListener('click', function () {
        modal.classList.add('open');
        backdrop.classList.add('open');
    })
}

backdrop.addEventListener('click', function () {
    mobileNav.classList.remove('open');
    closeModal();
})

if (modalClose) {
    modalClose.addEventListener('click', closeModal);
}

function closeModal() {
    if (modal) {
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
}

// Navbar toggle
const navToggle = document.querySelector('.navbar-toggle');
const navbarNav = document.querySelector('.navbar-nav');

const navbarLink = document.querySelector('.navbar-link');

// document.onclick = function (e) {
//     if (e.target.class !== 'navbar-nav') {
//         navbarNav.classList.remove('open');
//     }
// }

navToggle.addEventListener('click', function () {
    navbarNav.classList.toggle('open');
});


/*  Accordion script  */
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