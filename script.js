const form = document.getElementById("postForm");
const input = document.getElementById("postInput");
const feed = document.getElementById("feed");
const photoInput = document.getElementById("photoInput");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const message = input.value.trim();
  const photo = photoInput.files[0];

  if (message === "" && !photo) {
    alert("Write something first!");
    return;
  }

  const post = document.createElement("div");
  post.className = "post";

  const name = document.createElement("h4");
  name.textContent = "👤 You";

  const text = document.createElement("p");
  text.textContent = message;

  post.appendChild(name);
  post.appendChild(text);

  if (photo) {
    const image = document.createElement("img");
    image.src = URL.createObjectURL(photo);
    image.style.width = "100%";
    post.appendChild(image);
  }

  feed.prepend(post);

  input.value = "";
  photoInput.value = "";
});
