import type { Metadata } from "next";
import { Archivo, Archivo_Black } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "Katherine Moffat. Creative Technologist.",
    template: "%s | Katherine Moffat",
  },
  description:
    "Katherine Moffat. Creative technologist building AI pipelines, production workflows, and tools for creative teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${archivoBlack.variable}`}
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
