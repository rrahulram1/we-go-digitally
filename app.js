
function loadContent(page) {
    fetch(page)
        .then(response => response.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;
        })
        .catch(error => console.error('Error loading content:', error));
}
loadContent("Home.html")

let homeNav = document.getElementById("home");
homeNav.addEventListener("click",function(e){
    let page_name = e.target.name;
    loadContent(page_name);
})

let aboutNav = document.getElementById("about");
aboutNav.addEventListener("click",function(e){
    let page_name = e.target.name;
    loadContent(page_name);
})

let DigitalMarketingNav =document.getElementById("DigitalMarketing");
DigitalMarketingNav.addEventListener("click",function(e){
    let page_name = e.target.name;
    loadContent(page_name);
})

let developerNav =document.getElementById("webDevelopment");
developerNav.addEventListener("click",function(e){
    let page_name = e.target.name;
    loadContent(page_name);
})

let brandingNav =document.getElementById("Branding");
brandingNav.addEventListener("click",function(e){
    let page_name = e.target.name;
    loadContent(page_name);
})

let graphicsNav =document.getElementById("graphicsAndDesigning");
graphicsNav.addEventListener("click",function(e){
    let page_name = e.target.name;
    loadContent(page_name);
})
let bussinessNav =document.getElementById("bussinessEnquiry");
bussinessNav.addEventListener("click",function(e){
    let page_name = e.target.name;
    loadContent(page_name);
})
let carriersNav =document.getElementById("carriersPage");
carriersNav.addEventListener("click",function(e){
    let page_name = e.target.name;
    loadContent(page_name);
})
