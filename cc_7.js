document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("headlineInput");
  const button = document.getElementById("updateBtn");
  const cta = document.getElementById("cta");

  button.addEventListener("click", () => {
    const newHeadline = input.value.trim();
    if (newHeadline) {
      cta.textContent = newHeadline;
      input.value = ""; // optional: clear input after update
    }
  });
});
