"use client";

import { Button } from "@repo/ui/components/ui/button";
import { Badge } from "@repo/ui/components/ui/badge";
import { useCartStore, useSheetStore } from "@repo/store/store";

export default function CartButton() {
  const cartCount = useCartStore((state) => state.count);
  const setSheetOpen = useSheetStore((state) => state.setOpen);
  return (
    <Button
      variant={"outline"}
      onClick={() => {
        setSheetOpen(true);
      }}
    >
      Cart
      <Badge style={{ marginLeft: "5px", fontSize: "12px", backgroundColor: "#b2c4d3", color: "#000" }}>
        {cartCount}
      </Badge>
    </Button>
  );
}
