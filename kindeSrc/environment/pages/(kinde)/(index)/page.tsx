"use server";

import {
  getKindeRequiredCSS,
  getKindeRequiredJS,
  getKindeCSRF,
  getKindeWidget,
} from "@kinde/infrastructure";

import React from "react";
import { renderToString } from "react-dom/server.browser";

function Layout({ context, request }) {
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

export default async function Page(event) {
  const page = await Layout({ ...event });
  return renderToString(page);
}
