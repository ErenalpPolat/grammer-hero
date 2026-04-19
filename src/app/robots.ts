import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // App-only routes — auth-gated, indexer can't reach but be explicit
        disallow: [
          "/learn",
          "/lesson",
          "/practice",
          "/review",
          "/leaderboard",
          "/profile",
          "/onboarding",
          "/api",
          "/tokens",
        ],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
  };
}
