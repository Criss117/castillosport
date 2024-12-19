import { writable } from "svelte/store";

export const isCartSheetOpen = writable(false);

export function openCartSheet() {
  isCartSheetOpen.set(true);
}

export function closeCartSheet() {
  isCartSheetOpen.set(false);
}
