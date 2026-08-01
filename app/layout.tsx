import type { Metadata } from "next";
import "./globals.css";

const deploymentHost =
  process.env.VERCEL_PROJECT_PRODUCTION_URL ??
  "ahmed-nisar-profile.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(`https://${deploymentHost}`),
  title: "Ahmed Nisar | Chartered Accountant & Audit Professional",
  description:
    "Ahmed Nisar is a Chartered Accountant specializing in investment funds, audit quality, international regulation and AI-enabled assurance.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Ahmed Nisar | Chartered Accountant & Audit Professional",
    description:
      "Investment funds, international regulation and AI-enabled assurance.",
    type: "website",
    images: [{ url: "/og-v2.png", width: 1200, height: 630, alt: "Ahmed Nisar - Chartered Accountant and Audit & Assurance Innovator" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Nisar | Chartered Accountant",
    description: "Investment funds, international regulation and AI-enabled assurance.",
    images: ["/og-v2.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
