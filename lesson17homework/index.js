const divItems = document.querySelector(".items");
const btnDownload = document.querySelector("#download");

btnDownload.onclick = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  console.log(posts);
  posts.forEach((post) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");

    const h3 = document.createElement("h3");
    h3.classList.add("title");
    h3.innerText = post.title;

    const body = document.createElement("p");
    body.classList.add("body");
    body.innerText = post.body.slice(0, 50) + "...";

    const userId = document.createElement("p");
    userId.classList.add("user-id");
    userId.innerText = `User ID: ${post.userId}`;

    const btn = document.createElement("button");
    btn.innerText = "Full Post";

    btn.onclick = () => {
      console.log(post.id, post.title);
    };

    itemDiv.append(h3, userId, body, btn);
    divItems.appendChild(itemDiv);
  });
};
