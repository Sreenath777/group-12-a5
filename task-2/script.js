const articlesContainer = document.getElementById("articles");

if (localStorage.getItem("articles")) {
  articlesContainer.innerHTML = localStorage.getItem("articles");
}

const addArticleForm = document.getElementById("add-article-form");

addArticleForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;

  const newArticle = document.createElement("article");
  const articleHTML = `
    <header>
      <h2>${title}</h2>
      <p class="meta">Posted on ${new Date().toLocaleDateString()} by Anonymous</p>
    </header>
    <p>${description}</p>
  `;
  newArticle.innerHTML = articleHTML;

  articlesContainer.appendChild(newArticle);
  localStorage.setItem("articles", articlesContainer.innerHTML);
  addArticleForm.reset();
});
