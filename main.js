/* ============================================================
   You should not need to edit this file.
   To add products, edit js/products.js instead.
   ============================================================ */

function monogram(name) {
  return name.trim().charAt(0).toUpperCase();
}

function renderRow(product, index) {
  const num = String(index + 1).padStart(2, "0");
  const thumb = product.image
    ? `<img src="${product.image}" alt="${product.name}">`
    : `<span>${monogram(product.name)}</span>`;

  return `
    <a class="ledger-row" href="${product.link || '#'}" target="_blank" rel="noopener">
      <span class="ledger-index">N&deg;${num}</span>
      <span class="ledger-thumb">${thumb}</span>
      <span class="ledger-main">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
      </span>
      <span class="ledger-category">${product.category}</span>
      <span class="ledger-price">${product.price}</span>
      <span class="ledger-arrow">&#8594;</span>
    </a>
  `;
}

function renderList(el, list) {
  if (!el) return;
  if (!list.length) {
    el.innerHTML = `<p class="empty-note">No products in this category yet.</p>`;
    return;
  }
  el.innerHTML = list.map(renderRow).join("");
}

document.addEventListener("DOMContentLoaded", function () {
  // Featured products on the homepage (first 3)
  const featuredEl = document.getElementById("featured-list");
  if (featuredEl) {
    renderList(featuredEl, PRODUCTS.slice(0, 3));
  }

  // Full shop with filtering
  const shopEl = document.getElementById("shop-list");
  if (shopEl) {
    renderList(shopEl, PRODUCTS);

    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        filterButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const category = btn.getAttribute("data-filter");
        const filtered =
          category === "All"
            ? PRODUCTS
            : PRODUCTS.filter((p) => p.category === category);
        renderList(shopEl, filtered);
      });
    });
  }

  // Mobile nav toggle
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", function () {
      navLinks.classList.toggle("open");
    });
  }
});
