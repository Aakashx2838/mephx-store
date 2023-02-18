//Adding events to preload
document.addEventListener("DOMContentLoaded", likeProduct, changeiPhonePhonePhoto, changeSamsungPhonePhoto, changeXiaomiPhonePhoto);
document.addEventListener("DOMContentLoaded", subscribe);
document.addEventListener(onclick, emailVerification);


//Functions to change image in respective product pages 

function changeiPhonePhonePhoto(n){
    let imageHolder = document.getElementById("SeletedImageSet");
    let imageList = ["images/iphone-images/iphone-whitehq.png" , "images/iphone-images/iphone-greenhq.png" , "images/iphone-images/iphone-goldhq.png", "images/iphone-images/iphone-bluehq.png"];
    imageHolder.src = imageList[n];
}

function changeSamsungPhonePhoto(n){
    let imageHolder = document.getElementById("SeletedImageSet");
    let imageList = ["images/samsung-images/samsung-grhq.png" , "images/samsung-images/samsung-brhq.png" , "images/samsung-images/samsung-blhq.png", "images/samsung-images/samsung-whhq.png"];
    imageHolder.src = imageList[n];
}

function changeXiaomiPhonePhoto(n){
    let imageHolder = document.getElementById("SeletedImageSet");
    let imageList = ["images/xiaomi-images/xiaomi-blhq.png" , "images/xiaomi-images/xiaomi-bluehq.png" , "images/xiaomi-images/xiaomi-grhq.png", "images/xiaomi-images/xiaomi-pnhq.png"];
    imageHolder.src = imageList[n];
}

function changeGooglePhonePhoto(n){
    let imageHolder = document.getElementById("SeletedImageSet");
    let imageList = ["images/google-images/gp6-blhq.png" , "images/google-images/gp6-gr2hq.png" , "images/google-images/gp6-grhq.png", "images/google-images/gp6-pnhq.png"];
    imageHolder.src = imageList[n];
}

function changeMotorollaPhonePhoto(n){
    let imageHolder = document.getElementById("SeletedImageSet");
    let imageList = ["images/motorolla-images/motorolla-blhq.png" , "images/motorolla-images/motorolla-bluehq.png" , "images/motorolla-images/motorolla-plhq.png", "images/motorolla-images/motorolla-grhq.png"];
    imageHolder.src = imageList[n];
}
//End of functions to change image in respective product pages 


//Function to like the product in product page
function likeProduct(){
    const likeStatus = document.getElementById("like");
    if(likeStatus.style.color === "white"){
        likeStatus.style.color = "red"
        alert("The Product has been liked");
    }else{
        likeStatus.style.color = "white"
    }
}
//End of function to like the product in product page


//Function to expand and shrink the answers in blog page
function expandAnswer(buttonTrack){
    document.getElementById("answer"+buttonTrack).style.height = "1320px"
    document.getElementById("plus"+buttonTrack).style.display = "none";
    document.getElementById("cross"+buttonTrack).style.display = "inline-block";
}

function shrinkAnswer(buttonTrack){
    document.getElementById("answer"+buttonTrack).style.height = "350px"
    document.getElementById("plus"+buttonTrack).style.display = "inline-block";
    document.getElementById("cross"+buttonTrack).style.display = "none";
}
//End of function to expand and shrink the answers in blog page


//Function to either display or hide mobile navbar
function mobileNavbar() {
    var x = document.getElementById("mobileNavbar");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}
//End of function to either display or hide mobile navbar


//Subscription Email verification
function subscribe(){
    var divStatus = document.getElementById("subscription-div");

    if (divStatus.style.display === "none") {
        divStatus.style.display = "block";
        emailVerification();
    } else {
        divStatus.style.display = "none";
    }

}
function emailVerification(){
    var subImgDiv = document.getElementById("sub-img-div");
    var subExplanation = document.getElementById("explanation");
    var enteredEmail = document.getElementById("enteredEmail");

    var subscriptionEmail = document.getElementById("subscriptionEmail").value;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(!subscriptionEmail.match(validRegex)){
        subImgDiv.innerHTML = '<img src="images/sub-veri-can.png" alt="" height="150px">';
        subExplanation.innerHTML = `
        Cannot verify your email. Please confirm.
        <br><br>
        Entered Email address 
        <a id="enteredEmail"> " `+ subscriptionEmail +` " </a>
        is invalid`;
    }else{
        subImgDiv.innerHTML = '<img src="images/sub-veri.png" alt="" height="150px">';
        subExplanation.innerHTML = `
        A Verification link has been sent to your email. Please confirm.
        <br><br>
        Entered Email address is:
        <a id="enteredEmail">`+ subscriptionEmail +`</a>
        `;
    }
    return (false);
}
//End of subscription Email verification


//Page Not Found redirect
    function redirectNotFound() {
        setTimeout(function(){
            window.location.href = './index.html';
        }, 2000);
    }
//End of Page Not Found redirect


//Navbar transparency manipulator
window.onscroll = () => {
    decreaseOpacity();
}

function decreaseOpacity(){
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5){
        document.getElementById('opacityManipulation').style.backgroundColor = "rgb(17, 17, 17, 0.78)";
    }else{
        document.getElementById('opacityManipulation').style.backgroundColor = "rgb(17, 17, 17)";
    }
}
//End of Navbar transparency manipulator
//Easyyyyy