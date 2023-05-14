// DOM selected Element========
const hourEl=document.querySelector(".hour")
const minutsEl=document.querySelector(".minuts")
const secondsEl=document.querySelector(".second")
const timeEL=document.querySelector(".time")
let date=document.querySelector(".date")
const toggle=document.querySelector(".toogle")
// conatiner months name and weekday
const days=['Sunday','Monday','Tuseday','WednesDay','Thursday','Friday','Satrday']
const months=["Jan",'Feb','Mar','Apr','May','Jun','jul','Aug','Sep','Oct','Nav','Dec']


// tooggle view in dark mode and light mode
toggle.addEventListener("click",function(e){
let body=document.querySelector("body")
if(body.classList.contains("dark")){
    body.classList.remove("dark")
    e.target.innerHTML="dark mode"
}else{
    body.classList.add("dark")
    e.target.innerHTML="Light mode"
}
})

// set time for clock

function setTime(){
  
    const time=new Date()
const hours=time.getHours()
const minuts=time.getMinutes()
const seconds=time.getSeconds()
const month=time.getMonth()
const day=time.getDay()
const dates=time.getDate()
const hoursforClock=hours%12
const ampm=hours>=12 ?"PM":"AM"
hourEl.style.transform=`translate(-50%, -100%) rotate( ${scale(hoursforClock,0,11,0,360)}deg)`
minutsEl.style.transform=`translate(-50%, -100%) rotate( ${scale(minuts,0,59,0,360)}deg)`
secondsEl.style.transform=`translate(-50%, -100%) rotate( ${scale(seconds,0,59,0,360)}deg)`
timeEL.innerHTML=`${hours}:${minuts<10? "0"+minuts:minuts}:${seconds<10 ?"0"+seconds:seconds} ${ampm}`
date.innerHTML=`${days[day]} ,  ${months[month]} <span class="circle">${dates}</span> `
console.log(dates)
}


const scale=(num,in_min,in_max,out_min,out_max)=>{
    return (num-in_min)*(out_max-out_min)/(in_max-in_min)+out_min
}

setTime()


setInterval(setTime,1000)
