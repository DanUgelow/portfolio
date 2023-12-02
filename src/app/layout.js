import { Poppins } from "next/font/google";
import "./globals.css";

const inter = Poppins({ subsets: ["latin"], weight: "300", style: "normal" });

export const metadata = {
  title: "Dan Ugelow's Portfolio",
  description: "A personal portfolio website",
};

export default function Layout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
