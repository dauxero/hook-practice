import React, { useState } from "react";

const SecondComponent = () => {
  const [name, setname] = useState("carlos");
  const [isNameChanged, setisNameChanged] = useState(false);

  const changeName = () => {
    if (isNameChanged) {
      setname("carlos gonzalez");
    } else {
      setname("laura rojas");
    }
    setisNameChanged(!isNameChanged);
  };
  return (
    <div className="flex flex-col mt-10 text-white text-2xl mx-auto space-y-6 items-center ">
      <h3>Cambio de nombre</h3>
      <p>{name}</p>
      <div>
        <button
          onClick={changeName}
          className="bg-red-500 py-2 px-2 rounded-lg"
        >
          Boton Cambiar de nombre
        </button>
      </div>
    </div>
  );
};

export default SecondComponent;
