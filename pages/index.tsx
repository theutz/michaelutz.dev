import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>theutz.com | Michael Utz</title>
        <link
          rel="icon"
          type="image/svg+xml"
          href="/assets/images/favicon.svg"
        />
        <link rel="icon" type="image/png" href="/assets/images/favicon.png" />
      </Head>
      Hello
    </div>
  );
}
