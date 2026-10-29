import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { baseOpenGraph, OG_IMAGE, SITE_URL } from "@/lib/metadata";
import "./globals.css";

// Same Google Fonts stylesheet the original site loads, so glyph rendering matches exactly.
const FONTS_URL =
  "https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&display=swap";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Therapy With Purpose | Mental Health Services Glendale AZ",
  description:
    "Therapy, counseling, psychiatry and medication management in Glendale, AZ. In-person and telehealth care for children, teens, adults, couples and families.",
  authors: [{ name: "Therapy With Purpose" }],
  icons: { icon: { url: "/favicon.png", type: "image/png" } },
  openGraph: baseOpenGraph,
  twitter: { card: "summary_large_image", images: [OG_IMAGE] },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={FONTS_URL} />
      </head>
      <body>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
