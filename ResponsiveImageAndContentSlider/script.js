const slides=document.querySelectorAll('.slide');
const next=document.querySelector('#next');
const prev=document.querySelector('#prev');

//for not slide automatically
const auto=false;
const intervalTime=5000;
let slideInterval;

const nextSlide=()=>{
    //get current class
    const current=document.querySelector('.current');
    //remove current class
    current.classList.remove('current');

    //check for next sibling slide
    if(current.nextElementSibling){
        //Add current to next sibling
        current.nextElementSibling.classList.add('current');
    }//if no, then add current to 1st div
    else{

        slides[0].classList.add('current');
    }
    setTimeout(()=>current.classList.remove('current'));
}

const prevSlide=()=>{
    //get current class
    const current=document.querySelector('.current');
    //remove current class
    current.classList.remove('current');

    //check for prev sibling slide
    if(current.previousElementSibling){
        //Add current to prev sibling
        current.previousElementSibling.classList.add('current');
    }//if no, then add current to last div
    else{

        slides[slides.length-1].classList.add('current');
    }
    setTimeout(()=>current.classList.remove('current'));
}

//button events
next.addEventListener('click',e=>{
    nextSlide();
    if(auto){
        //js method
        clearInterval(slideInterval);
    slideInterval=setInterval(nextSlide,intervalTime);

    }
});

prev.addEventListener('click',e=>{
    prevSlide();
    if(auto){
        //js method
        clearInterval(slideInterval);
    slideInterval=setInterval(nextSlide,intervalTime);

    }
});

//Auto slide
if(auto){
    //Run next slide at interval time
    slideInterval=setInterval(nextSlide,intervalTime);
}