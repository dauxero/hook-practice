import React from "react";
import { useState } from "react";
const MyFirstComponent = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="flex flex-col items-center space-y-6">
      <button
        type="submit"
        onClick={() => setCounter(counter + 1)}
        className="bg-red-400 px-2 w-60 py-4 rounded-lg mt-10 uppercase font-serif font-bold"
      >
        boton de contador
      </button>
      <p className="text-white text-2xl">
        Contador de numeros{" "}
        <span className="text-black text-4xl">{counter}</span>
      </p>
    </div>
  );
};

export default MyFirstComponent;
