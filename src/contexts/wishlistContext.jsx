import React, { createContext } from "react";

export const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  return <WishlistContext.Provider>{children}</WishlistContext.Provider>;
};

export default WishlistProvider;
