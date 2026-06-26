export const BRAND = {
  name: "EDAYE",
  full: "EDAYE Institut de Beauté",
  tagline: "Du soin au besoin",
  promise: "Nous allons vous faire sentir UNIQUE",
  reassurance:
    "Venez comme vous êtes. Nous prendrons le soin de vous rendre sublime. Vous déborderez de confiance quand on fera ressortir ce charme que vous êtes la seule à détenir.",
};

export const CONTACT = {
  address:
    "Boulevard Jean Paul II, Hedzranawoé, en face de la nouvelle cité Millénium, 150m de UTB Novissi, Lomé, Togo",
  phones: [
    { display: "+228 93 55 77 90", tel: "+22893557790" },
    { display: "+228 99 74 50 21", tel: "+22899745021" },
  ],
  email: "edayesarl@gmail.com",
  whatsapp: "https://wa.me/22893557790",
  instagram: "https://instagram.com/edaye_salon",
  facebook: "https://www.facebook.com/people/Edaye-Institut-de-beaut%C3%A9/61576891619278/",
  googleReviews: "https://www.google.com/maps/search/EDAYE+Institut+de+Beauté+Lomé+Togo",
};

export type DayHours = {
  day: string;
  hours: string;
  closed?: boolean;
  highlight?: boolean;
};

export const HOURS: DayHours[] = [
  { day: "Lundi", hours: "Fermé", closed: true },
  { day: "Mardi", hours: "08h – 12h · 14h – 19h" },
  { day: "Mercredi", hours: "08h – 12h · 14h – 19h" },
  { day: "Jeudi", hours: "08h – 12h · 14h – 19h" },
  { day: "Vendredi", hours: "08h – 12h · 14h – 21h" },
  { day: "Samedi", hours: "08h – 12h · 14h – 21h" },
  { day: "Dimanche", hours: "14h – 19h", highlight: true },
];

export type Service = { label: string; price: string };
export type ServiceCategory = {
  id: string;
  title: string;
  items: Service[];
};

export const SERVICES: ServiceCategory[] = [
  {
    id: "coiffure-dame",
    title: "Coiffure Dame",
    items: [
      { label: "Défrisage", price: "2 500" },
      { label: "Shampoing", price: "1 500" },
      { label: "Bain", price: "4 000" },
      { label: "Pose couleur", price: "2 500" },
      { label: "Broshing", price: "5 000" },
      { label: "Pose tissage", price: "5 000" },
      { label: "Pose frontale", price: "10 000" },
      { label: "Pose closure", price: "8 000" },
      { label: "Défaite", price: "1 000" },
    ],
  },
  {
    id: "coiffure-homme",
    title: "Coiffure Homme",
    items: [
      { label: "Adulte", price: "1 500" },
      { label: "Enfant", price: "1 000" },
    ],
  },
  {
    id: "tresses",
    title: "Tresses",
    items: [
      { label: "Twist", price: "3 000" },
      { label: "Féfé · séna · torsade", price: "8 000" },
      { label: "Rasta", price: "12 000" },
    ],
  },
  {
    id: "maquillage",
    title: "Maquillage",
    items: [
      { label: "Maquillage simple", price: "10 000" },
      { label: "Fiançailles", price: "15 000" },
      { label: "Soirée", price: "15 000" },
      { label: "Forfait tournage · jour", price: "20 000" },
      { label: "Forfait tournage · demi-journée", price: "15 000" },
      { label: "Mariage", price: "20 000 – 25 000" },
    ],
  },
  {
    id: "soins",
    title: "Soins corps & visage",
    items: [
      { label: "Gommage + hydratation", price: "20 000" },
      { label: "Gommage savon noir", price: "10 000" },
      { label: "Soin visage éclat", price: "5 000" },
      { label: "Soin hydratant", price: "10 000" },
      { label: "Soin acnéique", price: "15 000" },
      { label: "Soin anti-âge", price: "15 000" },
      { label: "Consultation + conseils", price: "2 000" },
    ],
  },
  {
    id: "pieds-mains",
    title: "Pieds & mains",
    items: [
      { label: "Pédicure", price: "7 000" },
      { label: "Manucure", price: "3 000" },
      { label: "Vernis mains", price: "1 000" },
      { label: "Vernis pieds", price: "1 000" },
      { label: "Semi-permanent mains", price: "4 000" },
      { label: "Semi-permanent pieds", price: "4 000" },
      { label: "Construction gel", price: "12 000" },
      { label: "Capsule + vernis simple", price: "2 000" },
      { label: "Capsule + acrylique", price: "10 000" },
      { label: "Gel", price: "12 000" },
      { label: "Résine", price: "10 000" },
    ],
  },
  {
    id: "massage",
    title: "Massage",
    items: [
      { label: "Classique", price: "15 000" },
      { label: "Relaxant", price: "15 000" },
      { label: "Tonique", price: "15 000" },
      { label: "Bougie", price: "12 000" },
      { label: "Amincissant", price: "15 000" },
    ],
  },
  {
    id: "epilation",
    title: "Épilation",
    items: [
      { label: "Sourcils", price: "1 000" },
      { label: "Lèvre supérieure", price: "1 000" },
      { label: "Menton", price: "1 500" },
      { label: "Visage", price: "4 000" },
      { label: "Maillot simple", price: "5 000" },
      { label: "Maillot intégral", price: "7 000" },
      { label: "Ventre", price: "3 000" },
      { label: "Bras", price: "4 000" },
      { label: "Demi-jambe", price: "4 000" },
      { label: "Jambe entière", price: "8 000" },
      { label: "Dos", price: "5 000" },
    ],
  },
];

export type Bouquet = {
  id: string;
  name: string;
  description: string;
  price: string;
  recommended?: boolean;
};

export const BOUQUETS: Bouquet[] = [
  {
    id: "woezon",
    name: "WOEZON",
    description: "Soin visage éclat + vernis mains et pieds",
    price: "5 000 F",
  },
  {
    id: "miagbofa",
    name: "MIAGBOFA",
    description: "Pédicure + soin visage éclat",
    price: "10 000 F",
    recommended: true,
  },
  {
    id: "tsimiagbo",
    name: "TSIMIAGBO",
    description: "Pédicure + soin visage éclat + capsule main + vernis pieds",
    price: "12 000 F",
  },
];

export const WEDDING_TEXT =
  "Nous serons présents pour vous accompagner à cette étape importante de votre vie. Concentrez-vous sur vos invités et laissez-nous nous concentrer sur vous, pour vous rendre cette journée encore plus mémorable.";

export const BEAUTY_TIP = {
  title: "Soigner l'acné avec un légume de votre cuisine : la tomate",
  intro:
    "La tomate est riche en antioxydants : elle aide à réduire l'inflammation et resserre les pores.",
  steps: [
    "Coupez une tomate bio mûre en fines rondelles.",
    "Déposez-les sur le visage propre pendant 20 minutes.",
    "Rincez à l'eau tiède et hydratez avec votre soin habituel.",
  ],
};

export const PRESTATION_OPTIONS = [
  "Coiffure",
  "Maquillage",
  "Soins corps & visage",
  "Pieds & mains",
  "Massage",
  "Épilation",
  "Bouquets de soins",
];
