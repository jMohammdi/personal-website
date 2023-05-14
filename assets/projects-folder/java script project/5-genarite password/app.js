// DOM selected
//============span show password
const resultEl = document.getElementById('result')
// ======length password
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
// btn random password
const generateEl = document.getElementById('generate')
// copy password
const clipboardEl = document.getElementById('clipboard')
// ==================================================================
// ==============function for filter=========
const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
  
}
//===============conpy cliboard==========
// ======================function btn genarate=======

generateEl.addEventListener("click",()=>{
  const length=lengthEl.value
  const haslower=lowercaseEl.checked
  const hasNumber=numbersEl.checked
  const hasUpper=uppercaseEl.checked
  const hasSymbol=symbolsEl.checked


  resultEl.innerText=generatePassword(haslower,hasNumber,hasUpper,hasSymbol,length)
})

function generatePassword(lower,number,upper,symbol,length){
  let generatedPassword=''
  const typeCount=lower+number+upper+symbol
  const typeArr=[{lower},{number},{upper},{symbol}].filter(item=>Object.values(item)[0])
if (typeCount===0){return ""}

for(let i=0;i<length;i+=typeCount){
  typeArr.forEach(type=>{
    const funcName=Object.keys(type)[0]
    console.log(funcName)
    generatedPassword+=randomFunc[funcName]()
  })
}
const finalPassword=generatedPassword.slice(0,length)
return finalPassword

}
// ===================function generate A-Z ,a-b ,0-9,#
function getRandomLower(){
  return String.fromCharCode(Math.floor(Math.random()*26)+97)
}
function getRandomUpper(){
  return String.fromCharCode(Math.floor(Math.random()*26)+65)
}
function getRandomNumber(){
  return String.fromCharCode(Math.floor(Math.random()*10)+48)
}
function getRandomSymbol(){
  const symbols="@!$#%^&*()}{]["
  return symbols[Math.floor(Math.random()*Symbol.length)]
}


