"use client";
import styles from "./page.module.css";

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

export default function Home() {
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
          <div>asdmkslakdm</div>
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
