function getCoruse() {
    let course = document.getElementById('showDashNoticeData');

    fetch("/dashboard-course.html")
        .then(res => res.text())
        .then(data => {
            course.innerHTML = data;
            showCourse();
        });
}



function showCourse() {
    let div = document.getElementById('courseId');
    fetch("/dashboard-course.html")
        .then(res => res.text())
        .then(data => {
            data += ` <div class="p-3">
            <div class="card-header border-3 ">
                <h2>Courses</h2>
            </div>
            <div class="card ">
                <ul class="list-group list-group-light ">
                    <li class="list-group-item px-3">BA <a href="https://www.bhu.ac.in/Site/Home/1_2_16_Main-Site" class="m-5">Details about BA Course</a></li>
                    <li class="list-group-item px-3">BCA <a href="https://www.bhu.ac.in/Site/Home/1_2_16_Main-Site" class="m-5">Details about BA Course</a></li>
                    <li class="list-group-item px-3">BBA <a href="https://www.bhu.ac.in/Site/Home/1_2_16_Main-Site" class="m-5">Details about BA Course</a></li>
                    <li class="list-group-item px-3">MBA <a href="https://www.bhu.ac.in/Site/Home/1_2_16_Main-Site" class="m-5">Details about BA Course</a></li>
                    <li class="list-group-item px-3">MCA <a href="https://www.bhu.ac.in/Site/Home/1_2_16_Main-Site" class="m-5">Details about BA Course</a></li>
                    <li class="list-group-item px-3">B.Tech <a href="https://www.bhu.ac.in/Site/Home/1_2_16_Main-Site" class="m-5">Details about BA Course</a></li>
                    <li class="list-group-item px-3">M.Tech <a href="https://www.bhu.ac.in/Site/Home/1_2_16_Main-Site" class="m-5">Details about BA Course</a></li>
                </ul>
            </div>
        </div>`;
            div.innerHTML = data;
        })
}
