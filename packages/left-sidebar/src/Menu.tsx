"use client";

import { styled } from "styled-components";

const MenuParent = styled.div`
  width: 100px;
  height: 100vh;
  background-color: #e2e4e7;
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

export const Menu = () => {
  return (
    <>
      <MenuParent>
        <MenuWrapper>
          <li>
            <a href="#">Item 1</a>
          </li>
          <li>
            <a href="#">Item 1</a>
          </li>
          <li>
            <a href="#">Item 1</a>
          </li>
          <li>
            <a href="#">Item 1</a>
          </li>
          <li>
            <a href="#">Item 1</a>
          </li>
          <li>
            <a href="#">Item 1</a>
          </li>
        </MenuWrapper>
      </MenuParent>
    </>
  );
};
