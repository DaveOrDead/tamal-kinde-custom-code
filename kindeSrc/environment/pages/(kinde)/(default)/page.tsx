"use server";

import "../style.css";

import {
  getKindeRequiredCSS,
  getKindeRequiredJS,
  getKindeCSRF,
  getKindeWidget,
} from "@kinde/infrastructure";

import React from "react";
import { renderToString } from "react-dom/server.browser";

function Layout({ request }) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta robot="noindex, nofollow" />
        <meta name="csrf-token" content={getKindeCSRF()} />
        {getKindeRequiredCSS()}
        {getKindeRequiredJS()}
      </head>
      <body>
        <div id="root" data-roast-root="/admin">
          <main>
            <h1>Custom Login</h1>
            {getKindeWidget()}
          </main>
        </div>
      </body>
    </html>
  );
}

export default async function Page(event) {
  const page = await Layout({ ...event });
  return renderToString(page);
}
