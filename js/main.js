(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-300px');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 90
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    }); 

})(jQuery);

let days = 2;
let hours = 12;
let minutes = 35;
let seconds = 60;

// Function to update the timer display
function updateTimer() {
    document.getElementById("days").innerHTML = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;
}

// Function to decrement the timer
function startTimer() {
    const timer = setInterval(function () {
        // Decrement seconds
        if (seconds > 0) {
            seconds--;
        } else {
            // If seconds reach 0, reset to 59 and decrement minutes
            seconds = 59;
            if (minutes > 0) {
                minutes--;
            } else {
                // If minutes reach 0, reset to 59 and decrement hours
                minutes = 59;
                if (hours > 0) {
                    hours--;
                } else {
                    // If hours reach 0, reset to 23 and decrement days
                    hours = 23;
                    if (days > 0) {
                        days--;
                    } else {
                        // If days reach 0, stop the timer
                        clearInterval(timer);
                        alert("Timer finished!");
                    }
                }
            }
        }

        // Update the timer display
        updateTimer();

        // If the timer reaches 0, stop the interval
        if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
            clearInterval(timer);
            alert("Timer finished!");
        }
    }, 1000);
}

// Initialize the timer display
updateTimer();

// Start the timer
startTimer();



document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");

    // Set minimum date to today
    const weddingDateInput = document.getElementById("weddingDate");
    const today = new Date().toISOString().split("T")[0];
    weddingDateInput.min = today;

    // Form validation
    function validateForm() {
        let isValid = true;

        // Name validation
        const name = document.getElementById("name");
        const nameError = document.getElementById("nameError");
        if (name.value.trim().length < 2) {
            nameError.textContent = "Name must be at least 2 characters long";
            nameError.classList.add("visible");
            isValid = false;
        } else {
            nameError.textContent = "";
            nameError.classList.remove("visible");
        }

        // Email validation
        const email = document.getElementById("email");
        const emailError = document.getElementById("emailError");
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value)) {
            emailError.textContent = "Please enter a valid email address";
            emailError.classList.add("visible");
            isValid = false;
        } else {
            emailError.textContent = "";
            emailError.classList.remove("visible");
        }

        // Phone validation
        const phone = document.getElementById("phone");
        const phoneError = document.getElementById("phoneError");
        const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (!phoneRegex.test(phone.value)) {
            phoneError.textContent = "Please enter a valid phone number";
            phoneError.classList.add("visible");
            isValid = false;
        } else {
            phoneError.textContent = "";
            phoneError.classList.remove("visible");
        }

        // Wedding date validation
        const weddingDate = document.getElementById("weddingDate");
        const dateError = document.getElementById("dateError");
        if (!weddingDate.value) {
            dateError.textContent = "Please select a wedding date";
            dateError.classList.add("visible");
            isValid = false;
        } else {
            dateError.textContent = "";
            dateError.classList.remove("visible");
        }

        // Message validation
        const message = document.getElementById("message");
        const messageError = document.getElementById("messageError");
        if (message.value.trim().length < 10) {
            messageError.textContent = "Message must be at least 10 characters long";
            messageError.classList.add("visible");
            isValid = false;
        } else {
            messageError.textContent = "";
            messageError.classList.remove("visible");
        }

        return isValid;
    }

    // Form submission
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        const submitBtn = form.querySelector(".submit-btn");
        submitBtn.disabled = true;
        submitBtn.classList.add("loading");

        // Simulate form submission
        setTimeout(() => {
            form.style.display = "none";
            successMessage.classList.remove("hidden");
            submitBtn.disabled = false;
            submitBtn.classList.remove("loading");
        }, 1500);
    });
});

// Reset form
function resetForm() {
    const form = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");

    form.reset();
    form.style.display = "flex";
    successMessage.classList.add("hidden");
}

// Phone number formatting (only numbers, no () or -)
document.getElementById("phone").addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
});


document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll(".scroll-animation");

    function handleScroll() {
        animatedElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 100) {
                element.classList.add("in-view");
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger on page load in case elements are already in view
});


