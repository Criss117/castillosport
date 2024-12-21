<script lang="ts">
  import { NAV_ITEMS } from "@/lib/constants";
  import { IMAGES } from "@/lib/constants";
  import Sheet from "./Sheet.svelte";
</script>

{#snippet trigger()}
  <img src={IMAGES.svg.burgerMenu} alt="burger-menu" class="w-10 h-10" />
{/snippet}

<Sheet {trigger} side="right">
  <nav class="flex flex-col gap-y-5">
    {#each NAV_ITEMS as item}
      <a href={item.href} class="mx-auto text-2xl font-semibold">
        {item.name}
      </a>
    {/each}
  </nav>
</Sheet>
