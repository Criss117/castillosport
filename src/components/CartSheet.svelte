<script lang="ts">
  import {
    cartItems,
    removeFromCart,
    totalItems,
    totalPrice,
  } from "@/store/cart.store";

  import { formatCurrency } from "@/lib/currency-utils";

  import { IMAGES } from "@/lib/constants";
  import Sheet from "./Sheet.svelte";
</script>

{#snippet trigger()}
  <img src={IMAGES.svg.shopingCart} alt="shoping-cart" class="w-6 h-6" />
  <p
    class="absolute bottom-6 right-0 translate-x-1/2 translate-y-1/2 font-semibold text-primary"
  >
    {$totalItems}
  </p>
{/snippet}

<Sheet {trigger}>
  <section class="h-full">
    {#if $cartItems.length === 0}
      <div class="flex justify-center p-5">
        <p class="text-center text-xl font-bold">Tu carrito está vacío</p>
      </div>
    {/if}
    <div class="space-y-5 relative h-[60%] overflow-y-auto">
      {#each $cartItems as item}
        <div
          class="p-5 border mx-2 rounded-lg shadow-sm border-gray-200 bg-white"
        >
          <div class="flex w-full gap-x-5">
            <img src={item.image} alt={item.name} class="w-10 h-10" />
            <div class="flex gap-2 flex-col items-start">
              <a href={`/productos/${item.slug}`}>
                <h3 class="font-bold text-sm product-title max-w-[250px]">
                  {item.name}
                </h3>
              </a>
              <button onclick={() => removeFromCart(item.slug)}>
                <span class="text-sm font-bold text-red-500">Eliminar</span>
              </button>
            </div>
          </div>
          <div class="flex justify-between mt-5 ml-14">
            <p class="text-lg font-bold">
              {item.quantity} <span class="text-sm">Unidades</span>
            </p>
            <span class="text-lg font-bold"
              >{formatCurrency(item.totalPrice)}</span
            >
          </div>
        </div>
      {/each}
    </div>
    {#if $totalItems > 0}
      <section
        class="w-full justify-between flex flex-col bg-white shadow-lg rounded-lg p-5 mx-2 space-y-5
         absolute bottom-24 left-0 right-0
        "
      >
        <header class="flex justify-between">
          <p>Productos ({$totalItems})</p>
          <p>{formatCurrency($totalPrice)}</p>
        </header>
        <div class="flex justify-between">
          <p class="text-xl font-bold">Total</p>
          <p class="text-xl font-bold">{formatCurrency($totalPrice)}</p>
        </div>
        <a
          href="/carrito"
          class="bg-primary px-5 py-2 rounded-lg text-white text-xl font-semibold text-center"
          >Continuar compra</a
        >
      </section>
    {/if}
  </section>
</Sheet>

<style>
  .product-title {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
