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

  empty() {
    this._products = [];
  }

  order(criterio) {
    this._products.sort(criterio);
  }

  reverseOrder() {
    this._products.reverse();
  }
}
