import { useState, useEffect } from "react";

export function Modal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setModalIsOpen(true);
    }, 3000);
  }, []);
  return (
    <div>
      {modalIsOpen && modalIsOpen && (
        <div className="w-screen h-screen bg-[rgba(0,0,0,0.7)] fixed flex items-center justify-center z-50 top-0">
          <div className="z-30 w-[400px] h-[400px] fixed bg-white p-4">
            <div className="w-full flex justify-end">
              <button onClick={() => setModalIsOpen(false)}>X</button>
            </div>
            <h1>Atenção!!!</h1>
            <p>
              Este site é um clone que fiz para treinar minhas habilidades como
              desenvolver web!!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
