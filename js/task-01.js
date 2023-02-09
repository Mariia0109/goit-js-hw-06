const ulСategoriesByClass = document.querySelectorAll("li.item");
console.log("Number of categories:", ulСategoriesByClass.length);

const liСategoriesByClasses = document.querySelectorAll("li.item");
for (let liСategoriesByClass of liСategoriesByClasses) {
console.log("Category:", liСategoriesByClass.firstElementChild.textContent);
console.log("Elements:", liСategoriesByClass.lastElementChild.children.length);
}


