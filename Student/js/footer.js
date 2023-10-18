// To get the footer content
var footer = document.getElementById('footer')

fetch("/footer.html")
.then(res=>res.text())
.then(data=>{
    footer.innerHTML=data;
})
.catch(err=>{
    console.error('Error loading in footer.js :',err)
})