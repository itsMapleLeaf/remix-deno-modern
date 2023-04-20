import type { V2_MetaFunction } from "@remix-run/react"

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App 🦕" }]
}

export default function Index() {
  return (
    <main className="p-16">
      <h1 className="text-5xl font-light mb-4">
        Welcome to Remix <span aria-hidden>🦕</span>
      </h1>
      <ul className="flex flex-col list-inside list-disc pl-4">
        <li>
          <a
            className="underline transition hover:text-green-400"
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            className="underline transition hover:text-green-400"
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a
            className="underline transition hover:text-green-400"
            target="_blank"
            href="https://remix.run/docs"
            rel="noreferrer"
          >
            Remix Docs
          </a>
        </li>
      </ul>
    </main>
  )
}
