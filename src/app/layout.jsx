import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  // metadataBase: new URL("https://wevstack.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  title: "Wevstack — Resources for web developers and designers",
  description:
    "Assorted resources for frontend developers and web designers. Explore curated and handpicked goodies that enhance your workflow and cultivate your growth.",
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="canonical" href="https://wevstack.com"/>
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml"/>
      </head>
      <body  className='antialiased bg-bg section-padding  text-accent box-border'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
