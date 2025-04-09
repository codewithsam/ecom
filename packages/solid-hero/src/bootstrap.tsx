/* @refresh reload */
import { render } from "solid-js/web";

import App from "./App";

const mount = (el: any) => {
  render(() => <App />, el);
};

export { mount };
