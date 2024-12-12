window.addEventListener("load", () => {
    loadProductFunctionalities();
  });
  
  function loadProductFunctionalities() {
    let button = document.getElementById("buttonLoadProducts");
  
    button.addEventListener("click", async () => {
      button.innerText = "Loading...";
      button.disabled = true;
  
      try {
        let products = await getProductsFromAPI();
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
  
  async function getProductsFromAPI() {
    let response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error("Failed to fetch products.");
    }
    return await response.json();
  }
  
  function renderProducts(products) {
    let productsContainer = document.getElementById("productsContainer");
    productsContainer.innerHTML = "";
  
    products.forEach(product => {
      let col = document.createElement("div");
      col.classList.add("col-12", "col-md-4", "col-lg-3");
  
      let card = document.createElement("div");
      card.classList.add("card", "h-100");
  
      let img = document.createElement("img");
      img.classList.add("card-img-top");
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
        alert(`Product: ${product.title}\nPrice: $${product.price}\nDescription: ${product.description}`);
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
  