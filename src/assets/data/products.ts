
import { Product } from '../store/cartStore'

export const products: Product[] = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: 1229,
    image: "https://images.pexels.com/photos/34018284/pexels-photo-34018284.jpeg",
    description: "Le dernier iPhone avec puce A17 Pro, caméra avancée et design en titane.",
    category: "Smartphones",
    rating: 4.8,
    stock: 25
  },
  {
    id: 2,
    name: "MacBook Air M2",
    price: 1499,
    image: "https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg",
    description: "Ordinateur portable ultra-fin avec puce M2, écran Retina 13 pouces.",
    category: "Ordinateurs",
    rating: 4.9,
    stock: 15
  },
  {
    id: 3,
    name: "AirPods Pro 2",
    price: 279,
    image: "https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg",
    description: "Écouteurs sans fil avec réduction de bruit active et audio spatial.",
    category: "Audio",
    rating: 4.7,
    stock: 50
  },
  {
    id: 4,
    name: "iPad Pro 12.9",
    price: 1099,
    image: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg",
    description: "Tablette professionnelle avec écran Liquid Retina XDR et puce M2.",
    category: "Tablettes",
    rating: 4.8,
    stock: 20
  },
  {
    id: 5,
    name: "Apple Watch Series 9",
    price: 429,
    image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg",
    description: "Montre connectée avec capteurs de santé avancés et écran Always-On.",
    category: "Montres",
    rating: 4.6,
    stock: 30
  },
  {
    id: 6,
    name: "Samsung Galaxy S24 Ultra",
    price: 1199,
    image: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg",
    description: "Smartphone Android haut de gamme avec S Pen et caméra 200MP.",
    category: "Smartphones",
    rating: 4.7,
    stock: 18
  },
  {
    id: 7,
    name: "Dell XPS 13",
    price: 1299,
    image: "https://images.pexels.com/photos/18105/pexels-photo.jpg",
    description: "Ultrabook premium avec écran InfinityEdge et processeur Intel Core i7.",
    category: "Ordinateurs",
    rating: 4.5,
    stock: 12
  },
  {
    id: 8,
    name: "Sony WH-1000XM5",
    price: 399,
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg",
    description: "Casque sans fil avec réduction de bruit leader du marché.",
    category: "Audio",
    rating: 4.8,
    stock: 35
  },
  {
    id: 9,
    name: "Microsoft Surface Pro 9",
    price: 1099,
    image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg",
    description: "Tablette 2-en-1 avec clavier détachable et stylet Surface Pen.",
    category: "Tablettes",
    rating: 4.4,
    stock: 22
  },
  {
    id: 10,
    name: "Garmin Fenix 7",
    price: 699,
    image: "https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg",
    description: "Montre GPS multisport avec cartographie et autonomie exceptionnelle.",
    category: "Montres",
    rating: 4.9,
    stock: 15
  },
  {
    id: 11,
    name: "Nintendo Switch OLED",
    price: 349,
    image: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg",
    description: "Console de jeu portable avec écran OLED vibrant de 7 pouces.",
    category: "Gaming",
    rating: 4.6,
    stock: 40
  },
  {
    id: 12,
    name: "Canon EOS R6 Mark II",
    price: 2499,
    image: "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg",
    description: "Appareil photo mirrorless professionnel avec capteur plein format 24MP.",
    category: "Photo",
    rating: 4.8,
    stock: 8
  }
]

export const categories = [
  "Tous",
  "Smartphones",
  "Ordinateurs", 
  "Audio",
  "Tablettes",
  "Montres",
  "Gaming",
  "Photo"
]
