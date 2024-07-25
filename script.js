var popupoverlay=document.querySelector(".popup-overlay");
var popupbox=document.querySelector(".popup-box");
var addpopupbutton=document.getElementById("add-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})
var cancelpoppup=document.getElementById("cancel-popup")

cancelpoppup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

var two=document.querySelector(".two")
var addbook =document.getElementById("add-book")
var booktitleinput =document.getElementById("book-title-input")
var bookauthorinput =document.getElementById("book-author-input")
var bookdescriptioninput =document.getElementById("book-description-input")

addbook.addEventListener("click",function(event){
    
        event.preventDefault()
        var div=document.createElement("div")
        div.setAttribute("class","three")
        div.innerHTML=`<h1>${booktitleinput.value}</h1>
                        <h4>${bookauthorinput.value}</h4>
                        <p>${bookdescriptioninput.value}</p>
                        <button onclick="deletebook(event)">Delete</button>`;
        two.append(div)
        popupoverlay.style.display="none"
        popupbox.style.display="none"
            
    
})
function deletebook(event){
    event.target.parentElement.remove()
}
