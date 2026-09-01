# Witold Zawada - Portfolio

The source code for [witoldzawada.dev](https://witoldzawada.dev), my personal portfolio and technical blog.

## Features

- A project catalog backed by local, typed data and case studies. GitHub's GraphQL API optionally adds repository statistics, languages, and license details; the project pages still render when that API is unavailable.
- A file-based blog whose Markdown content is processed with `gray-matter`, `react-markdown`, GitHub Flavored Markdown, and syntax highlighting. It includes tags, reading-time estimates, a table of contents, sharing, Markdown downloads, print or PDF output, and an RSS feed.
- Eleven theme choices: the system preference plus light, dark, OLED, Emerald, Cyberpunk, Valentine, Halloween, Winter, Business, and Nord.

## Stack

- Next.js and React
- TypeScript
- Tailwind CSS and daisyUI
- Headless UI and Motion

## Local development

Use Node.js 22 or newer and the pnpm version declared in `package.json`.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

The site is available at `http://localhost:3000` by default.

Authenticated GitHub data is optional. To enable it, copy `.env.local.sample` to `.env.local` and set `GITHUB_TOKEN`. Never expose that token through a `NEXT_PUBLIC_` variable.

## Validation

```sh
pnpm run check
pnpm run test
pnpm run build
```

The build does not require a GitHub token.

## License

This project is available under the [MIT License](./LICENSE).
