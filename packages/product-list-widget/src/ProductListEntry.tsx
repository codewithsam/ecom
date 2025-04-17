import { lazy, Suspense } from "react";

// @ts-ignore
const ProductList = lazy(() => import("./Product-List"));

export default function ProductListEntry({ config, Link, query }: { config: any; Link: any; query: string }) {
  return (
    <>
      <h1>Products based on {query}</h1>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <Suspense fallback={<h1>Loading...</h1>}>
          <ProductList config={config} Link={Link} query={query} />
        </Suspense>
      </div>
    </>
  );
}
