import type { FakeStoreProduct } from "../entities/FakeStoreProducts";
import type { Product } from "../entities/Product";

class ProductMapper {
  public static map(product: FakeStoreProduct): Product {
    return {
      title: product.title,
      slug: product.id.toString(),
      description: product.description,
      price: product.price,
      primaryImage: product.image,
      secondaryImage: product.image,
      category: product.category,
    };
  }
}

export default ProductMapper;
