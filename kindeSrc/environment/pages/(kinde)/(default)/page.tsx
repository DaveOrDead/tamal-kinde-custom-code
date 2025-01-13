"use server";

import {
  getKindeRequiredCSS,
  getKindeRequiredJS,
  getKindeCSRF,
  getKindeWidget,
} from "@kinde/infrastructure";

import React from "react";
import { renderToString } from "react-dom/server.browser";

export default async function Page({ context, request }) {
  return (
    <html>
      <head>
        <title>Login | My business</title>
      </head>
      <body>
        <div>
          <h1>Custom Login</h1>
          {getKindeWidget()}
        </div>
      </body>
    </html>
  );
}
