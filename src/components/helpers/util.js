import { commerce } from '../lib/commerce'

export const fetchProducts = async (setProducts) => {
  const {data} = await commerce.products.list();
  setProducts(data)
}

export const fetchCart = async(setCart) => {
  setCart(await commerce.cart.retrieve());
}