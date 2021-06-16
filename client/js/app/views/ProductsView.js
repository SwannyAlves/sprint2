class ProductsView extends View {
  constructor(element) {
    super(element);
  }

  template(model) {
    return `     
      <div class="products__row">
       <ol class="products__list">   
          ${model.products
            .map(
              (item) => `         
              <li class="products__card">
                <div class="card">
                  <img
                    class="card__img"
                    src=${item.img}
                    alt="Camiseta Infantil Manga Curta Super Star Mario Bros Cinza Mescla Chumbo Tam 4 a 10"
                  />
                  <p class="card__description">
                  ${item.title}
                  </p>
                  <p class="card__price">R$ ${item.price}</p>
                </div>
              </li>  
          `
            )
            .join("")} 
            </ol>
            </div>            
    `;
  }
}
