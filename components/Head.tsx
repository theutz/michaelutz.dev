import NextHead from "next/head";

export function Head() {
  return (
    <NextHead>
      <title>Michael Utz | Web Developer</title>
      <link
        data-cy="svg-favicon"
        rel="icon"
        type="image/svg+xml"
        href="/assets/images/favicon.svg"
      />
      <link
        rel="icon"
        type="image/png"
        href="/assets/images/favicon.png"
        data-cy="png-favicon"
      />
      <link
        rel="stylesheet"
        href="https://rsms.me/inter/inter.css"
        data-cy="font-stylesheet"
      />
    </NextHead>
  );
}

export default Head;
