"use client";

import { useState } from "react";
import Link from "next/link";
import { articles } from "@/data/articles";
import styles from "./page.module.css";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  const handleCtaClick = () => {
    if (isLoading) return;
    setIsLoading(true);
    setTimeout(() => {
      window.location.href = "https://cryptosvet.cz";
    }, 5000);
  };
  return (
    <div className={styles.pageWrapper}>
      {/* 1. Header with Výhled CZ Logo & Action Icons */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <a href="#" className={styles.logoLink} aria-label="Výhled CZ Domů">
            <img
              src="/images/vyhled-logo.png"
              alt="Výhled CZ"
              className={styles.logoImg}
            />
          </a>

          {/* Right Action Icons: Search & Services */}
          <div className={styles.headerActions}>
            <button className={styles.iconBtn} aria-label="Hledat">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="7.5"></circle>
                <line x1="21" y1="21" x2="16.5" y2="16.5"></line>
              </svg>
            </button>
            <button className={styles.iconBtn} aria-label="Služby">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="4.5" cy="4.5" r="2.2"></circle>
                <circle cx="12" cy="4.5" r="2.2"></circle>
                <circle cx="19.5" cy="4.5" r="2.2"></circle>
                <circle cx="4.5" cy="12" r="2.2"></circle>
                <circle cx="12" cy="12" r="2.2"></circle>
                <circle cx="19.5" cy="12" r="2.2"></circle>
                <circle cx="4.5" cy="19.5" r="2.2"></circle>
                <circle cx="12" cy="19.5" r="2.2"></circle>
                <circle cx="19.5" cy="19.5" r="2.2"></circle>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* 2. Sub-navigation Bar */}
      <nav className={styles.subNav}>
        <div className={styles.subNavInner}>
          <div className={styles.navLeft}>
            <button className={styles.navItem}>
              <span className={styles.hamburger}>
                <span></span>
                <span></span>
                <span></span>
              </span>
              <span>Rubriky</span>
            </button>

            <span className={styles.navSeparator}></span>

            <a href="#sport" className={styles.navItem}>
              <span>Sport</span>
            </a>

            <span className={styles.navSeparator}></span>
          </div>

          <div className={styles.navRight}>
            <button className={`${styles.navItem} ${styles.liveLink}`}>
              <span className={styles.liveDot}></span>
              <span className={styles.liveText}>SLEDOVAT</span>
            </button>
          </div>
        </div>
      </nav>

      {/* 2. Article Main */}
      <main className={styles.mainContainer}>
        <article className={styles.article}>
          {/* Headline */}
          <h1 className={styles.articleTitle}>
            MIMOŘÁDNĚ: Ministerstvo financí chystá 3% „digitální bezpečnostní daň“ z kryptoaktiv nad 100 000 Kč
          </h1>

          {/* Author and Date Meta */}
          <div className={styles.articleMeta}>
            <div className={styles.metaAuthors}>Milan Gerčák, ČTK, hop</div>
            <div className={styles.metaDatetime}>9.10.2026 | Zdroj: Vyhled CZ, ČTK</div>
          </div>

          {/* Main Image */}
          <div className={styles.articleImageWrap}>
            <img
              src="/images/crypto-tax.jpg"
              alt="Kryptoměny v ČR"
              className={styles.articleImage}
            />
          </div>

          {/* Article Body */}
          <div className={styles.articleBody}>
            <p className={styles.articleLead}>
              Ministerstvo financí ČR dnes vydalo mimořádné oznámení. V souvislosti s vývojem evropské regulace trhu s kryptoměnami, včetně rámce MiCA a pravidel proti praní peněz, plánuje zavést 3 % „digitální bezpečnostní daň“ z kryptoaktiv fyzických osob v hodnotě přesahující 100 000 Kč. Daň by měly přímo srážet kryptoměnové burzy působící v ČR, takže uživatelé by ji nemuseli sami přiznávat.
            </p>

            <h2 className={styles.sectionHeading}>
              Reakce na oznámení: burzy omezují výběry, banky zavádějí omezení
            </h2>

            <p className={styles.articleP}>
              Po zveřejnění oznámení největší česká kryptoměnová burza Coinmate okamžitě přijala dočasné opatření a uvedla, že pozastavuje všechny výběry ve fiat měnách. Podle burzy je důvodem čekání na „konečné potvrzení způsobu srážky daně ze strany finančního úřadu“.
            </p>

            <p className={styles.articleP}>
              Mezinárodní burza Binance rovněž dočasně vyřadila některé obchodní páry z nabídky. Na stránce zákaznické podpory se zároveň objevila informace, že „ve frontě je více než 200 lidí“.
            </p>

            <div className={styles.quoteBox}>
              <p className={styles.quoteIntro}>
                Jeden z držitelů kryptoměn z Prahy uvedl:
              </p>
              <p className={styles.quoteText}>
                „Na účtu mám 0,15 BTC, což odpovídá přibližně 270 000 Kč. Společnost Coinmate mi přímo zablokovala možnost výběru a sdělila mi, že je třeba počkat na dokončení srážky daně. Obrátil jsem se proto na zákaznickou podporu, kde mi řekli, že ani oni neobdrželi žádný oficiální dokument a že pozastavení výběrů je pouze preventivní opatření.“
              </p>
            </div>

            <h2 className={styles.sectionHeading}>
              Bankovní oznámení se přímo nezmiňují o „dani“, ale formulace je pozoruhodná
            </h2>

            <p className={styles.articleP}>
              ČSOB a Česká spořitelna zaslaly svým klientům oznámení v mobilní aplikaci. V oznámeních se slovo „daň“ přímo neobjevuje; zdůrazňují pouze „soulad s legislativou“ a „bezpečnost transakcí“. Zároveň však uvádějí, že u účtů, u nichž nebylo dokončeno napojení na daňový systém, mohou být omezeny některé funkce související s fiatovými transakcemi.
            </p>

            <p className={styles.articleP}>
              Zákaznické linky Komerční banky a Air Bank rovněž čelily náporu telefonátů. Řada klientů se dotazovala, zda tato situace ovlivní jejich převody.
            </p>

            <div className={styles.clarificationBox}>
              <div className={styles.clarificationHeader}>
                —— Dodatečné vysvětlení ——
              </div>
              <p className={styles.articleP}>
                V 17.10 se situace změnila. Mluvčí Ministerstva financí ČR uvedl, že šlo pouze o interní dokument určený pro zátěžový test systému, který byl kvůli lidské chybě omylem zveřejněn na veřejně dostupném serveru. Česká republika v současné době tuto daň nezavádí.
              </p>
              <p className={styles.articleP} style={{ marginBottom: 0 }}>
                Coinmate a Binance následně ještě v noci zrušily svá omezení a oznámily, že s prostředky uživatelů je vše v pořádku.
              </p>
            </div>

            <h2 className={styles.sectionHeading}>
              Ale věc tím úplně neskončila
            </h2>

            <p className={styles.articleP}>
              Oficiálně jde o „chybný přenos“, ale několik otázek zůstává nezodpovězeno:
            </p>

            <ul className={styles.bulletList}>
              <li>Proč jsou v dokumentu pro zátěžový test uvedeny konkrétní sazby a prahové hodnoty?</li>
              <li>Proč se objevil na veřejně dostupném serveru právě v době nejintenzivnějších debat o zdanění kryptoměn?</li>
              <li>Proč burzy reagovaly tak rychle a dokonce pozastavily všechny fiatové výběry?</li>
              <li>Proč se v bankovních oznámeních objevila formulace „napojení na daňový systém“?</li>
              <li>Proč obě burzy po zrušení omezení nevysvětlily, proč zpočátku výběry pozastavily?</li>
            </ul>

            <p className={styles.articleP}>
              Oficiálně jde o nedorozumění.<br />
              Ale v krypto komunitě si mnozí stále kladou otázku:<br />
              Pokud šlo jen o test, proč to všichni vzali vážně?
            </p>

            {/* CTA Button */}
            <div className={styles.ctaButtonWrap}>
              <button
                className={styles.ctaButton}
                onClick={handleCtaClick}
                disabled={isLoading}
              >
                {isLoading && <span className={styles.spinner}></span>}
                <span>
                  {isLoading
                    ? "Načítání..."
                    : "Další zprávy ze světa kryptoměn"}
                </span>
              </button>
            </div>

            {/* 3. Unread News Feed */}
            <section className={styles.unreadSection}>
              <div className={styles.unreadHeader}>
                <div className={styles.unreadIcon}>
                  <span className={styles.barBlack}></span>
                  <span className={styles.barRed}></span>
                </div>
                <h2 className={styles.unreadTitle}>ZPRÁVY, KTERÉ JSTE NEČETLI</h2>
              </div>

              <div className={styles.unreadList}>
                {articles.map((item) => (
                  <Link
                    key={item.id}
                    href={`/clanky/${item.slug}`}
                    className={styles.unreadCard}
                  >
                    <div className={styles.unreadThumbWrap}>
                      <img
                        src={item.img}
                        alt={item.title}
                        className={styles.unreadThumb}
                      />
                    </div>
                    <div className={styles.unreadInfo}>
                      <h3 className={styles.unreadHeadline}>{item.title}</h3>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </div>
        </article>
      </main>

      {/* 4. Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerTopRow}>
          <div className={styles.footerLinks}>
            <a href="#cookies" className={styles.footerLink}>COOKIES</a>
            <a href="#plna-verze" className={styles.footerLink}>PLNÁ VERZE</a>
          </div>

          <button
            className={styles.backToTopBtn}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Výhled CZ"
          >
            <img
              src="/images/vyhled-logo.png"
              alt="Výhled CZ"
              className={styles.nahoruLogoImg}
            />
          </button>
        </div>

        <div className={styles.footerBottomRow}>
          <p className={styles.copyrightText}>© 1997-2026 Výhled CZ</p>
        </div>
      </footer>

      {/* 5. Full-Screen Loading Overlay */}
      {isLoading && (
        <div className={styles.loadingOverlay} aria-live="assertive">
          <div className={styles.loadingBox}>
            <div className={styles.globalSpinner}></div>
            <span className={styles.loadingText}>Načítání...</span>
          </div>
        </div>
      )}
    </div>
  );
}
