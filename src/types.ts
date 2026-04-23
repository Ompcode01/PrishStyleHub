export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description?: string;
  tag?: string;
}

export interface Collection {
  id: string;
  name: string;
  image: string;
  href: string;
}
