import EmptyCartIcon from "../assets/images/illustration-empty-cart.svg";

export const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-6">
      <img src={EmptyCartIcon} alt="Empty Cart" />
      <p className="font-medium text-Rose-500">
        Your added items will appear here
      </p>
    </div>
  );
};
