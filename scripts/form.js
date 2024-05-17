/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header');
    if (this.scrollY >= 50) header.classList.add('scroll-header');
}
window.addEventListener('scroll', scrollHeader);


// ================= SHOW SCROLL UP =================
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 350) scrollUp.classList.add('show-scroll');
}
window.addEventListener('scroll', scrollUp);


/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';

// previously selected theme by user 
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme)? 'bx bx-moon' : 'bx bx-sun';

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme);
}

themeButton.addEventListener('click', () => {
    //add or remove theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    //save the current theme
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})



// =========== CONTACT FORM ===============
const inputs = document.querySelectorAll('.contact-input');

inputs.forEach(ipt => {
    ipt.addEventListener('focus', () => {
        ipt.parentNode.classList.add('focus');
        ipt.parentNode.classList.add('not-empty');
    })
    ipt.addEventListener('blur', () => {
        if (ipt.value === '') {
            ipt.parentNode.classList.remove('not-empty');
        }
        ipt.parentElement.classList.remove('focus');
    })
})


// =================== FOOTER YEAR ====================
const currentYear = new Date().getFullYear();
const year = document.getElementById('current-year');
year.innerText = currentYear;


// =================== COOKIE =================
const cookieBox = document.querySelector('.cookie-wrapper');
const cookieButtons = document.querySelectorAll('.cookie-btn');

const showCookie = () => {
    if (document.cookie.includes("At Designs")) return;
    cookieBox.classList.add('show-cookie');

    cookieButtons.forEach(cookieButton => {
        cookieButton.addEventListener('click', () => {
            cookieBox.classList.remove('show-cookie');

            //if click accept btn
            if (cookieButton.id == 'accept-cookie') {
                //get cookies for 3 monts
                document.cookie = "cookieBy = At Designs; max-age=" + 60*60*24*90;
            }
        })
    })
}

window.addEventListener('load', showCookie);