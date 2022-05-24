function loadTemplate(data) {
  if (data == null) return;

  const blogContent = document.querySelector("#blog-content");
  let blogPost = document.createElement("div");

  fetch("blog-template.html")
    .then((res) => {
      return res.text();
    })
    .then((html) => {
      html = html.replace("{{title}}", data.title);
      html = html.replace("{{body}}", data.body);
      blogPost.innerHTML = html;
      blogContent.insertBefore(blogPost, blogContent.firstChild);
    })
    .catch((err) => console.error(err));
}
document.addEventListener("DOMContentLoaded", (e) => {
  fetch("/api/latest")
    .then((res) => res.json())
    .then((data) => loadTemplate(data))
    .catch((err) => console.error(err));
});
