import "@repo/ui/globals.css";
import "./globals.css";
import dynamic from "next/dynamic";
import Link from "next/link";
import SideSheet from "./components/Sheet";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const modulesList = {
    header: dynamic(() => import("@repo/header/header"), {
      ssr: true,
    }),
    subheader: dynamic(() => import("@repo/subheader/Subheader")),
    menu: dynamic(() => import("@repo/leftsidebar/Menu"), {
      ssr: true,
    }),
  } as any;

  const response = await fetch("http://localhost:3001/v1/layout", {
    next: {
      revalidate: 10,
    },
  });
  const elements = await response.json();

  const components = Object.keys(elements).map((item) => {
    if (modulesList[item])
      return {
        component: modulesList[item],
        config: elements[item],
      };
    return null;
  });

  return (
    <html lang="en">
      <body className="ui-ml-[100px] ui-mt-[40px]">
        <SideSheet />
        {components.map((item, idx) => {
          if (!item) return <></>;
          const { component: Component, config } = item;
          return <Component key={idx} config={config} Link={Link} />;
        })}
        {children}
      </body>
    </html>
  );
}
