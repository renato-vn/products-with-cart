import useFetchData from "./hooks/useFetchData";
import { EmptyCart, Modal, ProductItem } from "./components";
import { OrderConfirmed } from "./components/OrderConfirmed";
import { useCart } from "./hooks/useCart";
import { Cart } from "./components/Cart";
import { useModal } from "./hooks/useModal";

const App = () => {
  const { products } = useFetchData();

  const { cartTotalItems } = useCart();

  const { isOpen, open, close } = useModal();

  return (
    <main className="min-h-screen w-full max-w-6xl mx-auto overflow-x-hidden flex flex-col items-center my-12 px-4">
      <div className="text-4xl font-bold self-start ml-5">Desserts</div>

      <div className="grid w-full grid-cols-1 md:grid-cols-[3fr_2fr] gap-6 lg:gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="w-full md:w-72 lg:w-96 h-fit flex flex-col mt-6 md:mt-4 px-4 py-4 bg-white rounded-lg shadow-sm">
            <p className="self-start text-2xl font-semibold text-Red">
              Your Cart ({cartTotalItems})
            </p>

            {cartTotalItems === 0 ? (
              <EmptyCart />
            ) : (
              <Cart onConfirmOrder={open} />
            )}
          </div>
        </div>
      </div>

      {isOpen && (
        <Modal onClose={close}>
          <OrderConfirmed closeModal={close} />
        </Modal>
      )}
    </main>
  );
};

export default App;
