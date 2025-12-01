import { useMemo } from "react";
import { useCartStore } from "../store/cart.store";
import { useProductStore } from "../store/products.store";

export const useCart = (productId?: number) => {
  const { cart, addToCart, removeFromCart } = useCartStore();
  const { productsById } = useProductStore();

  const cartTotalItems = useMemo(
    () => cart.reduce((total, item) => total + item.quantity, 0),
    [cart]
  );

  const cartTotalPrice = useMemo(
    () =>
      cart.reduce((total, item) => {
        const product = productsById.get(item.productId);
        return product ? total + product.price * item.quantity : total;
      }, 0),
    [cart, productsById]
  );

  const productInCart = useMemo(
    () =>
      productId != null
        ? cart.find((item) => item.productId === productId)
        : undefined,
    [cart, productId]
  );

  const isInCart = !!productInCart;

  const handleClick = () => {
    addToCart(productId!);
  };

  const handleIncrement = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    addToCart(productId!);
  };

  const handleDecrement = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    removeFromCart(productId!);
  };

  return {
    cart,
    cartTotalItems,
    cartTotalPrice,
    productInCart,
    isInCart,
    handleClick,
    handleIncrement,
    handleDecrement,
  };
};
