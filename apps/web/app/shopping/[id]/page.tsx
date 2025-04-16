import Link from "next/link";

import ProductListEntry from "@repo/product-list-widget/ProductListEntry";

export default async function Shopping({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <>
      <div style={{ padding: "10px" }}>
        <ProductListEntry config={{}} Link={Link} query={id} />
      </div>
    </>
  );
}
