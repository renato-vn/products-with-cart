import AddCartIcon from "../assets/images/icon-add-to-cart.svg";
import { useIsMobile } from "../hooks/useIsMobile";
import type { Product } from "../types";
import { useCart } from "../hooks/useCart";

type Props = {
  product: Product;
};

export const ProductItem = ({ product }: Props) => {
  const isMobile = useIsMobile();

  const {
    productInCart,
    isInCart,
    handleClick,
    handleIncrement,
    handleDecrement,
  } = useCart(product.id);

  const buttonStyle = `absolute left-1/2 -translate-x-1/2 -bottom-6 w-48 lg:w-32 flex items-center justify-center ${
    isInCart ? "bg-Red" : "bg-white"
  } py-3 md:py-2 md:text-sm rounded-full cursor-pointer hover:brightness-90 transition duration-300 border border-Red shadow-sm`;

  return (
    <article
      key={product.id}
      className="flex flex-col justify-center items-center mx-6"
    >
      <div className="relative">
        <img
          className="object-contain rounded-lg mt-8"
          src={isMobile ? product.image.mobile : product.image.desktop}
          alt={product.name}
        />

        <div
          onClick={!isInCart ? handleClick : undefined}
          className={buttonStyle}
        >
          {isInCart ? (
            <div className="w-full flex items-center justify-between px-4">
              <button
                className="w-5 h-5 flex items-center justify-center text-lg border border-white text-white rounded-full cursor-pointer"
                onClick={handleDecrement}
              >
                -
              </button>
              <span className="text-white font-medium">
                {productInCart!.quantity}
              </span>
              <button
                className="w-5 h-5 flex items-center justify-center text-lg border border-white text-white rounded-full cursor-pointer"
                onClick={handleIncrement}
              >
                +
              </button>
            </div>
          ) : (
            <>
              <img src={AddCartIcon} alt="Add to Cart" className="mr-2" />
              Add to Cart
            </>
          )}
        </div>
      </div>

      <div className="flex flex-col mt-12 self-start">
        <p className="text-Rose-400 font-light">{product.category}</p>
        <p className="text-lg font-medium">{product.name}</p>
        <p className="text-Red text-lg font-medium">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </article>
  );
};
