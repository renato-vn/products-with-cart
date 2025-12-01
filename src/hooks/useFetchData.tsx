import { useEffect } from "react";
import { useProductStore } from "../store/products.store";

const useFetchData = () => {
  const { products, setProducts } = useProductStore();

  const getData = async () => {
    try {
      const response = await fetch("./constants/data.json");
      const json = await response.json();
      setProducts(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    products,
  };
};

export default useFetchData;
