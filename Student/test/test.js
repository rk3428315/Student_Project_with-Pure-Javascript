
// let clickMenu = document.getElementById('showNavMenu');

// clickMenu.addEventListener('click',function(){
//     document.getElementById('menuul').classList.toggle("show");
// })



// To get json data for the four image

let storeImgData = [];
fetch('/JsonData/imgData.json')
.then(function(res){
    res.json().then(function(value){
        storeImgData = value;
        fourImages();
    })
});

function fourImages(){
    let div = document.getElementById('img');
    var row = "";
    let id = 0;
    // To iteral the allJSONData one by one and add in row
    storeImgData.forEach(element => {
        row += '<div class="col-sm-3 col-3 " id="img1"><img src="' + element.img + '" alt="error" class=" h-100 w-100 "></div>'
        console.log(element.img, "row");
        
    });

    div.innerHTML = row;
}
//  ---------------End-------------------