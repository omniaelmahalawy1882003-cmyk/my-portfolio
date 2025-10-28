//  src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js">







// ========== > navBar
let navLinks = document.querySelectorAll('.nav-link') 

navLinks.forEach((navlink)=>{
navlink.addEventListener('click',()=>{
    
    navLinks.forEach((l)=>{
    l.classList.remove('active-link')
    })
   navlink.classList.add('active-link')
})
}

)

window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        
        if (window.scrollY >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove('active-link');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active-link');
        }
    });
});

// =======> Header Scroller

let navBar = document.querySelector('.nav-container')
    
window.addEventListener('scroll',()=>{
    
    if(window.scrollY>50){
        navBar.classList.add('scrolled')
    }else{
        navBar.classList.remove('scrolled')
    }
    }
    )
 
// =======> scroll-up Scroller
let scrollUp = document.querySelector('.scroll-up')
window.addEventListener('scroll',()=>{
   

if(window.scrollY>350){
    scrollUp.classList.add('show-scroll-up')
}else{
    scrollUp.classList.remove('show-scroll-up')
}
}
)

// ========> show nav-menu
const navMenu = document.querySelector('.nav-menu')
navToggle = document.querySelector('.nav-toggle')
navClose = document.querySelector('.nav-close')

if(navToggle){
    navToggle.addEventListener('click',()=>{
       navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click',()=>{
       navMenu.classList.remove('show-menu')
    })
}




// ========> remove nav-menu
const navLink = document.querySelectorAll('.nav-link')

function linkAction(){
    const navMenu = document.querySelector('.nav-menu') 
    navMenu.classList.remove('show-menu')  
}

navLink.forEach((link)=>{
link.addEventListener('click',linkAction)
});

// ========> type cursor
var typed = new Typed('#auto-type', {
    strings: ['Frontend Developer .', ' .Graphic Designer .'],
    typeSpeed: 150,
    backSpeed : 150,
    looped : true
  });




// ========> tabs about

const tabs = document.querySelectorAll('[data-target]')
const tabsContent = document.querySelectorAll('[data-content]')
tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)
        // console.log(target);
        tabsContent.forEach((tabContent) => {
            tabContent.classList.remove('tab-active');
        });
        target.classList.add('tab-active')
        tabs.forEach((tab) => {
            tab.classList.remove('tab-active');
        });
        tab.classList.add('tab-active')
    })
})


// ========> Email

const contactForm = document.getElementById('contact-form')
contactName = document.getElementById('contact-name')
contactEmail = document.getElementById('contact-email')
contactSubject = document.getElementById('contact-subject')
contactMessage = document.getElementById('contact-message')
errorMessage = document.getElementById('error-message')

const sendEmail = (e) => {
    e.preventDefault();

    
    if (contactName.value === '' ||
        contactEmail.value === '' ||
        contactSubject.value === '' ||
        contactMessage.value === '') {

        errorMessage.textContent = 'All fields are required';
    }
    else {
        // serviceId  -templateId -#form -publicKey
        emailjs.sendForm(
            'service_2r7wk1b',
            'template_306wo2d',
            '#contact-form',
            'bOioMNm2ZySQjnaD3'
        ).then(() => {
            errorMessage.classList.add('color-first')
            errorMessage.textContent = 'Message sent succesfully'

            // remove message after 5s

            setTimeout(() => {
                errorMessage.textContent = ''
            }, 5000);
        }, (error)=>{
            alert('OOPS! SOMETHING WENT WRONG', error);
        }
        );
    
    contactName.value === '' ;
 contactEmail.value === '' ;
 contactSubject.value === '' ;
  contactMessage.value === '' ;
    }

};

contactForm.addEventListener('submit', sendEmail)