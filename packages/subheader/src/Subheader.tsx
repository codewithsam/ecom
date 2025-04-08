"use client";

import { Tabs, TabsList, TabsTrigger } from "@repo/ui/components/ui/tabs";
import { styled } from "styled-components";

const TabWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  a {
    width: 100%;
    height: 100%;
    display: block;
  }
  button {
    padding-top: 0;
    padding-bottom: 0;
  }
`;

const Subheader = ({ config, Link }: { config: any; Link: any }) => {
  return (
    <>
      <TabWrapper>
        <Tabs defaultValue="" className="w-[400px]">
          <TabsList>
            {config.buttons.map(({ title, path }: { title: string; path: string }) => {
              return (
                <TabsTrigger value={path} key={path}>
                  <Link href={path}>{title}</Link>
                </TabsTrigger>
              );
            })}
          </TabsList>
        </Tabs>
      </TabWrapper>
    </>
  );
};

export default Subheader;
