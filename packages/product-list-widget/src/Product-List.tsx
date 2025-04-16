"use client";

import { useEffect, useState } from "react";
import ProductCard from "./Card";

const ProductList = ({ config, Link, query }: { config: any; Link: any; query: string }) => {
  const [products, setProducts] = useState({ items: [] });

  const getProducts = async () => {
    const prods = await fetch("http://localhost:3001/v1/products");
    const list: any = await prods.json();
    const items = list.products;
    setProducts((prev) => {
      return { ...prev, items: items };
    });
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      {products.items.map((product: any) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </>
  );
};

export default ProductList;
