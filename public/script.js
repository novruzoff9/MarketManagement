// script.js

// Ürünleri yükleyip listeleme
async function loadProducts() {
  const productList = document.getElementById("productList");
  productList.innerHTML = ""; // Listeyi temizle

  const querySnapshot = await db.collection("products").get();
  querySnapshot.forEach((doc) => {
    const product = doc.data();
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.supplier}</td>
            <td>${product.price} AZN</td>
        `;
    productList.appendChild(row);
  });
}

// Arama kutusu için olay
document.getElementById("searchBox").addEventListener("input", function () {
  const searchValue = this.value.toLowerCase();
  const products = document.querySelectorAll("#productList tr");
  products.forEach((row) => {
    const productName = row.firstChild.textContent.toLowerCase();
    row.style.display = productName.includes(searchValue) ? "" : "none";
  });
});

// Ürün ekleme işlemi
document.getElementById("productForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("productName").value.trim();
  const supplier = document.getElementById("productSupplier").value.trim();
  const price = parseFloat(document.getElementById("productPrice").value);

  // Aynı ada sahip ürün varsa hata ver
  const existingProduct = await db
    .collection("products")
    .where("name", "==", name)
    .get();
  if (!existingProduct.empty) {
    document.getElementById("errorMessage").textContent =
      "Eyni adda məhsul artırmaq olmaz!";
    return;
  }

  await db.collection("products").add({ name, supplier, price });
  location.href = "index.html"; // Ana sayfaya dön
});

// Sayfa yüklendiğinde ürünleri yükle
loadProducts();
