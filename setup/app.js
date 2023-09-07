const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const content = document.querySelectorAll(".content");

about.addEventListener("click", (e) => {
  console.log(e.target.dataset.id);
  const id = e.target.dataset.id;
  if (id) {
    btns.forEach((btn) => {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    content.forEach((ctn) => {
      ctn.classList.remove("active");
    });
    const article = document.getElementById(id);
    console.log(article);
    article.classList.add("active");
  }
});
