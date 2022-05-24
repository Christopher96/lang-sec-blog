document.addEventListener("DOMContentLoaded", (e) => {
  document.querySelector("#create-form").onsubmit = function (e) {
    e.preventDefault();

    let title = document.querySelector("#create-title").value;
    let body = document.querySelector("#create-body").value;

    const data = { title: filterXSS(title), body: filterXSS(body) };

    fetch("/api/create", {
      method: "POST",
      body: "data=" + encodeURIComponent(JSON.stringify(data)),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.status == 200) {
          window.location.href = "/blog.html";
        }
      })
      .then((html) => console.log(html))
      .catch((err) => console.error(err));
  };
});
