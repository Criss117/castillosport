import { writable } from "svelte/store";

export const isCartSheetOpen = writable(true);

export function openCartSheet() {
  isCartSheetOpen.set(true);
}

export function closeCartSheet() {
  isCartSheetOpen.set(false);
}
