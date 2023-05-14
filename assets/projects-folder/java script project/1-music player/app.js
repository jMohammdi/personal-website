// selecy dom 
let container=document.querySelector(".container-music")
let nextBtn=document.querySelector(".next")
let prevBtn=document.querySelector(".prev")
let puseBtn=document.querySelector("#puse")
let coverMusic=document.querySelector(".coverMusic")
let endTime=document.querySelector(".endtime")
let count=0
let vedioBg=document.querySelector(".bg-vedio")
let nameSinger=document.querySelector(".nameSinger")
let titleTrack=document.querySelector(".title")
let condations=true
let audio=document.createElement("audio")
audio.classList.add("audio")
let plays=document.querySelector("#plays")
let rangevolume=document.querySelector('#volum-chnge')
let showvol=document.querySelector(".showvol")
let muteMUsic=document.querySelector("#muteMUsic")
let durationMusic=document.querySelector("#durationMusic")
let autoplay=0
let autod=document.querySelector(".autod")
let endTimeAudio=document.querySelector(".endTime")
let sourceMusic=[
    {name:"shadmehr Aghili",
       covrImg:"cover/shadmehr.png",
       track:"Baron delam khost",
       src:"audio/Shadmehr Aghili - Baroon Delam Khast  DJ Sasha Remix.mp3",
       id:1,
    },
       
    {name:"Alireza Talischi",
       covrImg:"cover/talischi.png",
       track:"Del be Del",
    src:"audio/Alireza Talischi - Del Be Del.mp3",
    id:2,
    },
    {name:"satin ",
       covrImg:"cover/satin.png",
       track:"Dast Dele Man Roo shode",
    src:"audio/Satin - Daste Dele Man Roo Shode.mp3",
id:3,},
{name:"sman jalili ",
   covrImg:"cover/saman.png",
   track:"khass",
src:"audio/Saman Jalili - Khass.mp3",
id:4,}

]
// default music
function load_track(index_p){
    nameSinger.textContent=sourceMusic[index_p].name
    titleTrack.textContent=sourceMusic[index_p].track
    coverMusic.setAttribute("src",sourceMusic[index_p].covrImg)
    audio.setAttribute("src",sourceMusic[index_p].src)
 let timer=setInterval(rangeDirection,1000)
 showvol.innerHTML=rangevolume.value

}
load_track(count)
// function play music
function playsong(){
    audio.play()
    vedioBg.play()
    condations=false
    plays.innerHTML = '<i class="fa fa-pause" ></i>'
    puseBtn.classList.add("bg-pause")
}
// function auto play music
function autoplayMusic(){
    if(autoplay==1){
autoplay=0
autod.style.background="transparent"
    }else{
autoplay=1
autod.style.background="#eb4d4b"
    }
}
// function pause music
function pauseAudio(){
    vedioBg.pause()
    audio.pause()
    condations=true
    plays.innerHTML='<i class="fa fa-play" ></i>'
    puseBtn.classList.remove("bg-pause")
 
}

// next music
const nextMusic=()=>{

    if(count<sourceMusic.length-1){
        count+=1
        load_track(count)
       

    }else{
count=0
load_track(count)



    } 
let rez=puseBtn.className
if(rez=="bg-pause"){
playsong()
}
     
    
 
}
nextBtn.addEventListener("click",nextMusic)

// function play music

// prevs song
function prevMusic(){
    if(count>0){
        count -=1
        load_track(count)
    
      
    }else{
        count=sourceMusic.length-1
        load_track(count)
     
 
    
    }
    let rez=puseBtn.className
if(rez=="bg-pause"){
playsong()
}
 
    }
    prevBtn.addEventListener("click",prevMusic)
 // function play audio bg 
 const pausMusic=()=>{
    if (condations) {     
        playsong()
     } else {
        pauseAudio()

       
     }
    }
    puseBtn.addEventListener("click",pausMusic)

// show audio volume
function volume_change(){
    showvol.innerHTML=rangevolume.value
    audio.volume=rangevolume.value/100
    if(audio.volume>0){
        muteMUsic.innerHTML='<i class="fa fa-volume-up" ></i>'
    }
    if(rangevolume.value==0){
        muteMUsic.innerHTML='<i class="fa fa-volume-off" ></i>'  
    }
}

// function muted music
function mute(){
    audio.volume=0;
    rangevolume.value=0
    showvol.innerHTML=0
    muteMUsic.innerHTML='<i class="fa fa-volume-off" ></i>'
}
muteMUsic.addEventListener("click",mute)

// function change diration
function changeDiration(){
let postinD=audio.duration*(durationMusic.value/100)
audio.currentTime=postinD
}
// update function postion
function rangeDirection(){
 
let postion=0
if(!isNaN(audio.duration)){
    postion=audio.currentTime*(100/audio.duration)
    durationMusic.value=postion
}
if(audio.ended){
    plays.innerHTML='<i class="fa fa-play" ></i>'
    if(autoplay==1){
        count+=1
        load_track(count)
        playsong()
    }
}

}





















































