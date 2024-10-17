/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu")
const navToggle = document.getElementById("nav-toggle")
const navClose = document.getElementById("nav-close")

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu")
    })
}

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu")
    })
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll(".nav__link")

const linkAction = () => {
    navMenu.classList.remove("show-menu")
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () => {
    const header = document.getElementById("header")
    this.scrollY >= 50 ? header.classList.add("blur-header")
        : header.classList.remove("blur-header")
}
window.addEventListener("scroll", blurHeader)

/*=============== EMAIL JS ===============*/

const contactForm = document.getElementById("contact-form")
const contactMessage = document.getElementById("contact-message")

const sendEmail = (e) => {
    e.preventDefault();
    // serviceID - templateID - #form - publicKey
    emailjs.sendForm("service_fo8asx9", "template_lu1pjj8", "#contact-form", "ledsGsPHZpDr_S1na")
        .then(() => {
            contactMessage.textContent = "  Message sent successfully ✅"

            // Remove message after five seconds
            setTimeout(() => {
                contactMessage.textContent = ""
            }, 5000)

            // Clear input fields
            contactForm.reset()
        }, () => {
            contactMessage.textContent = "Message not sent (service error) ❌"
        })

}
contactForm.addEventListener("submit", sendEmail)

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById("scroll-up")
    this.scrollY >= 350 ? scrollUp.classList.add("show-scroll")
        : scrollUp.classList.remove("show-scroll")
}
window.addEventListener("scroll", scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/

const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
}

//phone card
ScrollReveal().reveal(".home__name", {
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".home__profession", {
    ...scrollRevealOption,
    origin: "left",
}); ScrollReveal().reveal(".home__img", {
    ...scrollRevealOption,
    origin: "right",
    scale: 0.7,
});
ScrollReveal().reveal(".home__scroll-text", {
    ...scrollRevealOption,
    origin: "bottom",
});
ScrollReveal().reveal(".home__scroll-box", {
    ...scrollRevealOption,
    origin: "top",

});
// works

ScrollReveal().reveal(".section__title", {
    ...scrollRevealOption,
    origin: "top",

});
ScrollReveal().reveal(".work__card", {
    ...scrollRevealOption,
    origin: "left",

});
ScrollReveal().reveal(".info__title", {
    ...scrollRevealOption,
    origin: "right",

});
ScrollReveal().reveal(".about__description", {
    ...scrollRevealOption,
    origin: "top",
    scale: 0.8,
});
ScrollReveal().reveal(".button", {
    ...scrollRevealOption,
    origin: "left",
    scale: 0.9,
});


ScrollReveal().reveal(".about__img", {
    ...scrollRevealOption,
    scale: 0.8,
});
ScrollReveal().reveal(".experience__company", {
    ...scrollRevealOption,
    origin: "left",
});
ScrollReveal().reveal(".experience__profession", {
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".experience__description", {
    ...scrollRevealOption,
    scale: 0.8,
});


ScrollReveal().reveal(".skills__box", {
    ...scrollRevealOption,
    origin: "top",
    scale: 0.8,
});
ScrollReveal().reveal(".skills__name", {
    ...scrollRevealOption,
    origin: "top",
});


ScrollReveal().reveal(".services__title", {
    ...scrollRevealOption,
    origin: "left",
});
ScrollReveal().reveal(".services__icon", {
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".service__description", {
    ...scrollRevealOption,
    origin: "left",
});

//contact 
ScrollReveal().reveal(".contact__group", {
    ...scrollRevealOption,
    origin: "left",
});
ScrollReveal().reveal(".contact__area", {
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".contact__social-link", {
    ...scrollRevealOption,
    origin: "bottom",
});
// footer__link
ScrollReveal().reveal(".footer__links", {
    ...scrollRevealOption,
    origin: "left",
});
ScrollReveal().reveal(".footer__copy", {
    ...scrollRevealOption,
    origin: "right",
});


