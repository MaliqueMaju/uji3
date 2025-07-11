const inputs = document.querySelectorAll(".input-field");
const bullets = document.querySelectorAll(".bullets span");
const textSlider = document.querySelector(".text-group");

inputs.forEach((input) => {
  input.addEventListener("focus", () => input.classList.add("active"));
  input.addEventListener("blur", () => {
    if (input.value === "") input.classList.remove("active");
  });
});

function moveSlider() {
  const index = parseInt(this.dataset.value);
  const offset = (index - 1) * 2.5; // sesuai height text-group line-height
  textSlider.style.transform = `translateY(-${offset}rem)`;

  bullets.forEach((b) => b.classList.remove("active"));
  this.classList.add("active");
}

bullets.forEach((bullet) => {
  bullet.addEventListener("click", moveSlider);
});
