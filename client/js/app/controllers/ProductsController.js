class ProductsController {
  constructor() {
    let $ = document.querySelector.bind(document);

    this._message = new Bind(
      new Message(),
      new MessageView($("#messageView")),
      "message"
    );

    this.allProducts();

    // this._products = new Bind(
    //   new ProductsList(),
    //   new ProductsView($("#productsView")),
    //   "add",
    //   "empty",
    //   "order",
    //   "reverseOrder"
    // );

    new ProductsView($("#productsView"));
  }

  allProducts() {
    // TODO: implementar

    let service = new ProductService();
    service
      .getProducts()
      .then((products) =>
        products.forEach((product) => {
          this._products.add(product);
        })
      )
      .catch((erro) => (this._message = erro));
  }
}
