import { LinksFunction } from "@remix-run/deno"
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react"
// @deno-types="./url.d.ts"
import tailwind from "./tailwind.css"

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwind },
]

export default function App() {
  return (
    <html lang="en" className="bg-gray-900 text-gray-100">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
