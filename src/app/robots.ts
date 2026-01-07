import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.coachvettor.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/checkout/", "/success/", "/cancel/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
