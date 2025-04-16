import { lazy } from "react";

// @ts-ignore
const ProductList = lazy(() => import("./Product-List"));

export default function ProductListEntry({ config, Link, query }: { config: any; Link: any; query: string }) {
  return (
    <>
      <h1>Products based on {query}</h1>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ProductList config={config} Link={Link} query={query} />
      </div>
    </>
  );
}
