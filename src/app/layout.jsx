import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://wevstack.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  title: "Wevstack — Web Development and Designing Resources",
  description:"Specially selected resources for web developers and designers for their projects",
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
        <link rel="canonical" href="https://wevstack.vercel.app"/>
        <link rel="icon" href="/favicon.png" type="image/svg+xml"/>
      </head>
      <body  className='antialiased bg-bg section-padding  text-accent box-border'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
