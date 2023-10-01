// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************

// ********** close links ************

// ********** fixed navbar ************

// ********** smooth scroll ************
// select links

const date=document.getElementById("date");

date.innerHTML=new Date().getFullYear();
const navtoggle=document.querySelector(".nav-toggle");
const linkcontainer=document.querySelector(".links-container");
const links=document.querySelector(".links");

navtoggle.addEventListener("click",()=>{
    // linkcontainer.classList.toggle("show-links")
    const containerheight=linkcontainer.getBoundingClientRect().height;
    const linksheight=links.getBoundingClientRect().height;
    if(containerheight===0){
        linkcontainer.style.height=`${linksheight}px`
    }
    else{
        linkcontainer.style.height=0;
    }
})


const navbar=document.getElementById("nav")
const toplink=document.querySelector(".top-link")

window.addEventListener("scroll",function(){
    const scrollheight=window.scrollY;
    const navheight=navbar.getBoundingClientRect().height;
    if(scrollheight>navheight)
    {
        navbar.classList.add('fixed-nav')
    }
    else{
        navbar.classList.add('fixed-nav')
    }
    if(scrollheight>500)
    {
        toplink.classList.add("show-link")
    }
})


// const scrollinks=document.querySelectorAll(".scroll-link");
// scrollinks.forEach(function(link){
//     link.addEventListener("click",function(e){
//         e.preventDefault();
//         const id=e.currentTarget.getAttribute("href").slice(1);
//         const element=document.getElementById(id);
//         let position=element.offsetTop;
//         window.scrollTo({
//             left:0,
//             top:100,
//         });
//         linkcontainer.style.height=0;
        
//     })
// })