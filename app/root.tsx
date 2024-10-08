import Nav from '../app/components/nav'
import Footer from '../app/components/footer'
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import type { LinksFunction } from "@remix-run/node";
import '@fontsource-variable/playfair-display';
import '@fontsource-variable/open-sans';
import styles from "./tailwind.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];


export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Next.js,React,JavaScript,TypeScript,Tailwind CSS,Portfolio"></meta>
        <link rel="canonical" href="https://mrluisamador.com/"></link>
        <Meta />
        <Links />
      </head>
      <body>
        <div className="w-[calc(100%-70px) mr-[70px] lg:w-[calc(100%-350px)] lg:mr-[350px]">
          <Nav />
          <main>{children}</main>
          <Footer />
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
