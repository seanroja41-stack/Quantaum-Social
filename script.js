<script>
const form = document.getElementById("postForm");
const input = document.getElementById("postInput");
const feed = document.getElementById("feed");
const photoInput = document.getElementById("photoInput");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const text = input.value.trim();
  const file = photoInput.files[0];

  if (!text && !file) return;

  const post = document.createElement("div");
  post.className = "post";

  const name = document.createElement("h4");
  name.textContent = "👤 You";

  const content = document.createElement("p");
  content.textContent = text;

  post.append(name, content);

  if (file) {
    const image = document.createElement("img");
    image.src = URL.createObjectURL(file);
    image.style.width = "100%";
    image.style.borderRadius = "10px";
    post.append(image);
  }

  feed.prepend(post);

  input.value = "";
  photoInput.value = "";
});
</script>

