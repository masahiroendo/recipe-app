import { findButton } from "./button";

export const categorySelectbox = document.getElementById("category-select");

const categories = [
  {
    text: "-- Please select a category --",
    value: "",
  },
  {
    text: "European",
    value: "european",
  },
  {
    text: "Asian",
    value: "asian",
  },
  {
    text: "African",
    value: "african",
  },
];

const createCategoryOption = (category) => {
  const option = document.createElement("option");

  option.text = category.text.toUpperCase();
  option.value = category.value;
  categorySelectbox.appendChild(option);
};

categories.map(createCategoryOption);

categorySelectbox.addEventListener("change", ({ target: { value } }) => {
  if (value === "") {
    findButton.textContent = "Find a recipe";
    return;
  }
  findButton.textContent = `Find a ${value} recipe`;
});
