import React, { createContext, useEffect, useState } from "react";

export interface ProductType {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
}


interface ProductsCtxDefaultType {
  products: ProductType[];
  cart: ProductType[];
  removeItemFromCart: (title: string) => void;
  addItemToCart: (product: ProductType) => void;
}

// Global Context State
export const ProductsCtx = createContext<ProductsCtxDefaultType>({
  products: [],
  cart: [],
  removeItemFromCart: () => {},
  addItemToCart: () => {},
});

interface ProductProviderProps {
  children: React.ReactNode;
}

export const ProductProvider = ({ children }: ProductProviderProps) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [cart, setCart] = useState<ProductType[]>([]);

  async function fetchProducts() {
    try {
      const response = await fetch("https://api.itbook.store/1.0/new");
      const data = await response.json();
      // Assuming the API returns an object with a 'books' array field
      if (data && Array.isArray(data.books)) {
        setProducts(data.books);
      } else {
        // Handle the case where the response does not match the expected format
        console.error("Unexpected response format:", data);
      }
    } catch (e) {
      console.error("Failed to fetch products:", e);
    }
  }

  function addItemToCart(product: ProductType) {
    setCart((prev) => [...prev, product]);
  }

  // function removeItemFromCart(title: string) {
  //   setCart(cart.filter((p) => p.title !== title));
  // }

  function removeItemFromCart(title:string) {
    const index = cart.findIndex((p) => p.title === title);
    if (index > -1) {
      setCart(cart.filter((_, i) => i !== index));
    }
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsCtx.Provider
      value={{ products, cart, addItemToCart, removeItemFromCart }}
    >
      {children}
    </ProductsCtx.Provider>
  );
};
