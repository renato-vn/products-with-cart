import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { Product } from "../types";

interface ProductStore {
  products: Product[];
  productsById: Map<number, Product>;
  setProducts: (products: Product[]) => void;
}

export const useProductStore = create<ProductStore>()(
  devtools((set) => ({
    products: [],
    productsById: new Map(),

    setProducts: (products) =>
      set(() => ({
        products,
        productsById: new Map(products.map((p) => [p.id, p])),
      })),
  }))
);
