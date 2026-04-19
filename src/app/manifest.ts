import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Grammar Hero",
    short_name: "Grammar Hero",
    description: "Dilbilgisi öğren, oyun gibi keyif al.",
    start_url: "/learn",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#059669",
    orientation: "portrait",
    lang: "tr",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "256x256",
        type: "image/x-icon",
      },
    ],
    categories: ["education", "games"],
  };
}
