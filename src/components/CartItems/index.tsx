import { BsTrash } from "react-icons/bs";

export type content = {
  quantity: number;
  id: number;
  image: string;
  price: number;
  description: string;
};

export type CartItemsProps = {
  cart: content[];
  cartOpen: (state: boolean) => void;
  aditionalQuantityCart: (item: content) => void;
  removeQuantityCart: (item: content) => void;
  removeItemCart: (item: content) => void;
};

export default function CartItems({
  cart,
  cartOpen,
  aditionalQuantityCart,
  removeQuantityCart,
  removeItemCart,
}: CartItemsProps) {
  return (
    <div className="w-screen h-screen fixed bg-blend-darken bg-[rgba(0,0,0,0.7)] top-0 z-50">
      <aside className="flex flex-col w-3/4 lg:w-[550px] items-center absolute right-0 h-screen bg-white overflow-y-auto">
        <div className=" w-full mt-5 p-2" onClick={() => cartOpen(false)}>
          <div className="bg-orange w-8 h-8 flex items-center justify-center rounded-lg relative left-[80%] text-white cursor-pointer hover:border hover:border-orange hover:bg-white hover:text-orange">
            X
          </div>
        </div>
        <h1>Carrinho de compras</h1>
        <div className=" flex flex-col mt-3 gap-2 overflow-y-auto h-3/5 px-2">
          {cart?.map((item) => (
            <div
              className="flex items-center h-28 border border-b-brown relative rounded-2xl"
              key={item.id}
            >
              <img src={item.image} className="w-20 h-auto" />
              <div className="flex flex-col p-2 h-full">
                <div className="h-[60%] flex items-center justify-center">
                  <p>{item.description}</p>
                </div>
                <div className="flex flex-col justify-center text-sm h-[40%]">
                  <span>{item.price}</span>
                  <span>QTD: {item.quantity}</span>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-8 h-full bg-orange gap-2 rounded-r-2xl">
                <button
                  onClick={() => aditionalQuantityCart(item)}
                  className="text-white hover:text-brown text-xl"
                >
                  +
                </button>
                <button
                  onClick={() => removeItemCart(item)}
                  className="text-white hover:text-brown text-xl flex items-center justify-center"
                >
                  <BsTrash />
                </button>
                <button
                  onClick={() => removeQuantityCart(item)}
                  className="text-white hover:text-brown text-xl"
                >
                  -
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-6 absolute bottom-16">
          <button className="bg-dark_orange w-64 h-11 rounded-lg text-white cursor-pointer hover:bg-white hover:text-dark_orange hover:border hover:border-dark_orange">
            FINALIZAR COMPRA
          </button>
          <button
            className="text-dark_orange w-64 h-11 rounded-lg border border-dark_orange cursor-pointer hover:bg-dark_orange hover:text-white"
            onClick={() => cartOpen(false)}
          >
            CONTINUAR COMPRANDO
          </button>
        </div>
      </aside>
    </div>
  );
}
