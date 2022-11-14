import { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { BsCart3, BsHeart, BsSearch } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const listTopicsProducts = [
  { name: "LINHA PRO" },
  { name: "LINHA TURMA DA MÔNICA" },
  { name: "COMBOS" },
  { name: "PRESENTES" },
  { name: "LOJISTA" },
];

export type subHeaderProps = {
  numberItensOfCard: number;
  cartOpen: (state: boolean) => void;
};

export function SubHeader({ cartOpen, numberItensOfCard }: subHeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <div className="w-full h-screen bg-gray fixed top-0 z-10 md:hidden overflow-scroll">
          <div className="w-full flex justify-end px-4 py-4 text-white text-xl ">
            <AiOutlineClose
              className="cursor-pointer"
              onClick={() => setOpen(false)}
            />
          </div>
          <div className="flex flex-col justify-center items-center mx-4">
            <div className=" w-full  flex flex-col justify-center items-center gap-3 border-b-2 border-white">
              <button className="bg-white w-full max-w-sm h-12">ENTRAR</button>
              <p className="text-white">Ainda não tem conta?</p>
              <span className="text-orange pb-4 cursor-pointer">
                CADASTRE-SE
              </span>
            </div>
            <div className="w-full py-3 flex flex-col justify-center items-center">
              <h1 className="text-white">CATEGORIAS</h1>
              <ul className="w-full py-4 flex flex-col justify-end">
                {listTopicsProducts.map((content, id) => (
                  <li
                    key={id}
                    className="text-white border-b border-white py-3 cursor-pointer"
                  >
                    {content.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      <div className="w-full h-auto flex flex-col items-center justify-center md:flex-row">
        <div className=" py-6 flex  items-center justify-center md:w-2/5">
          <img className="w-40" src="/logo.webp" />
        </div>
        <div className="w-full h-auto bg-orange flex items-center justify-center py-6 px-6 gap-6 md:w-3/5 md:bg-white">
          <GiHamburgerMenu
            className="text-2xl cursor-pointer md:hidden text-white"
            onClick={() => setOpen(true)}
          />
          <div className="w-full flex relative max-w-xs">
            <input
              className="rounded-full py-1 pl-6 border-2 w-full h-10 border-orange  max-w-xs"
              placeholder="Busca"
            />
            <BsSearch className="cursor-pointer absolute right-6 top-3" />
          </div>
          <BsHeart className="hidden md:flex text-brown cursor-pointer text-2xl" />
          <FiUser className="hidden md:flex text-brown cursor-pointer text-2xl" />
          <div className="flex" onClick={() => cartOpen(true)}>
            <BsCart3 className="text-2xl cursor-pointer text-white md:text-brown" />
            <div className="w-5 h-5 text-xs flex items-center justify-center rounded-xl bg-brown text-white relative right-2 bottom-2 cursor-pointer">
              {numberItensOfCard}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
