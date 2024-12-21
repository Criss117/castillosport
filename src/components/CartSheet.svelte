<script lang="ts">
  import { isCartSheetOpen, closeCartSheet } from "@/store/cart-sheet.store";
  import {
    cartItems,
    removeFromCart,
    totalItems,
    totalPrice,
  } from "@/store/cart.store";

  import { cn } from "@/lib";
  import { formatCurrency } from "@/lib/currency-utils";
</script>

<div
  aria-hidden="true"
  tabindex="0"
  role="button"
  onclick={closeCartSheet}
  class={cn(
    "fixed top-0 left-0 w-full h-full cursor-default",
    $isCartSheetOpen ? "z-50 bg-black/50 backdrop-blur-sm" : "-z-50"
  )}
></div>
<div
  class={cn(
    "fixed top-0 w-full xl:w-[500px] h-screen bg-bgsecondary z-50 shadow-lg transition-all duration-500",
    $isCartSheetOpen ? "right-0" : "-right-[100%]"
  )}
>
  <header class="w-full flex justify-end p-5">
    <button onclick={closeCartSheet} class="font-bold text-xl"> X </button>
  </header>

  <section class="space-y-5 relative h-full">
    {#if $cartItems.length === 0}
      <div class="flex justify-center p-5">
        <p class="text-center text-xl font-bold">Tu carrito está vacío</p>
      </div>
    {/if}
    {#each $cartItems as item}
      <div
        class="p-5 border mx-2 rounded-lg shadow-sm border-gray-200 bg-white"
      >
        <div class="flex w-full gap-x-5">
          <img src={item.image} alt={item.name} class="w-10 h-10" />
          <div class="flex gap-2 flex-col items-start">
            <h3 class="font-bold text-sm product-title max-w-[250px]">
              {item.name}
            </h3>
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
    <section
      class="absolute bottom-20 w-full justify-between flex flex-col bg-white shadow-lg rounded-lg p-5 mx-2 space-y-5"
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
  </section>
</div>

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
