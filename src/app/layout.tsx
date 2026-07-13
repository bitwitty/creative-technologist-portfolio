import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "House of Atelios — AI Creative Production Studio",
    template: "%s | House of Atelios",
  },
  description:
    "House of Atelios. AI creative production studio founded by Katherine Moffat. Campaign imagery, creative direction, and automated pipelines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
    >
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <div className="app">
          <Nav />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
