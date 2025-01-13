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
          {`
          @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap');
          
          html {
            font-size: 100%;
            line-height: 1.3;
          }

          *,
          *::before,
          *::after {
            -webkit-box-sizing: border-box;
                    box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          a {
            color: #f47d31;
            text-decoration: none;
          }

          body {
            background: bisque;
            color: #333;
            font-family: Arial, sans-serif;
          }

          .header,
          .footer {
            background: #f47d31;
            color: #fff;
            text-align: center;
            padding: 1rem;
            font-family: Arial, sans-serif;
          }

          .main {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
                -ms-flex-pack: center;
                    justify-content: center;
            margin: 3rem 0;
          }

          .container {
            width: 500px;
            max-width: 100%;
            background: #fff;
            border-radius: 0.5rem;
            padding: 3rem;
            font-family: Arial, sans-serif;
          }

          @media (max-width: 375px) {
            .main {
              margin: 0;
            }
            .container {
              padding: 1rem;
            }
          }

          .form__header, .form__subhead {
            text-align: center;
            padding-bottom: 0.5rem;
          }

          .form__header {
            font-size: 1.5rem;
            font-weight: bold;
          }

          .kinde-form-field {
            position: relative;
            margin: 1rem 0;
          }

          .kinde-control-select-text {
            font-size: 1rem;
            padding: 15px;
            width: -webkit-fill-available;
            width: -moz-available;
            width: stretch;
            border: 1px solid #ddd;
            border-radius: 0.5rem;
          }

          .form__toggle_password {
            cursor: pointer;
            position: absolute;
            right: 15px;
            top: 18px;
            color: #333;
            border: 0;
            background: none;
          }

          .form__optin_title {
            font-weight: bold;
            font-size: 0.8rem;
          }

          .form__optin_text {
            font-size: 0.8rem;
          }

          .kinde-button, .kinde-button-variant-primary {
            cursor: pointer;
            width: 100%;
            background: #0c6ff9;
            color: #fff;
            font-weight: 300;
            border: 0;
            padding: 1rem;
            text-transform: uppercase;
            letter-spacing: 2px;
            border-radius: 25px;
          }

          .kinde-fallback-action {
            margin-top: 1rem;
          }

          .form__footer {
            font-size: 0.7rem;
            text-align: center;
          }
          }`}
        </style>
      </head>
      <body>
        <header className="header">
          <div className="logo">Chillspace</div>
        </header>
        <main className="main">
          <div className="container">{getKindeWidget()}</div>
        </main>
        <footer className="footer">
          <div>&copy; 2024 Chillspace Inc.</div>
        </footer>
      </body>
    </html>
  );
}

export default async function Page(event) {
  const page = await Layout({ ...event });
  return renderToString(page);
}
