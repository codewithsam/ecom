"use client";

import React, { Suspense, useEffect, useRef, useState } from "react";
import useModuleLoader from "../scripts/useModuleLoader";

export default function Home() {
  const hostRef = useRef(null);
  useModuleLoader({
    url: "http://localhost:8082/remoteEntry.js",
    scope: "helloVue",
    module: "./HelloVueApp",
    ref: hostRef,
  });

  return (
    <>
      <h1>This is a component created in vue and loaded using module federation in our host app</h1>
      <div ref={hostRef} className="Host-Container"></div>
    </>
  );
}
