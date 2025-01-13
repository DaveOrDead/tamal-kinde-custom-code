"use server";

import {
  getKindeRequiredCSS,
  getKindeRequiredJS,
  getKindeCSRF,
  getKindeWidget,
  getKindeNonce,
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

        <style nonce={getKindeNonce()}>
          {`body {
            font-family: "Roboto", sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f5f5f5;
          }

          .kinde-form-field {
            margin: 10px 0;
          }

          .kinde-button {
            background-color: #4caf50;
            color: white;
            padding: 14px 20px;
            margin: 8px 0;
            border: none;
            cursor: pointer;
            width: 100%;
          }`}
        </style>
      </head>
      <body>
        <div id="root" data-roast-root="/admin">
          <main>
            <h1>🐸🐸 Custom Login 🐸🐸</h1>
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
