var hamburgerBtn = document.querySelector('.hamburger'),
    closeBtn = document.querySelector('.icon-close'),
    imageHeader = document.querySelector('.image-header'),
    kingJumbo = document.querySelector('.king-jumbotron'),
    container = document.querySelector('.container'),
    footer = document.querySelector('.footer'),
    main = document.querySelector('.main'),
    navMobile = document.querySelector('.nav-mobile');

    console.log(main);
   

hamburgerBtn.addEventListener('click', function(){
    toggleBtn(this, closeBtn);
   navMobile.classList.remove('none');
   main.style.display = 'none';
});

closeBtn.addEventListener('click', function(){
    toggleBtn(this, hamburgerBtn);
   navMobile.classList.add('none');
   main.style.display = 'block';
});



function toggleBtn (hide, show) {
    hide.classList.toggle('toggle');
    show.classList.toggle('toggle');
}
