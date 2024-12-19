<script lang="ts">
  import type { Product } from "@/data/entities/Product";
  import { addToCart } from "@/store/cart.store";

  interface Props {
    product: Product;
  }

  let { product }: Props = $props();
  let quantity = $state(1);

  const handlerAddToCart = () => {
    addToCart({
      slug: product.slug,
      name: product.title,
      price: product.price,
      image: product.primaryImage,
      quantity: quantity,
    });
  };
</script>

<div
  class="flex gap-x-5 justify-between flex-col lg:flex-row mt-10 space-y-5 lg:space-y-0"
>
  <input
    type="number"
    value={quantity}
    min="1"
    max="10"
    onchange={(e) => {
      const target = e.target as HTMLInputElement;

      if (target.value === "") {
        quantity = 1;
        return;
      }

      quantity = Number(target.value);
    }}
    class="border-2 border-slate-900 mx-auto lg:w-1/5 h-12 text-xl text-center"
  />
  <button
    onclick={handlerAddToCart}
    class="bg-primary px-5 py-2 rounded-lg text-white text-xl font-semibold lg:w-4/5 h-12 md:w-[50%] w-full mx-auto"
  >
    Agregar al carrito
  </button>
  <!-- <pre><code>{JSON.stringify($cartItems, null, 2)}</code></pre> -->
</div>
