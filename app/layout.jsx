import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({ 
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ["latin"] });

export const metadata = {
  title: "Hotely",
  description: "Welcome to Hotely",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <head>
        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
