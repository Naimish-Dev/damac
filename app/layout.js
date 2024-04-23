import { Inter } from "next/font/google";
import "./globals.css";
import Conact from "./components/Conact";
import Head from "next/head";
import GoogleTagManager from "./components/GoogleTagManager";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Damac new project",
  description: "Damac new project, DAMAC new community",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
       <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-16540884080"
      ></script>
      <GoogleTagManager /> 
      <body className={inter.className}>{children}</body>
      <Conact />
    </html>
  );
}
