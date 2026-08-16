import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://regondashiva.dev"),
  title: "Regonda Shiva | Full Stack & AI Developer | Data Analytics",
  description:
    "Professional portfolio of Regonda Shiva, a passionate Information Technology student, Full Stack Developer, AI Developer, and Data Analytics enthusiast. Specializing in Web Apps, NLP, Predictive Systems, and analytics dashboards.",
  keywords: [
    "Regonda Shiva",
    "Full Stack Developer",
    "AI Developer",
    "Data Analytics",
    "Portfolio Website",
    "MVSR Engineering College",
    "Next.js Portfolio",
    "Software Engineer",
  ],
  authors: [{ name: "Regonda Shiva" }],
  openGraph: {
    title: "Regonda Shiva | Full Stack & AI Developer | Data Analytics",
    description:
      "Information Technology student passionate about building scalable web applications, AI-powered solutions, and data-driven products.",
    url: "https://regondashiva.dev",
    siteName: "Regonda Shiva Portfolio",
    images: [
      {
        url: "/profile.png",
        width: 800,
        height: 800,
        alt: "Regonda Shiva",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Regonda Shiva | Full Stack & AI Developer",
    description:
      "Information Technology student passionate about building scalable web applications, AI-powered solutions, and data-driven products.",
    images: ["/profile.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
