import { TbTruckDelivery } from "react-icons/tb";

export function Header() {
  return (
    <div className="bg-orange w-full h-14 px-4 flex items-center justify-center">
      <TbTruckDelivery className="text-4xl text-white" />
      <p className="text-xs text-center px-2 text-white">
        Frete Grátis! - Sul/Sudeste em compras acima de R$149,99 - outras
        regiões acima de R$199,99!
      </p>
    </div>
  );
}
