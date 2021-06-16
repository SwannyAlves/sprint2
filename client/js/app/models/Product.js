class Product {
  // TODO: implementar
  constructor(img, title, price) {
    this._img = img;
    this._title = title;
    this._price = price;
  }

  // metodos acessadores get só leitura

  get title() {
    return this._title;
  }

  get price() {
    return this._price;
  }

  get img() {
    return this._img;
  }

  //metodos set - escrita

  set title(newTitle) {
    this._title = newTitle;
  }

  set price(newPrice) {
    this._price = newPrice;
  }

  set img(newImg) {
    this._img = newImg;
  }
}
