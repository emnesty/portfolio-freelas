import { projetosData } from "../app/data/projetosData";

const generateSiteMap = () => {
  const baseUrl = "https://lucianosilva.cc";

  const projectUrls = projetosData
    .map(
      (project) => `
    <url>
      <loc>${baseUrl}/projetos/${project.slug}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
    </url>
  `
    )
    .join("");

  return `<?xml version="1.0" encoding="UTF-8" ?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${baseUrl}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
      <url>
        <loc>${baseUrl}/#about</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
      <url>
        <loc>${baseUrl}/#stack</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
      <url>
        <loc>${baseUrl}/projetos</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
      </url>
      ${projectUrls}
    </urlset>
  `;
};

const SiteMap = () => {
  return null;
};

export async function getServerSideProps({ res }) {
  const sitemap = generateSiteMap();

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
