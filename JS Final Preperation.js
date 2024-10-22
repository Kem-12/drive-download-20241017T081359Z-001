const postListEl = document.querySelector(".post-list");

async function onSearchChange(event) {
  const id = event.target.value;
  renderPosts(id);
}

async function renderPosts(userId) {
  const id = localStorage.getItem("id");
  const posts = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId || id}`
  );
  const postsData = await posts.json();

  postListEl.innerHTML = postsData.map((post) => postHTML(post)).join("");
}

function postHTML(post) {
  return ` <div class="post">
      <div class="post__title">
        ${post.title}
      </div>
      <p class="post__body">
        ${post.body}
      </p>
    </div>`;
}

renderPosts();
