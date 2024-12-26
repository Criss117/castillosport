export const IMAGES = {
  svg: {
    facebook: "/assets/svg/facebook.svg",
    instagram: "/assets/svg/instagram_dark.svg",
    whatsapp: "/assets/svg/whatsapp.svg",
    shopingCart: "/assets/svg/shopping-cart.svg",
    user: "/assets/svg/user-round.svg",
    search: "/assets/svg/search.svg",
    dumbbell: "/assets/svg/dumbbell.svg",
    fileUser: "/assets/svg/file-user.svg",
    thumbsUp: "/assets/svg/thumbs-up.svg",
    idCard: "/assets/svg/id-card.svg",
    bike: "/assets/svg/bike.svg",
    burgerMenu: "/assets/svg/burger.svg",
  },
  logo: "/castillo-sport-logo.webp",
  heroImage1:
    "/assets/heros/SOMOS-EL-ALIADO-QUE-NECECITA-TU-CUERPO-ecommerce-1-1024x577.webp",
  heroImage2:
    "/assets/heros/SOMOS-EL-ALIADO-QUE-NECECITA-TU-CUERPO-ecommerce-2-1024x577.webp",
  heroImage3:
    "/assets/heros/SOMOS-EL-ALIADO-QUE-NECECITA-TU-CUERPO-ecommerce-3-1024x577.webp",
  pexelsPhoto: "/assets/pexels-photo.webp",
  shopImage: "/assets/suplementos-deportivos-Conoce-los-mitos-y-verdades.webp",
  allies: {
    bpiSports: "/assets/allies/logo-bpi-sports-300x175.png",
  },
} as const;

export const SOCIALS = [
  {
    name: "Facebook",
    icon: IMAGES.svg.facebook,
    link: "https://www.facebook.com/castillosport.24?mibextid=ZbWKwL",
  },
  {
    name: "Instagram",
    icon: IMAGES.svg.instagram,
    link: "https://www.instagram.com/castillosport/profilecard/",
  },
  {
    name: "Whatsapp",
    icon: IMAGES.svg.whatsapp,
    link: "https://walink.co/bf775b",
  },
] as const;

export const COMPLETE_SOCIALS = [...SOCIALS] as const;

export const HEROIMAGES = [
  {
    src: IMAGES.heroImage1,
    alt: "Hero 1",
  },
  {
    src: IMAGES.heroImage2,
    alt: "Hero 2",
  },
  {
    src: IMAGES.heroImage3,
    alt: "Hero 3",
  },
] as const;

export const SECTIONS = {
  supplements: {
    title: "Suplementos más vendidos",
    id: "supplements-section",
  },
  implements: {
    title: "Implementos más vendidos",
    id: "implements-section",
  },
} as const;

export const INTERMEDIATE_SECTIONS = {
  supplements: {
    label: "Ver todos los suplementos",
    id: "supplements-intermediate-section",
    href: "#",
  },
  implements: {
    label: "Ver todos los implementos",
    id: "implements-intermediate-section",
    href: "#",
  },
} as const;

export const ALLIES = [
  {
    name: "BPI Sports",
    logo: IMAGES.allies.bpiSports,
    slug: "bpi-sports",
  },
  {
    name: "BPI Sports",
    logo: IMAGES.allies.bpiSports,
    slug: "bpi-sports",
  },
  {
    name: "BPI Sports",
    logo: IMAGES.allies.bpiSports,
    slug: "bpi-sports",
  },
  {
    name: "BPI Sports",
    logo: IMAGES.allies.bpiSports,
    slug: "bpi-sports",
  },
  {
    name: "BPI Sports",
    logo: IMAGES.allies.bpiSports,
    slug: "bpi-sports",
  },
  {
    name: "BPI Sports",
    logo: IMAGES.allies.bpiSports,
    slug: "bpi-sports",
  },
  {
    name: "BPI Sports",
    logo: IMAGES.allies.bpiSports,
    slug: "bpi-sports",
  },
  {
    name: "BPI Sports",
    logo: IMAGES.allies.bpiSports,
    slug: "bpi-sports",
  },
] as const;

export const ABOUT_CARDS = [
  {
    title: "Certificado y Original",
    description: "100% Garantizable.",
    icon: IMAGES.svg.fileUser,
  },
  {
    title: "Grandes Ahorros",
    description: "Los mas bajos precios.",
    icon: IMAGES.svg.idCard,
  },
  {
    title: "Experiancia Única",
    description: "100% Optimo",
    icon: IMAGES.svg.thumbsUp,
  },
  {
    title: "Pagos Contraentrega",
    description: "Adecuado para tu seguridad.",
    icon: IMAGES.svg.bike,
  },
] as const;

export const NAV_ITEMS = [
  { name: "Inicio", href: "/" },
  { name: "Tienda", href: "/tienda" },
  { name: "Suplementos", href: "#" },
  { name: "Marcas", href: "#" },
  { name: "Implementos", href: "#" },
  { name: "Blog", href: "/blog" },
  { name: "Contacto", href: "/contacto" },
  { name: "Nosotros", href: "/nosotros" },
] as const;
