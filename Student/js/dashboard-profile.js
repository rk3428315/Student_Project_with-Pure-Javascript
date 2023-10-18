// To onload window show the profile Data
getProfile();

// To get profile
function getProfile() {
    let profile = document.getElementById('showDashNoticeData');

    fetch("/dashboard-profile.html")
        .then(res => res.text())
        .then(data => {
            profile.innerHTML = data;
            showProfile();
        });
}
//------------------------ End ---------------------------


// To call the profile
function showProfile() {
    let loginLocaldata = JSON.parse(localStorage.getItem('loginData'));
    console.log(loginLocaldata.name)
    let div = document.getElementById('profileId');
    fetch("/dashboard-profile.html")
        .then(function (res) {
            res.text()
                .then(function (value) {
                    value += `<div class="p-3">
                <div class="card-header border-3 ">
                    <h2>Profile</h2>
                </div>
                <div class="card py-5 bg-secondary p-2">
                    <div class="row">
                        <div class="col-lg-4">
                            <div class="card mb-4">
                                <div class="card-body text-center">
                                    <img src="/Images/userImage1.png" alt="avatar" class="rounded-circle img-fluid"
                                        style="width: 150px;">
                                    <h5 class="my-3">${loginLocaldata.name}</h5>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <div class="card mb-4">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="row">
                                            <div class="col-sm-3"> Name </div>
                                            <div class="col-sm-9 text-muted ">${loginLocaldata.name}</div>
                                        </div>
                                    </div>
                                    <hr>
                                    <div class="row">
                                        <div class="row">
                                            <div class="col-sm-3"> Email</div>
                                            <div class="col-sm-9 text-muted ">${loginLocaldata.email}</div>
                                        </div>
                                    </div>
                                    <hr>
                                    <div class="row">
                                        <div class="col-sm-3"> Gender</div>
                                        <div class="col-sm-9 text-muted ">${loginLocaldata.gender}</div>
                                    </div>
                                    <hr>
                                    <div class="row">
                                        <div class="col-sm-3">Age</div>
                                        <div class="col-sm-9 text-muted"> ${loginLocaldata.age} </div>
                                    </div>
                                    <hr>
                                    <div class="row">
                                        <div class="col-sm-3">Address</div>
                                        <div class="col-sm-9 text-muted"> ${loginLocaldata.address} </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
                    div.innerHTML = value;
                });
        });

}

//------------------End--------------------------

