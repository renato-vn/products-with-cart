import { useCartStore } from "../store/cart.store";
import { CartItem } from "./CartItem";
import { InfoBox } from "./InfoBox";
import CarbonNeutral from "../assets/images/icon-carbon-neutral.svg";
import { useCart } from "../hooks/useCart";

type Props = {
  onConfirmOrder: () => void;
};

export const Cart = ({ onConfirmOrder }: Props) => {
  const { cart } = useCartStore();
  const { cartTotalPrice } = useCart();

  return (
    <div className="flex flex-col mt-5 gap-5">
      {cart.map((item) => (
        <CartItem key={item.productId} item={item} />
      ))}

      <div className="flex justify-between items-center mt-3">
        <p className="text-Rose-500">Order Total</p>
        <p className="text-2xl font-bold">${cartTotalPrice.toFixed(2)}</p>
      </div>

      <InfoBox ico={CarbonNeutral}>
        <p>
          This is a <strong>carbon-neutral</strong> delivery
        </p>
      </InfoBox>

      <button
        onClick={onConfirmOrder}
        className="bg-Red py-4 text-gray-100 rounded-full cursor-pointer hover:brightness-90 transition duration-300 font-semibold"
      >
        Confirm Order
      </button>
    </div>
  );
};
