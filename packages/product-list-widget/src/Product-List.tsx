"use client";

import { Button } from "@repo/ui/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@repo/ui/components/ui/card";
import { useEffect, useState } from "react";
import { useCartStore } from "@repo/store/cart";

const ProductList = ({ config, Link, query }: { config: any; Link: any; query: string }) => {
  const [products, setProducts] = useState({ items: [] });
  const addToCart = useCartStore((state) => state.addToCart);

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
      {console.log(products)}
      <h1>Products based on {query}</h1>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {products.items.map((product: any) => {
          return (
            <Card key={product.id} style={{ width: "350px", marginLeft: "10px" }}>
              <CardHeader>
                <CardTitle>{product.title}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent>{product.category}</CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => addToCart(product)}>
                  Add To Cart
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default ProductList;
