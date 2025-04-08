import styles from "./page.module.css";
import Link from "next/link";

import ProductList from "@repo/product-list-widget/Product-List";

export default function Shopping({ params }: { params: { id: string } }) {
  return (
    <>
      <div style={{ padding: "10px" }}>
        <ProductList config={{}} Link={Link} query={params.id} />
      </div>
    </>
  );
}
