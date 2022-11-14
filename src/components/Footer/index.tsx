export function Footer() {
  return (
    <footer className="w-full h-16 flex bg-dark_orange items-center justify-center">
      <div className="w-9/12 h-full flex flex-col gap-2 items-center justify-center relative text-white lg:w-full lg:flex-row">
        <p className="text-[10px] lg:text-base">
          DR. PEANUT © 2021 RUA JOÃO CHEDE, 3241 - CIC, CURITIBA/PR CEP:
          81170-220 / CNPJ: 28.324.667/0001-69
        </p>
        <span className="text-gray text-[10px] lg:right-12 lg:absolute lg:text-base">
          WIBIX
        </span>
      </div>
    </footer>
  );
}
