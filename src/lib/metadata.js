// Absolute base for og:image and other metadata URLs. Set NEXT_PUBLIC_SITE_URL on deploy.
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://therapywithpurpose.lovable.app";

export const OG_IMAGE = "/og-image.png";

// Next.js replaces (not merges) a parent's openGraph when a page sets its own,
// so every page spreads these shared defaults in.
export const baseOpenGraph = {
  type: "website",
  images: [OG_IMAGE],
};
