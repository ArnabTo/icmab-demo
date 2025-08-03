import axios, { endpoints } from 'src/utils/axios';

// ----------------------------------------------------------------------

export async function getProducts() {
  try {
    const res = await axios.get(endpoints.product.list);
    const { data } = res;

    if (!Array.isArray(data.products)) {
      throw new Error('Invalid products data');
    }

    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return { products: [] }; // Return a fallback value
  }
}

// ----------------------------------------------------------------------

export async function getProduct(id) {
  const URL = id ? `${endpoints.product.details}?productId=${id}` : '';

  const res = await axios.get(URL);

  return res.data;
}
