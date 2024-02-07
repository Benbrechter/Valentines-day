var btnNo = document.getElementById('btn2')
var btnYes = document.getElementById('btn1')
var img1 = document.getElementById('img1')
var ptag = document.getElementById('ptag')

function four(){
    btnYes.setAttribute("style", "font-size: 110px;")  
}


  
btnNo.onclick = (event) =>{
four()
}

btnYes.onclick = (event) => {
img1.setAttribute("style", "display: none;")
btnYes.setAttribute("style", "display: none;") 
btnNo.setAttribute("style", "display: none;") 
ptag.innerText = "It is A DATEEE!!!!!I am free after 9:30 I have to present my project :////. I def want to hang tho! "
ptag.setAttribute('style', "font-size: 60px;")
}