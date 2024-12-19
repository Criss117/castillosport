<script lang="ts">
  import { totalItems, totalPrice, initCart } from "@/store/cart.store";
  import { openCartSheet } from "@/store/cart-sheet.store";
  import { formatCurrency } from "@/lib/currency-utils";
  import { IMAGES } from "@/lib/constants";

  $effect(() => {
    initCart();
  });
</script>

<p class="text-white font-semibold text-sm w-20 text-end">
  {formatCurrency($totalPrice)}
</p>
<button type="button" class="relative" onclick={openCartSheet}>
  <img src={IMAGES.svg.shopingCart} alt="shoping-cart" class="w-6 h-6" />
  <p
    class="absolute bottom-6 right-0 translate-x-1/2 translate-y-1/2 font-semibold text-primary"
  >
    {$totalItems}
  </p>
</button>
