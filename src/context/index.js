"use client";

import { createContext,useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [showNavModal, setNavShowModal] = useState(false);
  return (
    <GlobalContext.Provider value={{ showNavModal, setNavShowModal }}>
      {children}
    </GlobalContext.Provider>
  );
}
