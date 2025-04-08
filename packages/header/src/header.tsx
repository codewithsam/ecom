"use client";

import { ReactNode } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@repo/ui/components/ui/avatar";
import { Command, CommandInput } from "@repo/ui/components/ui/command";
import { Button } from "@repo/ui/components/ui/button";
import { Badge } from "@repo/ui/components/ui/badge";
import { useCartStore, useSheetStore } from "@repo/store/store";

import { styled } from "styled-components";

const HeaderWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: row;
`;
const PaddedWrapper = styled.div`
  margin: 0 10px;
`;
const SuperSaver = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeftHead = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  .search {
    flex-grow: 1;
  }
`;

const Header = () => {
  const cartCount = useCartStore((state) => state.count);
  const setSheetOpen = useSheetStore((state) => state.setOpen);

  return (
    <>
      <HeaderWrapper>
        <LeftHead>
          <PaddedWrapper className="brand">
            <Avatar>
              <AvatarImage src="https://avatar.iran.liara.run/username?username=ECOM&bold=false&length=2" alt="ECOM" />
              <AvatarFallback>EC</AvatarFallback>
            </Avatar>
          </PaddedWrapper>

          <PaddedWrapper className="search">
            <Command className="rounded-lg border shadow-md md:min-w-[450px]">
              <CommandInput placeholder="Type a product to search..." />
            </Command>
          </PaddedWrapper>
        </LeftHead>
        <PaddedWrapper>
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
        </PaddedWrapper>
      </HeaderWrapper>
    </>
  );
};

export default Header;
