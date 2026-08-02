import { createContext, useState } from "react";

export const Cartcontext = createContext();

export function Cart({ children }) {
  const [cart, setcart] = useState(0);

  const addtocart = () => {
    setcart(prev => prev + 1);
  };

  return (
    <Cartcontext.Provider value={{ cart, addtocart }}>
      {children}
    </Cartcontext.Provider>
  );
}