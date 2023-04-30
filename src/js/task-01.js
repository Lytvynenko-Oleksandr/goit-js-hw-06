
const categoriesItemsEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesItemsEl.length}`);

categoriesItemsEl.forEach((categoryItem) => {
const categoryTitleEl = categoryItem.querySelector("h2").textContent;
const categoryEl = categoryItem.querySelectorAll("li").length;
console.log(`Category: ${categoryTitleEl}`);
console.log(`Elements: ${categoryEl}`);
});








