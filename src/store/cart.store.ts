import { derived, writable } from "svelte/store";

interface NewCartItem {
  slug: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartItem {
  slug: string;
  name: string;
  price: number;
  totalPrice: number;
  image: string;
  quantity: number;
}

export const cartItems = writable<CartItem[]>([]);
export const totalItems = derived(cartItems, (items) => {
  return items.reduce((total, item) => total + item.quantity, 0);
});
export const totalPrice = derived(cartItems, (items) => {
  return items.reduce((total, item) => total + item.totalPrice, 0);
});

export function initCart() {
  const storedCartItems = localStorage.getItem("cartItems");
  if (storedCartItems) {
    cartItems.set(JSON.parse(storedCartItems));
  }
}

export function addToCart(item: NewCartItem) {
  cartItems.update((items) => {
    const existingItem = items.find((cartItem) => cartItem.slug === item.slug);

    let newItems: CartItem[] = [];

    if (!existingItem) {
      items.push({
        ...item,
        totalPrice: item.price * item.quantity,
      });

      newItems = items;
    }

    newItems = items.map((cartItem) => {
      if (cartItem.slug === item.slug) {
        return {
          ...cartItem,
          quantity: cartItem.quantity + item.quantity,
          totalPrice: cartItem.totalPrice + item.price * item.quantity,
        };
      }

      return cartItem;
    });

    localStorage.setItem("cartItems", JSON.stringify(newItems));
    return newItems;
  });
}

export function removeFromCart(slug: string) {
  cartItems.update((items) => {
    const newItems = items.filter((cartItem) => cartItem.slug !== slug);

    localStorage.setItem("cartItems", JSON.stringify(newItems));
    return newItems;
  });
}
