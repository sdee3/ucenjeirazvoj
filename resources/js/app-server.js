/* global context, dispatch */

import App from "./app";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";

const html = ReactDOMServer.renderToString(
  <div id='app'>
    <StaticRouter location={context.url}>
      <App />
    </StaticRouter>
  </div>
);

dispatch(html);
