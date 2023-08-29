
async function renderProduct(product) {
    var divProduct = document.getElementById('product-div');
    const productHtml =
        `
    <div class="gift__img col-sm-3 col-12">
      <img
        id="product-img"
        src=${product.image}
        width="200"
        height="150"
        style="margin-top: 45px; margin-bottom: 10px"
      />
    </div>
    <div
      class="text-start gift__info col-sm-9 col-12"
      style="margin-top: 20px"
    >
      <h4 id="product-name" class="gift__name">${product.name}</h4>
      <div class="gift__details"></div>
      <div class="gift__bottom row">
        <div class="gift__price-wrap col-12 col-sm-6">
          <div class="gift__normal-price"></div>
          <div class="fs-4 text-start gift__today-price">
            <span>Today's Price:&nbsp;</span
            ><span id="product-price" class="shoe-price-product">$${product.price}!</span>
          </div>
          <div class="gift__quantity-left">
            <span>Qty Left: </span
            ><span id="total-product" class="gift__data">9</span>
          </div>
        </div>
      </div>
      <div class="filter">
        <form>
          <select>
            <option value="">Select Quantity</option>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">5</option>
          </select>
          <select>
            <option value="">Select Size</option>
            <option value="">42</option>
            <option value="">43</option>
            <option value="">44</option>
            <option value="">45</option>
          </select>
        </form>
      </div>
      <button
        class="btn btn-primary"
        id="add-to-cart-btn"
        type="button"
        style="margin-left: 14px"
      >
        add to cart
      </button>
    </div>`
    divProduct.innerHTML = productHtml
}

export { renderProduct };