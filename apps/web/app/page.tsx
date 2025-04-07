import styles from "./page.module.css";
import { Header } from "@repo/header/header";
import { Menu } from "@repo/leftsidebar/Menu";

export default function Home() {
  return (
    <>
      <Header config={{ c: "a" }} />
      <Menu />
    </>
  );
}
