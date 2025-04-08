"use client";

import { styled } from "styled-components";

const MenuParent = styled.div`
  width: 100px;
  height: 100vh;
  background-color: #e2e4e7;
  position: fixed;
  left: 0;
  top: 45px;
`;

const MenuWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  a {
    width: 100%;
    display: block;
    height: 100%;
    padding: 10px 15px;
    border-bottom: 2px solid #ccc;
  }
  a:hover {
    font-weight: bold;
    color: blue;
  }
`;

const Menu = ({ config, Link }: { config: any; Link: any }) => {
  return (
    <>
      <MenuParent>
        <MenuWrapper>
          {config.items.map(({ title, path }: { title: string; path: string }) => {
            return (
              <li key={path}>
                <Link href={path}>{title}</Link>
              </li>
            );
          })}
        </MenuWrapper>
      </MenuParent>
    </>
  );
};

export default Menu;
