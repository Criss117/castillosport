import type { FakeStoreProduct } from "../entities/FakeStoreProducts";
import type { Product } from "../entities/Product";
import ProductMapper from "../mappers/PorductMapper";
import HttpClient from "./HttpClient";

class ProductRepository {
  async getProducts(limit: number = 6): Promise<Product[]> {
    try {
      const { data, status } = await HttpClient.get<FakeStoreProduct[]>(
        "/products",
        {
          params: {
            limit,
          },
        }
      );

      console.log(status);

      if (status !== 200) {
        throw new Error("Failed to fetch products");
      }

      return data.map((product) => ProductMapper.map(product));
    } catch (error) {
      return [];
    }
  }

  async getProduct(slug: string): Promise<Product> {
    const { data, status } = await HttpClient.get<FakeStoreProduct>(
      `/products/${slug}`
    );

    if (status !== 200) {
      throw new Error("Failed to fetch product");
    }

    return ProductMapper.map(data);
  }

  async getByCategory(category: string): Promise<Product[]> {
    const { data, status } = await HttpClient.get<FakeStoreProduct[]>(
      `/products/category/${category}`,
      {
        params: {
          limit: 6,
        },
      }
    );

    if (status !== 200) {
      throw new Error("Failed to fetch products");
    }

    return data.map((product) => ProductMapper.map(product));
  }

  async getAllCategories(): Promise<string[]> {
    const { data, status } = await HttpClient.get<string[]>(
      "/products/categories"
    );

    if (status !== 200) {
      throw new Error("Failed to fetch categories");
    }

    return data;
  }
}

export default ProductRepository;
