window.history.forward();

// Onclick Login button find the existing cridential and redirect to dashboard
function getLoginData() {
    
    let loginLocaldata = JSON.parse(localStorage.getItem('localData'));

    var email = document.getElementById('inputemail').value;
    var regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    if (!regexEmail.test(email) == true) {
        document.getElementById("email").innerHTML =
        `<p class="text-danger"> Please enter your email</p>`;
        return false
    } else {
        document.getElementById("email").innerHTML = "";
        // return true;
    }

    var password = document.getElementById('inputpassword').value;
    if (password.length < 1) {
        document.getElementById("password").innerHTML =
            ` <p class="text-danger"> Please enter your password</p>`;
    } else {
        document.getElementById("password").innerHTML = "";
    }

    if (email  && password ) {

        // To iterate the all value from local Storage data
        for (var res of loginLocaldata) {

            // console.log(res,"res Data");
            // If email and password is true then login 
            // and redirect into dashboard home Page
            
            if (email === res.email && password === res.password) {
                alert("Login Successfully!");
                res.isLogin = true;              
                let storeLoggedData = res;
                console.log(storeLoggedData,"Login Data");
                localStorage.setItem("loginData", JSON.stringify(storeLoggedData));
                
            }
            
            if (res.isLogin == true) {
                window.location.href = "/dashbord-home.html";
            }
        }
    }
    // else {
    //     alert("Please Enter the correct credentials!")
    // }
}

//-------------End--------------------------








// ////////////////////
// loginLS = () =>{
//     // let password = document.getElementById('inputpassword').value;
//     let email = document.getElementById('inputemail').value;
//     let retString = localStorage.getItem("local Data")
//     let retArray = JSON.parse(retString)
//     let retkey= Object.values(retArray);
//     for (var i = 0; i < retkey.length; i++) {
//         console.log(i,"local Data")
//         if (retkey[i] === email ) {
//             alert("Login");
//         }       
//     }
// }




// To data store in local storage

// let storeLoginData = [];
// function loginData(email, password) {
//     this.email = email,
//         this.password = password
// }

// createLoginData = () => {
//     var email = document.getElementById('inputemail').value;
//     var password = document.getElementById('inputpassword').value;

//     newLoginData = new loginData(email, password);
//     storeLoginData.push(newLoginData);
//     console.log(storeLoginData, "jkhggfh");
//     localStorage.setItem("local Data", JSON.stringify(storeLoginData));
// }

//-----------End------------------

