const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav_toggle','nav_menu')

const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
     navLink.forEach(n => n.classList.remove('active')) 
    this.classList.add('active')
    const navMenu = document.getElementById('nav_menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
});

sr.reveal('.home_data, .about_img, .skills_subtitle, .skills_text',{}); 
sr.reveal('.home_img, .about_subtitle, .about_text, .skills_img',{delay: 400}); 
sr.reveal('.home_social_icon',{ interval: 200}); 
sr.reveal('.skills_data, .work_img, .contact_input',{interval: 200}); 
