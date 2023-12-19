import { Poppins, Open_Sans } from "next/font/google";
import "./globals.scss";

const inter = Open_Sans({ subsets: ["latin"], style: "normal" });

export const metadata = {
  title: "Dan Ugelow - Web Developer & Designer",
  description: "A personal portfolio website",
};

export default function Layout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
