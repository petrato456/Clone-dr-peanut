import { useEffect } from "react";
import { ImTruck } from "react-icons/im";

const listTopicsProducts = [
  { name: "LINHA PRO" },
  { name: "LINHA TURMA DA MÔNICA" },
  { name: "COMBOS" },
  { name: "PRESENTES" },
  { name: "LOJISTA" },
];

export function ReleasesHome() {
  return (
    <>
      <div className="hidden md:flex w-full px-4 bg-dark_orange items-center justify-center sticky top-0 z-20">
        <ul className=" md:grid grid-cols-5 max-w-5xl items-center justify-center w-full gap-12 h-16 text-white">
          {listTopicsProducts.map((content, id) => (
            <li
              key={id}
              className="hover:bg-brown cursor-pointer text-center h-full flex justify-center items-center"
            >
              {content.name}
            </li>
          ))}
        </ul>
      </div>
      <img src="/slide-dr-peanut.webp" />
      <div className="flex items-center mx-8">
        <div className="flex items-center bg-white_dark gap-4 px-3 rounded-2xl m-auto mt-2 md:relative bottom-14 max-w-xs">
          <ImTruck className="text-8xl text-brown" />
          <div>
            <h1 className="text-brown font-black">FRETE GRÁTIS</h1>
            <p className="text-xs text-brown">
              Sul/Sudeste em compras acima de R$ 149,99 e outras regiões acima
              de R$ 199,99
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
