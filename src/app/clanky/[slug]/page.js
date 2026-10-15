import Link from "next/link";
import { getArticleBySlug, getOtherArticles, articles } from "@/data/articles";
import CtaButton from "./CtaButton";
import styles from "./article.module.css";

export async function generateStaticParams() {
  return articles.flatMap((item) => [
    { slug: item.slug },
    { slug: String(item.id) },
  ]);
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Článek nenalezen — Výhled CZ",
    };
  }

  return {
    title: `${article.title} — Výhled CZ`,
    openGraph: {
      title: article.title,
      images: [{ url: article.img }],
    },
  };
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <div className={styles.pageWrapper}>
        <header className={styles.header}>
          <div className={styles.headerInner}>
            <Link href="/" className={styles.logoLink} aria-label="Výhled CZ Domů">
              <img src="/images/vyhled-logo.png" alt="Výhled CZ" className={styles.logoImg} />
            </Link>
          </div>
        </header>
        <main className={styles.mainContainer}>
          <h1 className={styles.articleTitle}>Článek nebyl nalezen</h1>
          <div style={{ marginTop: '20px' }}>
            <Link href="/" className={styles.backHomeLink}>
              ← Zpět na domovskou stránku
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const otherArticles = getOtherArticles(article.slug);

  return (
    <div className={styles.pageWrapper}>
      {/* 1. Header */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/" className={styles.logoLink} aria-label="Výhled CZ Domů">
            <img
              src="/images/vyhled-logo.png"
              alt="Výhled CZ"
              className={styles.logoImg}
            />
          </Link>

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

      {/* 2. Sub-navigation */}
      <nav className={styles.subNav}>
        <div className={styles.subNavInner}>
          <div className={styles.navLeft}>
            <Link href="/" className={styles.backHomeLink}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              <span>Zpět na přehled</span>
            </Link>
          </div>

          <div className={styles.navRight}>
            <div className={styles.liveTag}>
              <span className={styles.liveDot}></span>
              <span>SLEDOVAT</span>
            </div>
          </div>
        </div>
      </nav>

      {/* 3. Main Article Content - Strictly Title and Image */}
      <main className={styles.mainContainer}>
        <article className={styles.articleCard}>
          {/* Headline */}
          <h1 className={styles.articleTitle}>{article.title}</h1>

          {/* Image */}
          <div className={styles.articleImageWrap}>
            <img
              src={article.img}
              alt={article.title}
              className={styles.articleImage}
            />
          </div>

          {/* Article Body */}
          <div className={styles.articleBody}>
            {article.lead && (
              <p className={styles.articleLead}>{article.lead}</p>
            )}
            {article.paragraphs?.map((p, idx) => (
              <p key={idx} className={styles.articleP}>{p}</p>
            ))}
          </div>
        </article>

        {/* 4. Other Unread Articles */}
        <section className={styles.unreadSection}>
          <div className={styles.unreadHeader}>
            <div className={styles.unreadIcon}>
              <span className={styles.barBlack}></span>
              <span className={styles.barRed}></span>
            </div>
            <h2 className={styles.unreadTitle}>ZPRÁVY, KTERÉ JSTE NEČETLI</h2>
          </div>

          <div className={styles.unreadList}>
            {otherArticles.map((item) => (
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

        {/* CTA Button */}
        <CtaButton />
      </main>

      {/* 5. Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerTopRow}>
          <div className={styles.footerLinks}>
            <Link href="/" className={styles.footerLink}>DOMŮ</Link>
            <a href="#cookies" className={styles.footerLink}>COOKIES</a>
            <a href="#plna-verze" className={styles.footerLink}>PLNÁ VERZE</a>
          </div>

          <Link href="/" className={styles.backToTopBtn} aria-label="Výhled CZ Domů">
            <img
              src="/images/vyhled-logo.png"
              alt="Výhled CZ"
              className={styles.nahoruLogoImg}
            />
          </Link>
        </div>

        <div className={styles.footerBottomRow}>
          <p className={styles.copyrightText}>© 1997-2026 Výhled CZ</p>
        </div>
      </footer>
    </div>
  );
}
