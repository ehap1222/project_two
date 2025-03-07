function validateForm(){
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    if(name ==="" || email === ""){
        alert("Please enter your user name and email")
    }
    if(email.indexOf("@")=== -1 || email.indexOf(".")===-1){
        alert("Please Enter Email@")
    }
}
let topbtn=document.getElementById("topbutton")

window.onscroll = function(){
    if(document.documentElement.scrollTop>300){
        topbtn.style.display="block";
    }
    else{
        topbtn.style.display="none";
    }
}
topbtn.addEventListener("click",function(){
    window.scroll({top:0,left:0})
})

