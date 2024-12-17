import { ProductCardProps } from './components/Card/ProductCard'

const values: ProductCardProps[] = [{
    name: "Товар 1",
    description: "Описание товара 1",
    category: "Категория A",
    quantity: 10,
    unit: "шт",
    image: "https://i.pinimg.com/736x/60/6b/72/606b728cf4b84803f6d48b6bba5cb686.jpg",
  },
  {
    name: "Товар 2",
    description: "Длинное описание товара 2 ".repeat(500),
    category: "Категория B",
    quantity: 0,
    unit: "шт",
    image: null,
  }
];


export const testData: ProductCardProps[] = [].concat(...Array(500).fill(values));