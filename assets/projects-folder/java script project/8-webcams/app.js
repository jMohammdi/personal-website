const vedio=document.getElementById("webcame-vid")
const screenShotsEl=document.getElementById("screenshots")
const btnStart=document.querySelector(".start")
const takePhoto=document.querySelector(".takePhoto")
let imageCaptuer
const startwebcame=()=>{
    if(navigator.mediaDevices.getUserMedia){
        navigator.mediaDevices.getUserMedia({video:true})
        .then(stream=>{
            vedio.srcObject=stream
            imageCaptuer=new ImageCapture(stream.getVideoTracks()[0])
        })
        .catch(err=>{
            console.log("something went wrong ",err)
        })
    }
}
const takescreen=()=>{
imageCaptuer.takePhoto().then(blob=>{
    const img =document.createElement("img")
    img.src=window.URL.createObjectURL(blob)
    screenShotsEl.appendChild(img)
})
}
btnStart.addEventListener("click",startwebcame)
takePhoto.addEventListener("click",takescreen)