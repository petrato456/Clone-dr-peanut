import React from "react";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { BsCart3 } from "react-icons/bs";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export type content = {
  quantity: number;
  id: number;
  image: string;
  price: number;
  description: string;
};

export type BestSellersProps = {
  newCart: content[];
  removeQuantityCart: (item: content) => void;
  aditionalQuantityCart: (item: content) => void;
  handleAddToCart: (item: content) => void;
  cartOpen: (state: boolean) => void;
};

export function BestSellers({
  newCart,
  removeQuantityCart,
  aditionalQuantityCart,
  handleAddToCart,
  cartOpen,
}: BestSellersProps) {
  function SamplePrevArrow(props: { onClick: any; currentSlide: number }) {
    const { onClick, currentSlide } = props;
    return (
      <div
        style={
          currentSlide !== 0
            ? {
                cursor: "pointer",
                position: "absolute",
                left: "-5%",
                top: "50%",
                background: "orange",
                color: "white",
                padding: "8px",
                borderRadius: "10px",
                zIndex: "2",
              }
            : {
                display: "none",
              }
        }
        onClick={currentSlide !== 0 && onClick}
      >
        <MdOutlineArrowBackIos />
      </div>
    );
  }

  function SampleNextArrow(props: {
    onClick: any;
    currentSlide: number;
    slideCount: number;
  }) {
    const { onClick, currentSlide, slideCount } = props;

    return (
      <div
        style={
          slideCount - 1 !== currentSlide
            ? {
                cursor: "pointer",
                position: "absolute",
                right: "-5%",
                top: "50%",
                background: "orange",
                color: "white",
                padding: "8px",
                borderRadius: "10px",
                zIndex: "2",
              }
            : {
                display: "none",
              }
        }
        onClick={slideCount - 1 !== currentSlide && onClick}
      >
        <MdOutlineArrowForwardIos />
      </div>
    );
  }

  var settings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: (
      <SampleNextArrow currentSlide={0} slideCount={0} onClick={undefined} />
    ),
    prevArrow: <SamplePrevArrow onClick={undefined} currentSlide={0} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="w-full mb-28">
        <section className="">
          <div className="max-w-screen-lg m-auto text-2xl text-brown">
            <h1>Mais vendidos</h1>
          </div>
          <div className="w-[90%] max-w-screen-lg  mx-auto mt-12">
            <Slider {...settings}>
              {newCart.map((content) => (
                <article
                  style={{ display: "grid !important" }}
                  className="shadow-orange shadow-md bg-white rounded-lg  gap-2"
                  key={content.id}
                >
                  <div className="cursor-pointer border-b border-orange">
                    <img src={content.image} />
                  </div>
                  <div className="flex flex-col p-2">
                    <p>{content.description}</p>
                    <p>R$ {content.price}</p>
                  </div>
                  <div className="bg-orange h-10 flex justify-center items-end gap-2">
                    <div className="flex justify-center items-center gap-4 mb-1 bg-white border-white border-2">
                      <div
                        className="bg-orange w-6 h-6 flex items-center justify-center text-white cursor-pointer"
                        onClick={() => removeQuantityCart(content)}
                      >
                        <p>-</p>
                      </div>
                      <span>{content.quantity}</span>
                      <div
                        className="bg-orange w-6 h-6 flex items-center justify-center text-white cursor-pointer"
                        onClick={() => aditionalQuantityCart(content)}
                      >
                        <p className="pb-1">+</p>
                      </div>
                    </div>
                    <div className="border-white border-2 text-white mb-1 flex items-center justify-center w-9 h-7 cursor-pointer hover:bg-white hover:text-orange">
                      <BsCart3
                        title="Adicionar item ao carrinho"
                        onClick={() => {
                          handleAddToCart(content);
                          cartOpen(true);
                        }}
                      />
                    </div>
                  </div>
                </article>
              ))}
            </Slider>
          </div>
        </section>
      </div>
    </>
  );
}
