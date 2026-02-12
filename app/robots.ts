import dictionary from "@/dictionaries/en";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = dictionary.baseUrl;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
    ],
    host: baseUrl,
    sitemap: [`${baseUrl}/sitemap.xml`],
  };
}
