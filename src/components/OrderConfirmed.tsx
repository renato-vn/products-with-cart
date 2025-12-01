import OrderConfirmIcon from "../assets/images/icon-order-confirmed.svg";
import { useCartStore } from "../store/cart.store";
import { OrderConfirmedItem } from "./OrderConfirmedItem";
import { useCart } from "../hooks/useCart";

type Props = {
  closeModal: () => void;
};

export const OrderConfirmed = ({ closeModal }: Props) => {
  const { cart, resetCart } = useCartStore();

  const { cartTotalPrice } = useCart();

  const handleStartNewOrder = () => {
    closeModal();
    resetCart();
  };

  return (
    <div>
      <img src={OrderConfirmIcon} alt="Order Confirmed" />

      <h2 className="text-5xl font-bold text-wrap mt-6">Order Confirmed</h2>
      <p className="text-md text-neutral-500 mt-3 mb-8">
        We hope you enjoy your food!
      </p>

      <div className="mt-4 rounded-2xl bg-neutral-50 p-6 flex flex-col gap-5">
        {cart.map((item) => (
          <OrderConfirmedItem key={item.productId} item={item} />
        ))}

        <div className="flex justify-between items-center mt-3">
          <p className="text-neutral-500 font-medium">Order Total</p>
          <p className="text-2xl font-bold">${cartTotalPrice.toFixed(2)}</p>
        </div>
      </div>

      <button
        onClick={handleStartNewOrder}
        className="mt-6 w-full rounded-full bg-Red py-3 text-white font-semibold cursor-pointer hover:brightness-90 transition duration-300"
      >
        Start New Order
      </button>
    </div>
  );
};
