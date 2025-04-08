"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@repo/ui/components/ui/sheet";
import { Button } from "@repo/ui/components/ui/button";
import { useSheetStore, useCartStore } from "@repo/store/store";
import { Badge } from "@repo/ui/components/ui/badge";
import Image from "next/image";

export default function SideSheet() {
  const open = useSheetStore((state) => state.open);
  const setOpen = useSheetStore((state) => state.setOpen);
  const cartItems = useCartStore((state) => state.items);

  return (
    <>
      {console.log("asdsa")}
      {console.log(cartItems)}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Cart</SheetTitle>
            <SheetDescription>
              Items in your cart. Please click process to payment button to complete the order
            </SheetDescription>
          </SheetHeader>
          <div style={{ marginBottom: "20px", marginTop: "20px" }}>
            {cartItems.map((item: any) => {
              return (
                <div
                  key={item.id}
                  className="cart-card"
                  style={{ display: "flex", flexDirection: "row", border: "1px solid #e6e7e8", position: "relative" }}
                >
                  <div className="img-placeholder" style={{ marginRight: "5px" }}>
                    <Image width={100} height={100} src={"https://placehold.co/100x100/png"} alt="image" />
                  </div>
                  <div className="cart-info">
                    <h3 style={{ color: "#112950", fontWeight: "bold" }}>{item.title}</h3>
                    <p style={{ color: "#9c9595" }}>{item.description.substring(0, 40)}</p>
                  </div>
                  <div style={{ position: "absolute", right: "10px", top: "10px" }} className="cart-quantity">
                    {item.quantity}
                  </div>
                </div>
              );
            })}
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Proceed to payment</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </>
  );
}
