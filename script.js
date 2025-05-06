const products = [
  {
    name: "Oak Coffee Table",
    image: "https://images.unsplash.com/photo-1616627783026-2f3c78aa50d3",
    price: "$120"
  },
  {
    name: "Cozy Armchair",
    image: "https://images.unsplash.com/photo-1616627452682-3a034ef6b05e",
    price: "$200"
  },
  {
    name: "Rustic Bookshelf",
    image: "https://images.unsplash.com/photo-1616627266029-d4ef9b6d7881",
    price: "$180"
  }
];

function exploreProducts() {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}

const productGrid = document.querySelector(".product-grid");
products.forEach(product => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <h3>${product.name}</h3>
    <p>${product.price}</p>
  `;
  productGrid.appendChild(card);
});