<script lang="ts">
  import { isCartSheetOpen, closeCartSheet } from "@/store/cart-sheet.store";
  import { cartItems, removeFromCart } from "@/store/cart.store";

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
    "fixed top-0 w-[600px] h-screen bg-white z-50 shadow-lg transition-all duration-500",
    $isCartSheetOpen ? "right-0" : "-right-[600px]"
  )}
>
  <header class="w-full flex justify-end p-5">
    <button onclick={closeCartSheet} class="font-bold text-xl"> X </button>
  </header>

  <section>
    {#if $cartItems.length === 0}
      <div class="flex justify-center items-center p-5">
        <p class="text-center text-xl font-bold">Tu carrito está vacío</p>
      </div>
    {/if}
    {#each $cartItems as item}
      <div
        class="flex justify-between items-center p-5 border-t border-b border-gray-200"
      >
        <div class="flex items-center justify-between w-full">
          <button onclick={() => removeFromCart(item.slug)}>
            <span class="text-sm font-bold text-red-500">Eliminar</span>
          </button>
          <div class="flex items-center gap-2">
            <img
              src={item.image}
              alt={item.name}
              class="w-10 h-10 rounded-full"
            />
            <h3 class="font-bold text-sm product-title max-w-[200px]">
              {item.name}
            </h3>
          </div>
          <p class="text-lg font-bold">
            {item.quantity} <span class="text-sm">Unidades</span>
          </p>
          <span class="text-lg font-bold"
            >{formatCurrency(item.totalPrice)}</span
          >
        </div>
      </div>
    {/each}
  </section>
</div>

<style>
  .product-title {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
