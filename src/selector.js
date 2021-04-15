const selecter = document.getElementById("category-select");

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
  selecter.appendChild(option);
};

categories.map(createCategoryOption);
