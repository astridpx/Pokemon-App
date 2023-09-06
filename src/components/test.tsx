"use client";

import typesStore from "@/libs/zustand/Types";
import React from "react";

const Test = ({ name }: { name: string }) => {
  const { selectedTypes } = typesStore();

  return (
    <h4
      className="my-2 text-xl font-semibold"
      onClick={() => console.log(selectedTypes)}
    >
      {name}
    </h4>
  );
};

export default Test;
