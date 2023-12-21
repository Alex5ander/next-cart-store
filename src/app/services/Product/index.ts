const API_BASE_URL =
  'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products';

export interface IProduct {
  id: number;
  name: string;
  brand: string;
  photo: string;
  description: string;
  price: string;
}

interface IGetProducts {
  products?: IProduct[];
  count?: number;
}

interface IGetProductsError {
  message?: string;
}

import data from '../../../products.json';

export async function getProducts(
  page: number = 1
): Promise<IGetProducts & IGetProductsError> {
  try {
    // const request = await fetch(
    //   `${API_BASE_URL}?page=${page}&rows=10&sortBy=id&orderBy=DESC`
    // );
    // const json: IGetProducts = await request.json();
    return data;
  } catch (error: any) {
    return { message: error.message };
  }
}
