import axios from "axios";
import { useEffect, useState } from "react";


const Test = () => {
    const [products, setProducts] = useState();

    
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("https://www.websklad.biz.ua/wp-content/uploads/randomize_prom_.xml");
      setProducts(response.data);
      console.log(response.data)
    };
    fetchProducts();
  }, []);
  return (
    <>
   asdasd
    </>
  );
};

export default Test;
