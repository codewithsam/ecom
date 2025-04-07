"use client";

import { ReactNode } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@repo/ui/components/ui/avatar";
import { Switch } from "@repo/ui/components/ui/switch";
import { Label } from "@repo/ui/components/ui/label";
import { Command, CommandInput } from "@repo/ui/components/ui/command";
import { Button } from "@repo/ui/components/ui/button";

import { styled } from "styled-components";

const HeaderWrapper = styled.div`
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

export const Header = ({ config }: { config: any }) => {
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
              <CommandInput placeholder="Type a command or search..." />
            </Command>
          </PaddedWrapper>
        </LeftHead>
        <PaddedWrapper>
          <Button>Login</Button>
          <Button variant={"secondary"}>Signup</Button>
        </PaddedWrapper>
      </HeaderWrapper>
    </>
  );
};
