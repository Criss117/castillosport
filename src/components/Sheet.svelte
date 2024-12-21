<script lang="ts">
  import { cn } from "@/lib";
  import type { Snippet } from "svelte";

  interface Props {
    side?: "left" | "right";
    children: Snippet;
    trigger: Snippet;
  }

  let { children, trigger, side = "left" }: Props = $props();
  let isOpen = $state(false);

  function close() {
    isOpen = false;
  }

  function open() {
    isOpen = true;
  }

  $effect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100vh";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.height = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.body.style.height = "unset";
    };
  });

  const SIDE_CLASSES = {
    left: {
      open: "right-0",
      close: "-right-[100%]",
    },
    right: {
      open: "left-0",
      close: "-left-[100%]",
    },
  } as const;
</script>

<button type="button" class="relative" onclick={open}>
  {@render trigger()}
</button>

<div
  aria-hidden="true"
  tabindex="0"
  role="button"
  onclick={close}
  class={cn(
    "fixed top-0 left-0 w-full h-full cursor-default",
    isOpen ? "z-50 bg-black/50 backdrop-blur-sm" : "-z-50"
  )}
></div>
<div
  class={cn(
    "fixed top-0 w-full xl:w-[500px] h-screen bg-bgsecondary z-50 shadow-lg transition-all duration-500",
    isOpen ? SIDE_CLASSES[side].open : SIDE_CLASSES[side].close
  )}
>
  <header class="w-full flex justify-end p-5">
    <button onclick={close} class="font-bold text-xl"> X </button>
  </header>

  {@render children()}
</div>
