import { commerce } from "../lib/commerce"

export const combineProvider = (...components) => {
  return components.reduce(
    (AccumulatedProvider, CurrentProvider) => {
      return ({children}) => (
        <AccumulatedProvider>
          <CurrentProvider>
            {children}
          </CurrentProvider>
        </AccumulatedProvider>
      )
    }, ({children}) => <>{children}</>
  )
}

export const fetchProducts = async (setProducts) => {
  const {data} = await commerce.products.list();
  setProducts(data)
}

export const fetchCart = async(setCart) => {
  setCart(await commerce.cart.retrieve());
}

export const handleAddToCart = async(productId, quantity, setCart) => {
  const item = await commerce.cart.add(productId, quantity)
  setCart(item.cart)
}

export const handleUpdateCartQty = async (lineItemId, quantity, setCart) => {
  const response = await commerce.cart.update(lineItemId, { quantity });

  setCart(response.cart);
};

export const handleRemoveFromCart = async (lineItemId, setCart) => {
  const response = await commerce.cart.remove(lineItemId);

  setCart(response.cart);
};

export const handleEmptyCart = async (setCart) => {
  const response = await commerce.cart.empty();

  setCart(response.cart);
};

const refreshCart = async (setCart) => {
  const newCart = await commerce.cart.refresh();

  setCart(newCart);
};

export const handleCaptureCheckout = async (checkoutTokenId, newOrder, setOrder, setCart, setErrorMessage) => {
  try {
    const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

    setOrder(incomingOrder);

    refreshCart(setCart);
  } catch (error) {
    setErrorMessage(error.data.error.message);
  }
};