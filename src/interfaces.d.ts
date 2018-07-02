interface Place {
  id: string;
  placeId: string;
  title: string;
  subtitle: string;
  lat: number;
  lng: number;
}

interface Suggestion {
  id: string;
  placeId: string;
  title: string;
  subtitle: string;
}

interface Product {
  __typename: string;
  id: string;
  title?: string;
  imageUrl?: string;
  price?: number;
  count?: number;
}

interface ProductVariantsInterface {
  productVariantId: string;
  title: string;
  description: string;
  imageUrl: string;
  price: number;
}

interface ProductsInterface {
  productVariants: ProductVariantsInterface[];
}

interface PocInterface {
  products: ProductsInterface[];
}

interface PocCategorySearchInterface {
  poc: PocInterface;
}

interface ThemeInterface {
  background: string;
  foreground: string;
  primary: string;
  danger: string;
}

interface stylInterface {
  theme: ThemeInterface;
}
