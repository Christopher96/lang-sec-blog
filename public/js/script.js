const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");
// add fixed class to navbar
window.addEventListener("scroll", function () {
    if (window.pageYOffset > 80) {
        navbar.classList.add("navbar-fixed");
    } else {
        navbar.classList.remove("navbar-fixed");
    }
});
// show sidebar
navBtn.addEventListener("click", function () {
    sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("show-sidebar");
});

$(document).ready(function () {
    options = {
        whiteList: {
            a: ["href", "title", "target"],
            h1: [],
            span: [],
            b: [],
            abbr: ["title"],
            address: [],
            area: ["shape", "coords", "href", "alt"],
            article: [],
        },
    };
    myxss = new filterXSS.FilterXSS(options);
    console.log(myxss);

    const form = $("#create-form");
    form.submit(function (event) {
        let title = $("#create-title").val();
        let body = $("#create-body").val();
        const payload = {title: myxss.process(title), body: myxss.process(body)};
        console.log(payload);
        $.post('/api/create', payload, function () {
            alert("Post was created!");
        });
        event.preventDefault();
    });
});
