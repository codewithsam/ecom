import { useEffect, useState } from "react";

const useModuleLoader = (props: any) => {
  useEffect(() => {
    const loadComponent = async (scope: any, module: any) => {
      const container = window[scope];
      // @ts-expect-error
      const factory = await window[scope].get(module);
      const Module = factory();
      if (Module && Module.mount) {
        Module.mount(props.ref.current);
      }
      return Module;
    };
    if (!props.url) {
      return;
    }

    const element = document.createElement("script");

    element.src = props.url;
    element.type = "text/javascript";
    element.async = true;

    element.onload = () => {
      console.log(`Dynamic Script Loaded: ${props.url}`);
      loadComponent(props.scope, props.module);
    };

    element.onerror = () => {
      console.error(`Dynamic Script Error: ${props.url}`);
    };

    document.head.appendChild(element);

    return () => {
      console.log(`Dynamic Script Removed: ${props.url}`);
      document.head.removeChild(element);
    };
  }, [props.module, props.scope, props.url, props.ref]);
  return {
    module,
  };
};

export default useModuleLoader;
