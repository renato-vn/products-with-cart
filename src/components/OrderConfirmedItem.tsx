import { useProductStore } from "../store/products.store";
import type { CartItem } from "../types/cart.types";
import WaffleThumbnail from "/assets/images/image-waffle-thumbnail.jpg";

type Props = {
  item: CartItem;
};

export const OrderConfirmedItem = ({ item }: Props) => {
  const { productsById } = useProductStore();

  const product = productsById.get(item.productId);
  const subtotal = item.quantity * product!.price;

  return (
    <>
      <article className="flex justify-between">
        <div className="flex gap-4">
          <img
            className="w-14 h-14 rounded-sm"
            src={WaffleThumbnail}
            alt="Waffle Thumbnail"
          />

          <div className="flex flex-col justify-between">
            <p className="font-semibold">{product!.name}</p>

            <div className="flex gap-3">
              <p className="text-Red font-semibold">{item.quantity}x</p>
              <p className="text-Rose-400">@ ${product!.price.toFixed(2)}</p>
            </div>
          </div>
        </div>

        <p className="font-semibold">${subtotal.toFixed(2)}</p>
      </article>

      <div className="w-full h-px bg-Rose-100"></div>
    </>
  );
};
