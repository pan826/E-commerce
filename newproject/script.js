
//login btn //
const showpopupBtn = document.querySelector("#btn2");
const formPopup = document.querySelector(".form-popup");
//formPopup.style.display = "none";

function showUsers() {
  formPopup.classList.toggle("show-popup");
}
showpopupBtn.addEventListener("click", () => {
  showUsers();
});


const hidePopupBtn = document.querySelector(".form-popup .close-btn");
hidePopupBtn.addEventListener("click", () => showpopupBtn.click());
//const loginSignupLink = document.querySelectorAll(".form-box .bottom-

let signup = document.querySelector("#signup-link");

signup.addEventListener("click", () => {
  
  soHideUsers();
})

 


// signu btn popup//
const newhideBtn = document.querySelector(".form-show  .close-btn");
newhideBtn.addEventListener("click", () => signupBtn.click());

const signupBtn = document.querySelector("#btn1");
const loginshow = document.querySelector(" .form-show");
loginshow.style.display = "none";

let Show = true;
function soHideUsers() {
  if (Show) {
    loginshow.style.display = "block";
    Show = false;
  } else {
    loginshow.style.display = "none";
    Show = true;
}
}

signupBtn.addEventListener("click", () => {
  soHideUsers();
})

let login = document.querySelector("#login-link");
login.addEventListener("click", () => {
 
  showUsers();
});



/*  search bar */
const searchinput = document.getElementById("SearchBox");
const searcbar = document.getElementById("svg2");
searchinput.style.display = "none";
let nosow = true;

function newsohide(){
  if (nosow){
    searchinput.style.display = "block";
    nosow = false;
  }
  else{
    searchinput.style.display = "none";
    nosow = true;
  }
}

searcbar.addEventListener("click", () =>{
  newsohide();
})

//try//






