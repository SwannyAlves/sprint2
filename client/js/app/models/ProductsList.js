class ProductsList {
  constructor() {
    this._products = [];
  }

  add(product) {
    this._products.push(product);
  }

  get products() {
    return [].concat(this._products);
  }

  set products(products) {
    this._products = products;
  }

  filter(search) {
    const filtered_products = this._products.filter((item) => {
      return item._title.toLowerCase().includes(search.toLowerCase());
    });

    this._products = filtered_products;
  }

  empty() {
    this._products = [];
  }
}
