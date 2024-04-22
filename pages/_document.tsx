import { Head, Html, Main, NextScript } from 'next/document';
import { HarmonySetup } from 'harmony-ai-editor';
export default function Document() {
  return (
    <Html lang="en" className="h-full" data-theme="boxyhq">
      <Head />
      <body className="h-full">
        <Main />
        <NextScript />
        {process.env.NODE_ENV !== 'production' ? <HarmonySetup repositoryId="f7e8579e-6e20-40c7-9202-4bb8031c3036" /> : null}
      </body>
    </Html>
  );
}
