import { getCartProductFromLS } from "./getCartProducts";

export const fetchQuantityFromCartLS = (id, price) => {
  let cartProducts = getCartProductFromLS();

  let existingProduct = cartProducts.find((curProd) => curProd.id === id);
  let quantity = 1;

  if (existingProduct) {
    quantity = existingProduct.quantity;
    price = existingProduct.price;
  } else {
    price = price || 0; // Set default price to 0 if not found
  }

  return { quantity, price };
};
