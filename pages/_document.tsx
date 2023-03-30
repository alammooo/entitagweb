import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://rsms.me/inter/inter.css"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/aos@next/dist/aos.css"
        />
        <meta
          content="width=device-width, initial-scale=1.0"
          name="viewport"
        />
        <meta
          name="description"
          content="Entitag Technology, creating best web application for your business"
        />
        <meta charSet="UTF-8" />
        <meta
          name="keywords"
          content="website, jasa website, web application, landing page, company profile, mobile app"
        />
        <meta
          name="author"
          content="Abdullah Alam"
        />
        <title>Entitag Web, ultimate web creator</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
