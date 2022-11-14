import { FormEvent } from "react";

export function Registration() {
  const formSubmit = (event: FormEvent) => {
    event.preventDefault();
  };
  return (
    <div className="w-full h-auto px-4 flex flex-col items-center justify-center text-brown mt-10 gap-5 mb-28 md:mt-2">
      <h1 className="text-center md:text-3xl md:mb-3">
        Faça seu cadastro e receba agora{" "}
        <strong className="text-brown">10%OFF em sua 1ª compra</strong>
      </h1>
      <form
        onSubmit={formSubmit}
        className="flex flex-col items-center justify-center w-full gap-4 md:flex-row xl:gap-16"
      >
        <input
          type="text"
          placeholder="Coloque seu nome"
          className="bg-white_input w-full h-12 rounded-xl pl-4 md:w-72 focus:outline-orange"
        />
        <input
          type="email"
          placeholder="Coloque seu e-mail"
          className="bg-white_input  w-full h-12 rounded-xl pl-4 md:w-72 focus:outline-orange"
        />
        <button className="bg-orange w-full h-12 rounded-xl text-white md:w-72 hover:bg-white hover:text-orange hover:border-2 hover:border-orange">
          Cadastrar
        </button>
      </form>
    </div>
  );
}
