// let nav1 = document.getElementById('navBar').click;
// console.log(nav1,"clicked")
// if(nav1 == true){
//     location.reload(nav)
// }

// To redirect on the dashboard page in not logout the page
function stopRedirectingOnDasboard() {
    window.addEventListener("load", function () {
        let loginLocalData = localStorage.getItem('loginData');
        // console.log(regLocalData,"regLocalData");
    
        const userData = JSON.parse(loginLocalData);
        // console.log(userData.isLogin, "userData");
        if (userData.isLogin === true) {    
            window.location.replace('/dashbord-home.html');
        }
    })
}
stopRedirectingOnDasboard();
//----------------------End---------------------



// To get json data for the Notice bar
var allJSONData = [];
let div = document.getElementById('dynamicNav');
fetch('/JsonData/noticeBarData.json')
.then(function(res){
    res.json().then(function(value){
        allJSONData = value;
        getNoticeBar();
    })
})

// To show the data of notice bar
function getNoticeBar (){
    var row = "";

    // To iteral the allJSONData one by one and add in row
    allJSONData.forEach(element => {
        row += '<a class=" nav-link text-dark" href="#">' + element.first_name + '</a>';
        // console.log(element.first_name, "row");

    });
    div.innerHTML = row;
}

//  -------------End-------------------



// To the crousel scroll 
var photos = ["/Images/slide2.jpg", "/Images/Slide5.jpg","/Images/slideImage1.jpeg"]
var imgTag = document.querySelector("img");
var count = 0;
setInterval(() => {
    next();

}, 5000);

function next() {

    count++;
    if (count >= photos.length) {
        count = 0;
        imgTag.src = photos[count];
    } else {
        imgTag.src = photos[count];
    }
}

function prev() {
    count--;
    if (count < 0) {
        count = photos.length - 1;
        imgTag.src = photos[count];
    } else {
        imgTag.src = photos[count];
    }
}

//---------------End-------------------

// To get json data for the first images with text
let storeImg1Data = [];
fetch('/JsonData/img1Data.json')
.then(function(res){
    res.json().then(function(value){
        storeImg1Data = value;
        getImagesNaruto();
    })
})

// function to get data of images
function getImagesNaruto(){
    let div = document.getElementById('img12');
    var row = "";

    // To iteral the allJSONData one by one and add in row
    storeImg1Data.forEach(element => {
        row += '<div class="col-md-6"><img src="'+element.img+'" alt="kk" class="rounded-circle d-inline-block align-text-top h-100 w-100 p-3"></div><div class="col-md-6" style="align-self: center;"><h5> Naruto </h5><hr>'+element.text+'</div>'
        console.log(element.img, "row");        
    });

    div.innerHTML = row;
} 
// ------------End---------------


// To get json data for the two images with data
let storeImg2Data = [];
fetch('/JsonData/img2Data.json').then(function(res){
    res.json().then(function(result){
        storeImg2Data = result;
        getImagesKira();

   })
});

// function to get data of images
function getImagesKira(){
    let div = document.getElementById('img2');
    var row = "";

    // To iteral the allJSONData one by one and add in row
    storeImg2Data.forEach(element => {
        row += '<div class="col-md-6" style="align-self: center;"><h5>L and Light</h5><hr>'+element.text+'</div><div class="col-md-6"><img src="'+element.img+'" alt="kk" class="rounded-circle d-inline-block align-text-top h-100 w-100 p-3">'
        console.log(element.img, "row");        
    });

    div.innerHTML = row;
}   
//  ---------------End-------------------


// To get json data for the Footer
// let storeFooterData = "";
// let homeFooter = document.getElementById("footer")
// fetch("/footer.html")
//         .then(res => res.text())
//         .then(value => storeFooterData = value)
//         .then(value => homeFooter.innerHTML = value);

//         homeFooter.innerHTML = storeFooterData;
   

//  ---------------End-------------------

// To marquee the four images
// setTimeout(function (){
//     const para1 = document.getElementById("img");   
//     animate(para1);
//     // animate(para2);
    
//     function animate(element) {
//         let elementWidth = element.offsetWidth; // width of element 
//         let parentWidth = element.parentElement.offsetWidth; // width of parent
//         let flag = 0;
    
//         setInterval(() => {
//             element.style.marginLeft = --flag + "px";
    
//             if (elementWidth == -flag) {
//                 flag = parentWidth;
//             }
//         }, 1);
//     }

// }, 1000)

//  ---------------End-------------------


