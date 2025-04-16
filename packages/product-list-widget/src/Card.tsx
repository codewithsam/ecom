"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@repo/ui/components/ui/card";
import { Button } from "@repo/ui/components/ui/button";
import { useCartStore } from "@repo/store/cart";

export default function ProductCard({ product }: { product: any }) {
  const addToCart = useCartStore((state) => state.addToCart);
  return (
    <>
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
    </>
  );
}
