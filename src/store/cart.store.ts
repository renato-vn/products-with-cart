import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { CartItem } from "../types/cart.types";
import { CART_KEY } from "../constants/config";

const getInitialCart = (): CartItem[] => {
  if (typeof window === "undefined") return [];
  const stored = localStorage.getItem(CART_KEY);
  if (!stored) return [];
  try {
    return JSON.parse(stored) as CartItem[];
  } catch {
    return [];
  }
};

interface CartStore {
  cart: CartItem[];

  setCart: (cartItem: CartItem) => void;
  addToCart: (cartItemId: number) => void;
  removeFromCart: (cartItemId: number) => void;
  removeFromCartCompletely: (cartItemId: number) => void;

  resetCart: () => void;
}

export const useCartStore = create<CartStore>()(
  devtools((set, get) => {
    const saveCart = (cart: CartItem[]) => {
      if (typeof window !== "undefined") {
        localStorage.setItem(CART_KEY, JSON.stringify(cart));
      }
    };

    return {
      cart: getInitialCart(),

      setCart: (cartItem: CartItem) => {
        const newCart = [...get().cart, cartItem];
        saveCart(newCart);
        set({ cart: newCart });
      },

      addToCart: (cartItemId: number) => {
        const current = get().cart;
        const newCart = current.find((item) => item.productId === cartItemId)
          ? current.map((item) =>
              item.productId === cartItemId
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          : [...current, { productId: cartItemId, quantity: 1 }];

        saveCart(newCart);
        set({ cart: newCart });
      },

      removeFromCart: (cartItemId: number) => {
        const current = get().cart;
        const newCart = current.find(
          (item) => item.productId === cartItemId && item.quantity > 1
        )
          ? current.map((item) =>
              item.productId === cartItemId
                ? { ...item, quantity: item.quantity - 1 }
                : item
            )
          : current.filter((item) => item.productId !== cartItemId);

        saveCart(newCart);
        set({ cart: newCart });
      },

      removeFromCartCompletely: (cartItemId: number) => {
        const newCart = get().cart.filter(
          (item) => item.productId !== cartItemId
        );
        saveCart(newCart);
        set({ cart: newCart });
      },

      resetCart: () => {
        const newCart: CartItem[] = [];
        saveCart(newCart);
        set({ cart: newCart });
      },
    };
  })
);
