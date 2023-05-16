import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: "Mamaearth Ubtan Natural Face Wash for Tan Removal",
    image: "https://images.mamaearth.in/catalog/product/u/b/ubtan-face-wash_1_1_2.jpg?fit=contain&width=640",
    brand: "mamaearth",
    size: "(150ml)",
    price: "338",
    originalPrice: "375",
    off: "10%",
    offer: "Buy 1 Get 1 Free",
    categoryName: "Skin Care",
    productType: "facewash",
    ratings: {
      value: "4",
      count: "2345"
    },
    inStock: true,
    isBestSeller: false,
    quantity: 0
  },
  {
    _id: uuid(),
    name: "Mamaearth Onion Shampoo For Hair Growth & Hair Fall Control With Onion & Plant Keratin",
    image: "https://images.mamaearth.in/catalog/product/o/n/onion-shampoo-600ml_1.jpg?fit=contain&width=640",
    brand: "mamaearth",
    size: "(600ml)",
    price: "674",
    originalPrice: "749",
    off: "10%",
    offer: "Buy 1 Get 1 Free",
    categoryName: "Hair",
    productType: "shampoo",
    ratings: {
      value: "4.2",
      count: "2035"
    },
    inStock: true,
    isBestSeller: true,
    quantity: 0
  },
  {
    _id: uuid(),
    name: "Mamaearth Onion Hair Oil with Onion & Redensyl for Hair Fall Control",
    image: "https://images.mamaearth.in/catalog/product/_/o/_onion-oil-250ml__1.jpg?fit=contain&width=640",
    brand: "mamaearth",
    size: "(250ml)",
    price: "539",
    originalPrice: "599",
    off: "10%",
    offer: "Buy 1 Get 1 Free",
    categoryName: "Hair",
    productType: "hairoil",
    ratings: {
      value: "4.5",
      count: "2980"
    },
    inStock: false,
    isBestSeller: true,
    quantity: 0
  },
  {
    _id: uuid(),
    name: "Lakme 9 To 5 Complexion Care Face CC Cream SPF 30 PA++ - Beige",
    image: "https://media6.ppl-media.com/tr:h-750,w-750,c-at_max,dpr-2/static/img/product/255657/lakme-9-to-5-complexion-care-cc-cream-almond-30-g-11-11_8_display_1631683598_6c1169a0.jpg",
    brand: "Lakme",
    size: "(30g)",
    price: "252",
    originalPrice: "360",
    off: "30%",
    offer: "",
    categoryName: "Makeup",
    productType: "cream",
    ratings: {
      value: "4.4",
      count: "1982"
    },
    inStock: true,
    isBestSeller: true,
    quantity: 0
  },
  {
    _id: uuid(),
    name: "Lakme Eyeconic Liquid Eyeliner - Black",
    image: "https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/original/1080053/e7wQPkZ-WD-493214232_1.jpg?dpr=2",
    brand: "Lakme",
    size: "(4.5ml)",
    price: "234",
    originalPrice: "260",
    off: "10%",
    offer: "",
    categoryName: "Makeup",
    productType: "eyeliner",
    ratings: {
      value: "4.2",
      count: "3982"
    },
    inStock: true,
    isBestSeller: true,
    quantity: 0
  },
  {
    _id: uuid(),
    name: "Lakme 9 to 5 Weightless Matte Mousse Lip & Cheek Color - Blush Velvet",
    image: "https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/original/891919/IIC0tVaJB-8901030601750_1.jpg?dpr=2",
    brand: "Lakme",
    size: "(9gm)",
    price: "580",
    originalPrice: "725",
    off: "20%",
    offer: "",
    categoryName: "Makeup",
    productType: "blush",
    ratings: {
      value: "4",
      count: "19820"
    },
    inStock: true,
    isBestSeller: true,
    quantity: 0
  },
  {
    _id: uuid(),
    name: "Lakme Eyeconic Kajal - Twin Pack",
    image: "https://www.jiomart.com/images/product/600x600/491450421/lakme-eyeconic-kajal-twin-deep-black-0-35-g-product-images-o491450421-p491450421-0-202203170715.jpg",
    brand: "Lakme",
    size: "(0.7gm)",
    price: "265",
    originalPrice: "350",
    off: "10%",
    offer: "",
    categoryName: "Makeup",
    productType: "kajal",
    ratings: {
      value: "4.5",
      count: "39820"
    },
    inStock: true,
    isBestSeller: false,
    quantity: 0
  },
  {
    _id: uuid(),
    name: "Lakme 9 To 5 Primer + Matte Lipstick - MP8 Rosy Sunday",
    image: "https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/original/lakme/949643/0/uCjwpvyiuE-u9GJeYC9N9-949643_2.jpg?dpr=2",
    brand: "Lakme",
    size: "(3.6g)",
    price: "468",
    originalPrice: "550",
    off: "15%",
    offer: "",
    categoryName: "Makeup",
    productType: "lipstick",
    ratings: {
      value: "4.5",
      count: "25820"
    },
    inStock: true,
    isBestSeller: true,
    quantity: 0
  },
];
