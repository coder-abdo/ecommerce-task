export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export const getAllProducts = async () => {
  try {
    const result = await fetch(`${process.env.BASE_URL}`);
    const products = await result.json();
    return products;
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
    }
  }
};
