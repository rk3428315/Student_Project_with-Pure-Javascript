window.history.forward();

// To redirect on the dashboard page in not logout the page
function stopRedirectingOnDasboardwithoutLogin() {
    let currentURL = window.location.href;
    window.addEventListener("load", function () {
        let loginLocalData = localStorage.getItem('loginData');
        // console.log(regLocalData,"regLocalData");
    
        // const userData = JSON.parse(loginLocalData);
        // console.log(userData.isLogin, "userData");
        if (loginLocalData === null ) {    
            window.location.href = "/Home/homePage.html";
        }
    })
}
stopRedirectingOnDasboardwithoutLogin();
//----------------------End---------------------



// To show the active  tab on click
var myList = document.getElementById('dashul')
/* We will add the click listener to the parent <ul> element! */
myList.addEventListener('click', e => {
    /* Create a loop and iterate over all of the <li> elements inside #myList */
    for (var i = 0; i < myList.children.length; i++) {

        var li = myList.children[i];

        if (li === e.target) {

            li.classList.add('showActive')
        } else {

            li.classList.remove('showActive')
        }
    }
});
//----------------------End---------------------------


// window.stop();
