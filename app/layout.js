import { Inter } from "next/font/google";
import "./globals.css";
import Conact from "./components/Conact";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Damac new project",
  description: "Damac new project, DAMAC new community",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Conact />
    </html>
  );
}
