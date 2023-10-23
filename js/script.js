
const darkMap = document.querySelector('.location__about');
const viewButton = document.querySelector('.location__check');
const locationContainer = document.querySelector('.location');
const map = document.querySelector('.location__map-image');
const openEye = document.querySelector('.location__check-open');
const closedEye = document.querySelector('.location__check-closed');
const footerTitles = document.querySelectorAll('.info__component-title')
const linksContainerWrapper = document.querySelectorAll('.info__component-links-wrapper')
const linksContainer = document.querySelectorAll('.info__component-links')
const topNavigation = document.querySelector('.header__nav-list')
const navigationOppener = document.querySelector('.header__mobile-menu')

let mapVisible = true;

let topOpened = false;

let linksContainersVisible = [false, false, false, false, false];

console.log(linksContainer[0].offsetHeight);

navigationOppener.addEventListener('click', ()=>{
    if(topOpened){
        topNavigation.classList.remove("header__nav-list_opened");
    }else{
        topNavigation.classList.add("header__nav-list_opened");
    }

    topOpened = !topOpened
})

footerTitles.forEach((item, index)=>{
    item.addEventListener('click', ()=>{
        if(linksContainersVisible[index]){
            linksContainerWrapper[index].removeAttribute('style', `height: ${linksContainer[index].offsetHeight}px`)
        }else{
            linksContainerWrapper[index].setAttribute('style', `height: ${linksContainer[index].offsetHeight}px`)
        }

        linksContainersVisible[index] = !linksContainersVisible[index]
    })
})

viewButton.addEventListener('click', ()=>{
    if(mapVisible){
        darkMap.classList.add("location__about_invisible");
        openEye.setAttribute('style', 'display: none;')
        closedEye.setAttribute('style', 'display: inline;')
    }else{
        darkMap.classList.remove("location__about_invisible");
        closedEye.setAttribute('style', 'display: none;')
        openEye.setAttribute('style', 'display: inline;')
    }
    
    mapVisible = !mapVisible
})