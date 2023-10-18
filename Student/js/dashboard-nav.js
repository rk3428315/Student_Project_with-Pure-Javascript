// To fetch the data of navabar of dashboard
let dashNav = document.getElementById('dashnav');
fetch("/dashboard-nav.html")
    .then(res => res.text())
    .then(data => {
        dashNav.innerHTML = data;
    });

//----------------End------------------------


// To Logout from dashboard page
function logout() {
    var result = confirm("Are you sure want to Logout !");
    if (result == true) {
        let removeLoggedData = localStorage.removeItem("loginData");
        console.log(removeLoggedData);
        window.location.href = "/Home/homePage.html";
    }    
}
//-----------End--------------