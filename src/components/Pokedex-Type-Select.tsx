"use client";

import { useState } from "react";
import typesStore from "@/libs/zustand/Types";

const PokedexTypeSelect = ({ type }: { type: string }) => {
  const [select, setSelect] = useState<boolean>(false);
  const { addtypes, removeType } = typesStore();

  const TypesController = (selectedType: string) => {
    setSelect(!select);

    if (select) {
      return removeType(selectedType);
    }

    addtypes(selectedType);
  };

  return (
    <>
      <p
        className={`px-3 h-max ${
          select
            ? "bg-green-200 text-gray-600 border-green-500"
            : "bg-white/60 border-black"
        } rounded-full cursor-pointer border `}
        onClick={() => TypesController(type)}
      >
        {type}
      </p>
    </>
  );
};

export default PokedexTypeSelect;
