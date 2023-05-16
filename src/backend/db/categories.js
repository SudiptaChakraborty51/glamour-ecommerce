import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Makeup"
  },
  {
    _id: uuid(),
    categoryName: "Skin Care"
  },
  {
    _id: uuid(),
    categoryName: "Appliances"
  },
  {
    _id: uuid(),
    categoryName: "Hair"
  },
  {
    _id: uuid(),
    categoryName: "Bath & Body"
  },
  {
    _id: uuid(),
    categoryName: "Fragrance"
  }
];
