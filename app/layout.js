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
        <link rel="icon" href="favicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TKHCZ893') `,
          }}
        />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-16542161149"
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
             function gtag_report_conversion(url) { var callback = function () { if (typeof(url) != 'undefined') { window.location = url; } }; gtag('event', 'conversion', { 'send_to': 'AW-16542161149/W3aeCLuo8KkZEP2x9c89', 'value': 1.0, 'currency': 'AED', 'event_callback': callback }); return false; }
            `,
          }}
        />
      </Head>
      <script></script>
      <body className={inter.className}>{children}</body>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TKHCZ893"
          height="0"
          width="0"
          className="hidden"
          // style="display:none;visibility:hidden"
        ></iframe>
      </noscript>

      <Conact />
    </html>
  );
}
