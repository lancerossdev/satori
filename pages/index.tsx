import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>OG Images for Lance Ross</title>
        <meta name="title" content="OG Images for Lance Ross" />
        <meta name="description" content="Open Graph Images template for Lance Ross powered by Next.js and Vercel." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://images.lanceross.xyz" />
        <meta property="og:title" content="OG Images for Lance Ross" />
        <meta property="og:description" content="Open Graph Images template for Lance Ross powered by Next.js and Vercel." />
        <meta property="og:image" content="/api/lanceross?title=OG+Images+for+Lance Ross" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://images.lanceross.xyz" />
        <meta property="twitter:title" content="OG Images for Lance Ross" />
        <meta property="twitter:description" content="Open Graph Images template for Lance Ross powered by Next.js and Vercel." />
        <meta property="twitter:image" content="/api/lanceross?title=OG+Images+for+Lance Ross" />
        <script async defer data-website-id="068d35a9-f000-43ea-b44e-4e005765895c" src="https://umami.lanceross.xyz/umami.js"></script>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <p className={styles.description}>
          Get started by editing <code className={styles.code}>pages/api/example.tsx</code>
        </p>
        <div className={styles.grid}>
          <a href="/api/lanceross?title=Your+Title+Here" className={`${styles.card} umami--click--main-template`}>
            <h2>Main Template</h2>
            <p>This OG Image template is what I use for my personal website.</p>
          </a>
          <a href="/api/old?title=Your+Title+Here" className={`${styles.card} umami--click--old-template`}>
            <h2>Old Template</h2>
            <p>This is my old template with I still use Netlify Edge Functions</p>
          </a>
          <a href="/api/example?text=Hello+Pearl!" className={`${styles.card} umami--click--example-og`}>
            <h2>Example</h2>
            <p>Wanna try it? Click this to generate an image with "Hello Pearl!"</p>
          </a>
          <a href="https://vercel.com/" target="_blank" rel="noopener" className={`${styles.card} umami--click--vercel-click`}>
            <h2>Deploy</h2>
            <p>Instantly deploy this project template to a public URL with Vercel.</p>
          </a>
        </div>
      </main>
    </div>
  );
}
