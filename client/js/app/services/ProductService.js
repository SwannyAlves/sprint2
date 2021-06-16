class ProductService {
  constructor() {
    this._http = new HttpService();
  }

  getProducts() {
    return this._http
      .get("http://localhost:3000/produtos")
      .then((products) => {
        return products.map(
          (objeto) => new Product(objeto.imagem, objeto.descricao, objeto.valor)
        );
      })
      .catch((erro) => {
        console.log(erro);
        throw new Error("Não foi possível obter as negociações da semana");
      });
  }
}
