import { categorySelectbox } from "./selector";

export const findButton = document.getElementById("fetch-recipe");
findButton.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(categorySelectbox.value);
});
