import RemoveItemIcon from "../assets/images/icon-remove-item.svg";
import { useCartStore } from "../store/cart.store";
import { useProductStore } from "../store/products.store";
import type { CartItem as CartItemType } from "../types/cart.types";

type Props = {
  item: CartItemType;
};

export const CartItem = ({ item }: Props) => {
  const { removeFromCartCompletely } = useCartStore();
  const { productsById } = useProductStore();

  const product = productsById.get(item.productId);

  if (product)
    return (
      <>
        <article className="flex justify-between items-center">
          <div>
            <p className="font-medium">{product.name}</p>

            <div className="flex gap-3">
              <p className="text-Red font-medium">{item.quantity}x</p>
              <p>@ ${product.price.toFixed(2)}</p>
              <p>${(product.price * item.quantity).toFixed(2)}</p>
            </div>
          </div>

          <button
            onClick={() => removeFromCartCompletely(item.productId)}
            className="w-5 h-5 p-1 border border-Rose-300 rounded-full hover:brightness-90 transition duration-300 cursor-pointer"
          >
            <img src={RemoveItemIcon} alt="Remove item" />
          </button>
        </article>
        <div className="w-full h-px bg-Rose-100"></div>
      </>
    );
};
