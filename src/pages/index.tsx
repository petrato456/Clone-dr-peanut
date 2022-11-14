import Head from "next/head";
import { useState } from "react";
import type { NextPage } from "next";

import { BannerFooter } from "../components/BannerFooter";
import { BestSellers } from "../components/BestSellers";
import { Header } from "../components/Header";
import { Registration } from "../components/Registration";
import { ReleasesHome } from "../components/ReleasesHome";
import { SubHeader } from "../components/SubHeader";
import { Footer } from "../components/Footer";
import { SocialMediaArea } from "../components/SocialMediaArea";
import { Modal } from "../components/Modal";
import CartItems from "../components/CartItems";

const data = [
  {
    image: "/pasta1.webp",
    description: "pasta de amendoin",
    price: 64.9,
    quantity: 1,
    id: 1,
  },
  {
    image: "/pasta2.webp",
    description: "pasta de amendoin",
    price: 64.9,
    quantity: 1,
    id: 2,
  },
  {
    image: "/pasta3.webp",
    description: "pasta de amendoin",
    price: 64.9,
    quantity: 1,
    id: 3,
  },
  {
    image: "/pasta4.webp",
    description: "pasta de amendoin",
    price: 64.9,
    quantity: 1,
    id: 4,
  },
  {
    image: "/pasta5.webp",
    description: "pasta de amendoin",
    price: 64.9,
    quantity: 1,
    id: 5,
  },
  {
    image: "/pasta4.webp",
    description: "pasta de amendoin",
    price: 64.9,
    quantity: 1,
    id: 6,
  },
  {
    image: "/pasta3.webp",
    description: "pasta de amendoin",
    price: 64.9,
    quantity: 1,
    id: 7,
  },
  {
    image: "/pasta2.webp",
    description: "pasta de amendoin",
    price: 64.9,
    quantity: 1,
    id: 8,
  },
  {
    image: "/pasta1.webp",
    description: "pasta de amendoin",
    price: 64.9,
    quantity: 1,
    id: 9,
  },
];

export type CartItemType = {
  quantity: number;
  id: number;
  image: string;
  price: number;
  description: string;
};

const Home: NextPage = () => {
  const [newCart, setNewCart] = useState(data);
  const [cart, setCart] = useState([] as CartItemType[]);
  const [cartOpen, setCartOpen] = useState<boolean>(false);

  const removeItemCart = (clickedItem: CartItemType) => {
    setCart((prev) => {
      return prev.filter((i) => i.id !== clickedItem.id);
    });
  };

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCart((prev) => {
      const itemInCart = cart.find((i) => i.id === clickedItem.id);
      if (itemInCart) {
        return [...prev];
      }
      return [...prev, clickedItem];
    });
  };

  const addQuantityInToCart = (clickedItem: CartItemType) => {
    setCart((prev) => {
      return prev.map((item) =>
        item.id === clickedItem.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    });
  };

  const handleRemoveCart = (clickedItem: CartItemType) => {
    const itemRemoved = cart.filter((q) => q.quantity !== 0);
    setCart((prev) => {
      if (clickedItem.quantity === 0) {
        return itemRemoved;
      }

      return prev.map((item) =>
        item.id === clickedItem.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    });
  };

  const aditionalQuantityCart = (clickedItem: CartItemType) => {
    const findItemInCart = cart.filter((i) => i.id === clickedItem.id);
    if (findItemInCart) {
      addQuantityInToCart(clickedItem);
    }
    setNewCart((prev) => {
      return prev.map((item) =>
        item.id === clickedItem.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    });
  };
  const removeQuantityCart = (clickedItem: CartItemType) => {
    const findItemInCart = cart.filter((i) => i.id === clickedItem.id);
    if (findItemInCart.length > 0 && findItemInCart[0].quantity > 1) {
      handleRemoveCart(clickedItem);
    }
    setNewCart((prev) => {
      return prev.map((item) =>
        item.id === clickedItem.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    });
  };
  return (
    <>
      <Head>
        <title>Clone Dr Peanut</title>
        <meta
          name="description"
          content="Clone do site dr peanut para treinar as habilidades como front-end"
        />
      </Head>
      <Header />
      <SubHeader
        cartOpen={(state) => setCartOpen(state)}
        numberItensOfCard={cart.length}
      />
      <ReleasesHome />
      <Registration />
      <BestSellers
        newCart={newCart}
        aditionalQuantityCart={(item) => aditionalQuantityCart(item)}
        removeQuantityCart={(item) => removeQuantityCart(item)}
        handleAddToCart={(item) => handleAddToCart(item)}
        cartOpen={(state) => setCartOpen(state)}
      />
      <BannerFooter />
      <SocialMediaArea />
      <Footer />
      <Modal />
      {cart.length > 0 && cartOpen && (
        <CartItems
          cart={cart}
          cartOpen={(state) => setCartOpen(state)}
          aditionalQuantityCart={(item) => aditionalQuantityCart(item)}
          removeQuantityCart={(item) => removeQuantityCart(item)}
          removeItemCart={(item) => removeItemCart(item)}
        />
      )}
    </>
  );
};

export default Home;
