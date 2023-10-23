
const darkMap = document.querySelector('.location__about');
const viewButton = document.querySelector('.location__check');
const locationContainer = document.querySelector('.location');
const map = document.querySelector('.location__map-image');
const openEye = document.querySelector('.location__check-open');
const closedEye = document.querySelector('.location__check-closed');

let visible = true;

viewButton.addEventListener('click', ()=>{
    if(visible){
        darkMap.classList.add("location__about_invisible");
        openEye.setAttribute('style', 'display: none;')
        closedEye.setAttribute('style', 'display: inline;')
    }else{
        darkMap.classList.remove("location__about_invisible");
        closedEye.setAttribute('style', 'display: none;')
        openEye.setAttribute('style', 'display: inline;')
    }
    
    visible = !visible
})