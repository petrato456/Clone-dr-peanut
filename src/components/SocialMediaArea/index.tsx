import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";

export function SocialMediaArea() {
  const linesProducts = [
    { name: "Linha Pro" },
    { name: "Turma da Mônica" },
    { name: "Combos" },
    { name: "Presentes" },
  ];
  const terms = [
    { name: "Como comprar" },
    { name: "Envio" },
    { name: "Pagamento" },
    { name: "Política de Troca e Devolução" },
    { name: "Notícias" },
    { name: "Política de Privacidade" },
    { name: "Termos de uso" },
    { name: "Contato" },
  ];
  return (
    <div className="w-full h-full flex flex-col items-center justify-center py-7 gap-7 lg:flex-row max-w-[1200px] m-auto lg:items-start lg:gap-20">
      <div className="flex flex-col items-center gap-2 lg:w-[200px]  lg:items-start">
        <h2 className="text-sm text-orange font-bold lg:text-base">
          HORÁRIO DE ATENDIMENTO
        </h2>
        <p className="text-[13px] text-brown lg:text-base">
          Segunda a Sexta das 08:00 às 18:00 Telefone: (41) 3779-6100
        </p>
      </div>
      <div className="flex flex-col gap-8 lg:">
        <div className="flex flex-col gap-2 lg:items-start">
          <h2 className="flex flex-col items-center text-sm text-orange font-bold">
            HOME
          </h2>
          <ul className="flex flex-col items-center gap-2 text-gray_light lg:items-start">
            {linesProducts.map((item, index) => (
              <li
                key={index}
                className="cursor-pointer h-6 hover:text-dark_orange hover:border-b hover:border-orange"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm text-orange font-bold">REDES SOCIAIS</h2>
          <div className="flex items-center gap-2 text-xl mt-2">
            <FaFacebookF className="hover:text-orange cursor-pointer" />
            <FaYoutube className="hover:text-orange cursor-pointer" />
            <FaTwitter className="hover:text-orange cursor-pointer" />
            <ImInstagram className="hover:text-orange cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 lg:items-start">
        <h2 className="text-sm text-orange font-bold">CENTRAL DO USUÁRIO</h2>
        <ul className="flex flex-col items-center  gap-2 text-gray_light lg:items-start">
          {terms.map((content) => (
            <li
              key={content.name}
              className="cursor-pointer h-6 hover:text-dark_orange hover:border-b hover:border-orange"
            >
              {content.name}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-sm text-orange font-bold">FORMAS DE PAGAMENTO</h2>
      </div>
    </div>
  );
}
