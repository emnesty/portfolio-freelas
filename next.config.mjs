import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { appDir: true },
  i18n: {
    locales: ["pt", "en"], // Ajuste isso para incluir todos os idiomas que você suporta
    defaultLocale: "pt",
  },
};

export default withNextIntl(nextConfig);
