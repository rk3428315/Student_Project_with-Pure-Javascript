// To Show list of menu onclick menu bar
setTimeout(() => {

    let clickMenu = document.getElementById('showNavMenu');
    let menuInterval = setInterval(() => {
        if (clickMenu) {
            getMenu()
        }
    }, 500);

    function getMenu() {
        clearInterval(menuInterval);
        clickMenu.addEventListener('click', function () {
            document.getElementById('menuul').classList.toggle("show");
        })

    }
}, 500);
// ------------------End-------------------

// To show the active  tab on click
// function getActive() {
    setTimeout(() => {

        var myList1 = document.getElementById('activePage');

        /* We will add the click listener to the parent <ul> element! */
        myList1.addEventListener('click', e => {

            /* Create a loop and iterate over all of the <li> elements inside #myList */
            for (var i = 0; i < myList.children.length; i++) {

                var li = myList.children[i];

                if (li === e.target) {

                    li.classList.add('showActive1')
                } else {

                    li.classList.remove('showActive1')
                }
            }
        });

    }, 1000);
// }
//----------------------End---------------------------


// To get the navbar content
var myList = document.getElementById('navBar');
fetch("/navBar.html")
    .then(res => res.text())
    .then(data => {
        myList.innerHTML = data;
    })
    .catch(err => {
        console.error("This is navbar error", err);
    });

// }
// To display the tab in Navbar (reg, login, contact us)
// setTimeout(() => {

//     var myList = document.getElementById('myNavbar')
//     // console.log(myList);

//     var checkTime = setInterval(() => {
//         if (myList)
//             navData()
//     }, 500);

//     function navData() {
//         clearInterval(checkTime);

//         var myList = document.getElementById('myNavbar')
//         /* We will add the click listener to the parent <ul> element! */
//         myList.addEventListener('click', e => {
//             /* Create a loop and iterate over all of the <li> elements inside #myList */
//             for (var i = 0; i < myList.children.length; i++) {
//                 var li = myList.children[i];
//                 console.log(li, "li");
//                 console.log(e.target, "target");

//                 if (li === e.target) {
//                     li.classList.add('show')
//                 } else {
//                     li.classList.remove('show');
//                 }
//             }
//         });
//     }

// }, 1000);




//  -------------End-------------------


// // set Interval to get all data of menu on the all pages

// var div = document.getElementById('navbar');

// var checkTime = setInterval(() => {
//     if (div !== null)
//         navData()
// }, 500);

// function navData() {
//     clearTimeout(checkTime);
//     document.getElementById('navbar');
// }

// //----------End------------------------

// // set Interval to get all data of menu on the all pages

// var div = document.getElementById('navbar');

// var checkTime = setInterval(() => {
//     if (div !== null)
//         navData()
// }, 500);

// function navData() {
//     clearTimeout(checkTime);
//     document.getElementById('navbar');
// }

// //----------End------------------------



// To get json data for the Nav Bar

// let storeNavData = [];
// let id = 0;
// var row = "";

// fetch('/JsonData/navBarData.json')
//     .then((res => res.json()))
//     .then((value => storeNavData = value));

// setTimeout(function () {
//     let nav = document.getElementById('myNavbar');
//     // To iteral the allJSONData one by one and add in row
//     storeNavData.forEach(element => {
//         row += '<li id="' + id + '" class="nav-item"><a class="nav-link text-dark" aria-current="page" href="' + element.link + '">' + element.name + '</a></li>';
//         //  console.log(element.name, "row");
//         id++;
//         console.log(id, "id");
//     });
//     // console.log(row,"row")


//     nav.innerHTML = row;
//     // console.log(row, "row");

// }, 2000);




// let hide = document.getElementById('myNavbar');
// console.log(hide,"hide")
// hide.addEventListener("click", function () {
//     let checked = document.getElementById("demo");
//     checked.style.display = "none"
// });

// let regClicked = document.getElementById("0").clicked
//     if(regClicked)  {
//         clicked.style.display = "none";
//         console.log(clicked,"clicked")
//     }  

// // let buttonClicked = false;
// clicked.addEventListener('click', function () {
//     if (buttonClicked) {
//         clicked.style.display = "block";
//     }
//     else{
//         clicked.style.display = "none";
//         console.log('Submit button is clicked');
//     }
//     // buttonClicked = true;
// });

//  ---------------End-------------------


// var clickButton = document.getElementsByClassName('nav-item');
// for (let i = 0; i < clickButton.length; i++) {
//     clickButton[i].addEventListener("click", function () {

//         var current = document.getElementsByClassName("active");
//         if(current.length > 0){

//             current[0].className = current[0].className.replace(" active", "");
//         }
//         this.className += " active"
//     })
// }