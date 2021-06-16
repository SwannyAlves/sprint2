class ProductsController {
  constructor() {
    let $ = document.querySelector.bind(document);

    this._message = new Bind(
      new Message(),
      new MessageView($("#messageView")),
      "message"
    );

    this.allProducts();

    this._products = new Bind(
      new ProductsList(),
      new ProductsView($("#productsView")),
      "add"
    );
  }

  allProducts() {
    // TODO: implementar

    let service = new ProductService();
    service
      .getProducts()
      .then((products) =>
        products.forEach((product) => {
          try {
            this._products.add(product);
          } catch (error) {
            console.log(error);
          }
        })
      )
      .catch((erro) => (this._message = erro));
  }
}
