function request() {
    fetch("https://api.unsplash.com/photos/?client_id=H2YLbBoGNtbqydP5k-bwy4wY8IwOYTGkBte_H318Ztw")
    .then(response => response.json())
    .then(data => {
    console.log(data);    
        data.forEach(item => {
            console.log(item);
        });
    })
}


document.querySelector('.menu-btn').addEventListener('click', () => {
   document.querySelector('.nav-menu').classList.toggle('show');
})

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.pics-grid', {delay: 800});

