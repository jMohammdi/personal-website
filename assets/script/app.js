// ==============scroll window header===========
let prevScrollpos=window.pageYOffset
window.addEventListener("scroll",(e)=>{
    let header=document.querySelector("header")
    let cureentScrollpos=window.pageYOffset
    let arrow=document.querySelector(".arrow")
if(prevScrollpos>cureentScrollpos){
    header.style.top="0"
    header.style.boxShadow= '-2px 1px 14px 0px #222';
}else{
    header.style.top="-100px"
}
if(window.pageYOffset<10){
    header.style.boxShadow= 'none';
    arrow.classList.remove("show-arrow")
}
if(window.pageYOffset>40){
   
    arrow.classList.add("show-arrow")
}
prevScrollpos=cureentScrollpos

})
// ==============active links =====================
let items=document.querySelectorAll(".item-link")
let absoul=document.querySelector(".absoult")
items.forEach(el=>{
    el.addEventListener("mousemove",rendrePostion)

})
function rendrePostion(){

    let result=this.getBoundingClientRect()
    let w=absoul.style.width=`${result.width}px`
    let h=absoul.style.height=`${result.height}px`
    let t=absoul.style.left=`${result.left}px`
    absoul.style.transform="scaleX(1)"
    
}
items.forEach(el=>{
    el.addEventListener("mouseleave",rendreRemove)
})
function rendreRemove(){
    absoul.style.transform="scaleX(0)"
}
// ==================add class show active links  scrolll===========
let menu_sm_m=document.querySelector(".menu-sm-m")  //menu side mobile from top to bottom
let menuSm=document.querySelector(".menu-r-s")      //menu  bar (br1,br2,br3)  icons =
items.forEach(item=>{
    item.addEventListener("click",removeCls)
})
function removeCls(){
    items.forEach(el=>{
        el.classList.remove("active")
    })
 
    this.classList.add("active")
    menu_sm_m.classList.remove("show-sm-m")
    menuSm.classList.remove("change-menu")

}
// ==========rotate icons (br1,br2,br3)=============
menuSm.addEventListener("click",function(e){
    this.classList.toggle("change-menu")
    menu_sm_m.classList.toggle("show-sm-m")
    
})
// =========dark mode=======
let darkMode=document.querySelector(".darkMode")
darkMode.addEventListener("click",function(){
    let darkMode= document.querySelector(".sun>i")
    darkMode.classList.toggle("bx-moon")
    darkMode.classList.toggle("bx-sun")


   if(darkMode.classList.contains("bx-moon")){
       document.body.classList.add("darkMode-b")
   }else{
       document.body.classList.remove("darkMode-b")
   }
})
// =============paralex icons web developer

let homePage=document.querySelector(".home")
homePage.addEventListener("mousemove",function(e){
let images=document.querySelectorAll(".container-images img")
images.forEach(el=>{
    let speed=el.getAttribute("data-speed")
    let x=(window.innerWidth-e.pageX*speed)/100
    let y=(window.innerHeight-e.pageY*speed)/100
    el.style.transform=`translate(${x}px,${y}px)`
})
})
// ============change image designer=============
// window.addEventListener("resize",function(){
//     let srcImg=document.querySelector(".designer")
 
//     if(window.innerWidth<768){
//        srcImg.setAttribute("src",'assets/images/webdesigner/2.png')
//     }else{
//         srcImg.setAttribute("src",'assets/images/webdesigner/1.png')
//     }
// })

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset
let nav=document.querySelector(".nav__menu")

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop -20;
        sectionId = current.getAttribute('id')
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu  a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu  a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)
// ======================progress bars============================
let progressring=document.querySelectorAll(".progress-ring")
let rez_Skils=true
window.addEventListener("scroll",()=>{
    let range_shows=document.querySelectorAll(".range-show")
    let heightWindow=window.innerHeight/5*5
    range_shows.forEach(el=>{
      const boxtop=  el.getBoundingClientRect().top
      
      if(boxtop<heightWindow){
          el.classList.add("animate")
      }

    })
    progressring.forEach(el=>{
      const boxtop=  el.getBoundingClientRect().top
      
      if(boxtop<heightWindow){
          el.classList.add("active-ring-bar")
      }

    })


 
})
// ====================دکمه های فضای مجازی===============
let toggleIcon=document.querySelector(".ico01")
toggleIcon.addEventListener("click",()=>{

    let ins_git_towit= document.querySelector(".wrapper")
    ins_git_towit.classList.toggle("active-s")

})


// ==================btn filter projects====================
let btn_projects=document.querySelectorAll(".btn-effect-s")
btn_projects.forEach(btn=>{
    btn.addEventListener("click",function(){
        removeActiveBtn()
        this.classList.add("active-dashed-btn")
    })
    
})
function removeActiveBtn(){
    btn_projects.forEach(btn=>{
    btn.classList.remove("active-dashed-btn")
    })
}
// ======================فیلترهای پرژه های انجام شده==================================
const btns_showProject=document.querySelectorAll(".project-btn-show")
const project_items=document.querySelectorAll('.store-item')

btns_showProject.forEach((el)=>{
    el.addEventListener("click",(e)=>{
        const filterTem=e.target.dataset.filter
        project_items.forEach((item)=>{
            if(filterTem=='all'){
                item.style.display="block"
                item.style.transition="2s"
            }else{
                if(item.classList.contains(filterTem)){
                    item.style.display="block"
                    item.style.transition="2s"
                    
                }else{
                    item.style.display="none"
                    item.style.transition="2s"
                }
            }
        })
    })
})


// ===============================remove animation buttons 
let containerBts=document.querySelector(".content-show")
containerBts.addEventListener("click",function(e){
   this.classList.remove("animate")
})
// =====================fade loading===============

window.addEventListener("DOMContentLoaded",()=>{
    let loading=document.querySelector(".container-loader")
    document.body.classList.add("loead-body")
 setTimeout(() => {
  document.body.classList.add("loead-body")
  loading.style.display="none"  
  document.body.classList.remove("loead-body")
 }, 4000);
})



