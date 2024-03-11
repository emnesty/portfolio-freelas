import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import AOSInit from "./components/AOSInit";
import { useTranslation } from "next-i18next";

const sora = Sora({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Luciano Silva - Product Designer & Frontend Developer",
  description: "Luciano's Silva personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { t } = useTranslation();
  return (
    <html
      lang="pt-BR"
      className="scroll-smooth"
      style={{ scrollBehavior: "smooth" }}
    >
      <AOSInit />
      <body className={sora.className}>{children}</body>
    </html>
  );
}
