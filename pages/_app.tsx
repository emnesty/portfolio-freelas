import "../app/globals.css"; // O caminho correto para o seu arquivo CSS do Tailwind
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
