export type Product = {
  id: number;
  image: Image;
  name: string;
  category: string;
  price: number;
};

type Image = {
  thumbnail: string;
  mobile: string;
  tablet: string;
  desktop: string;
};
