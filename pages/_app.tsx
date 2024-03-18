import "../app/globals.css"; // O caminho correto para o seu arquivo CSS do Tailwind
import type { AppProps } from "next/app";
import AOSInit from "../app/components/AOSInit";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />;
      <AOSInit />
    </>
  );
}

export default MyApp;
