import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const response = await axios(API);
      setProducts(response.data);
    };

    fetch();
  }, []);

  return products;
};

export default useGetProducts;
