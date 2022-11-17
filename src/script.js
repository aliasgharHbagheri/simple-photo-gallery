let popUp = document.querySelector(".pop-up");
let btnClose_popup = document.querySelector(".close-pop-up");
let pictureGallery = document.querySelectorAll(".picture-item");

// List all photos in the gallery
let allPicture = [...pictureGallery];

// Looping over all photos and creating a click event for each of them
allPicture.map( itemPicture => {
    itemPicture.addEventListener("click",showPicture);
});


//  Running a function after clicking on one of the photos and opening a popup to show that photo
function showPicture(index){
    popUp.classList.add("pop-up-active");
    popUp.firstElementChild.src = index.target.src;
}


// Close the popup after clicking the cross button
btnClose_popup.addEventListener("click",()=>{
    popUp.classList.remove("pop-up-active");
});
