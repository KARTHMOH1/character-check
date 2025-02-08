var textbox=document.getElementById("textbox")
var errormsg =document.getElementById("errormsg")
var result=document.getElementById("result")

var limit=200
result.textContent="0/"+ limit

textbox.addEventListener("input",function(){
    var charactercount=textbox.value.length
    result.textContent=charactercount + "/" +limit
    if (charactercount == limit) {
        errormsg.textContent = " Oops.. You have reached the limit !";
        errormsg.style.color = "black"
    }
    else{
        errormsg.textContent=" "
    }
})

