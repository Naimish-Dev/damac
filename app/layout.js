import { Inter } from "next/font/google";
import "./globals.css";
import Conact from "./components/Conact";
import Head from "next/head";

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
        src="https://www.googletagmanager.com/gtag/js?id=AW-16542161149"
      ></script>


      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
           window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-16542161149');
        `,
          }}
        />
      </Head>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              gtag('event', 'conversion', {
                  'send_to': 'AW-16542161149/zAIMCIvD2akZEP2x9c89',
                  'value': 1.0,
                  'currency': 'AED'
              });
            `,
          }}
        />
      </Head>
      <body className={inter.className}>{children}</body>
      <Conact />
    </html>
  );
}
