import type { Metadata } from "next";
import { IBM_Plex_Mono, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import KeyboardNav from "@/components/KeyboardNav";

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Aziz Kane — Builder, Fintech Founder, EFL Contributor",
  description:
    "Product builder and fintech founder contributing to Efficient Frontier Labs. Building agentic commerce infrastructure, grant tooling, and AI systems for emerging markets.",
  openGraph: {
    title: "Aziz Kane",
    description:
      "Builder. Fintech founder. Contributing to Efficient Frontier Labs / HLOS.",
    url: "https://aziz.build",
    siteName: "Aziz Kane",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  metadataBase: new URL("https://aziz.build"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ibmPlexMono.variable} ${dmSerifDisplay.variable}`}
    >
      <body className="min-h-screen">
        <Nav />
        <main className="pt-[52px] max-w-[780px] mx-auto px-7">
          {children}
        </main>
        <KeyboardNav />
      </body>
    </html>
  );
}
