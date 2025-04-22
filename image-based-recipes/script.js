// Note: I was going to use the grid layout javascript we learned in a previous lesson but I decided to spruce it up a bit.  I used ChatGPT to help create the transitions


function updateInfo(desc, link, mealName) {
  const placeholder = document.getElementById("placeholder");
  const linkElement = document.getElementById("main-link");
  const descElement = document.getElementById("description");

  // Hide the placeholder
  if (placeholder) {
    placeholder.classList.add("hidden");
  }

  // Fade out existing content
  linkElement.classList.add("hidden");
  descElement.classList.add("hidden");

  // Wait for fade-out to complete, then update and fade in
  setTimeout(() => {
    linkElement.href = link;
    linkElement.textContent = mealName;
    descElement.textContent = desc;

    linkElement.classList.remove("hidden");
    descElement.classList.remove("hidden");
  }, 400);
}
