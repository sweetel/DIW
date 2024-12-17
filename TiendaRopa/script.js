window.addEventListener("load", () => {
  loadCategories();
  loadProductFunctionalities();
});

function loadProductFunctionalities() {
  let button = document.getElementById("buttonLoadProducts");
  let categorySelect = document.getElementById("filterCategories");

  button.addEventListener("click", async () => {
    button.innerText = "Loading...";
    button.disabled = true;

    try {
      let selectedCategory = categorySelect.value;
      let products = await getProductsFromAPI(selectedCategory);
      renderProducts(products);
    } catch (error) {
      console.error("Error loading products:", error);
      alert("Failed to load products. Please try again later.");
    } finally {
      button.innerText = "Load Products";
      button.disabled = false;
    }
  });
}

async function loadCategories() {
  let categorySelect = document.getElementById("filterCategories");

  try {
    // Obtener categorías desde la API
    let response = await fetch("https://fakestoreapi.com/products/categories");
    if (!response.ok) {
      throw new Error("Failed to fetch categories.");
    }

    let categories = await response.json();

    // Añadir las categorías al select
    categories.forEach((category) => {
      let option = document.createElement("option");
      option.value = category;
      option.innerText = category.charAt(0).toUpperCase() + category.slice(1); // Capitalizar
      categorySelect.appendChild(option);
    });
  } catch (error) {
    console.error("Error loading categories:", error);
    alert("Failed to load categories.");
  }
}

async function getProductsFromAPI(category) {
  let url = "https://fakestoreapi.com/products";

  // Filtrar por categoría si no es "all"
  if (category && category !== "all") {
    url += `/category/${category}`;
  }

  let response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch products.");
  }
  return await response.json();
}

function renderProducts(products) {
  let productsContainer = document.getElementById("productsContainer");
  productsContainer.innerHTML = "";

  products.forEach((product) => {
    let col = document.createElement("div");
    col.classList.add("col-12", "col-md-4", "col-lg-3");

    let card = document.createElement("div");
    card.classList.add("card", "h-100");

    let img = document.createElement("img");
    img.classList.add("card-img-top");
    img.classList.add("card-img-top", "img-fluid"); // img-fluid asegura que la imagen sea responsiva
    img.style.height = "100px"; // Altura fija
    img.style.objectFit = "cover";
    img.src = product.image;
    img.alt = product.title;

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let title = document.createElement("h5");
    title.classList.add("card-title");
    title.innerText = product.title;

    let price = document.createElement("p");
    price.classList.add("card-text");
    price.innerText = `$${product.price.toFixed(2)}`;

    let button = document.createElement("button");
    button.classList.add("btn", "btn-primary", "w-100");
    button.innerText = "View Details";

    button.addEventListener("click", () => {
      alert(
        `Product: ${product.title}\nPrice: $${product.price}\nDescription: ${product.description}`
      );
    });

    cardBody.appendChild(title);
    cardBody.appendChild(price);
    cardBody.appendChild(button);
    card.appendChild(img);
    card.appendChild(cardBody);
    col.appendChild(card);

    productsContainer.appendChild(col);
  });
}
