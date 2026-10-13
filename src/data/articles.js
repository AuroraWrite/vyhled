export const articles = [
  {
    id: 1,
    slug: "studena-fronta-rozpuli-cesko",
    title: "Studená fronta rozpůlí Česko. Mapa ukazuje, kde bude pršet a kde udeří vedra",
    img: "/images/weather-map.jpg",
  },
  {
    id: 2,
    slug: "do-ceskeho-retezce-se-dostal-nebezpecny-syr",
    title: "Do českého řetězce se dostal nebezpečný sýr, nejezte ho, varuje Státní veterinární správa",
    img: "/images/cheese.jpg",
  },
  {
    id: 3,
    slug: "havel-provokoval-k-mysleni-zit-v-pravde",
    title: "Havel provokoval k myšlení. Žít v pravdě znamená nevytěsňovat problémy, soudí filozofka",
    img: "/images/gas-station.jpg",
  },
  {
    id: 4,
    slug: "ruska-diplomatka-jmenovala-spolupachatele",
    title: "Ruská diplomatka jmenovala „spolupachatele“ války na Ukrajině. Včetně Česka",
    img: "/images/russian-diplomat.jpg",
  },
  {
    id: 5,
    slug: "zebricek-nejlepsich-kuchyni-sveta",
    title: "Žebříček nejlepších kuchyní světa! Česko nemile překvapilo",
    img: "/images/czech-cuisine.jpg",
  },
];

export function getArticleBySlug(slug) {
  if (!slug) return null;
  return articles.find(
    (a) => a.slug === slug || String(a.id) === String(slug)
  );
}

export function getOtherArticles(currentSlug) {
  return articles.filter(
    (a) => a.slug !== currentSlug && String(a.id) !== String(currentSlug)
  );
}
