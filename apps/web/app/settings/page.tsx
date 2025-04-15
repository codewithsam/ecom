"use client";

import React, { useRef } from "react";
import useModuleLoader from "../scripts/useModuleLoader";

export default function Home() {
  const hostRef = useRef(null);
  useModuleLoader({
    url: "http://localhost:8080/remoteEntry.js",
    scope: "solidhero",
    module: "./SolidHero",
    ref: hostRef,
  });

  return (
    <>
      <h1>This is a component created in solid js and loaded using module federation in our host app</h1>
      <div ref={hostRef} id="solid-host"></div>
    </>
  );
}
