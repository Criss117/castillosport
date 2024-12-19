/**
 * Get element from dom by selector string
 * @example
 * 	const elementClass = $('.my-class')
 * 	const elementId = $('#my-id')
 * @param selector
 * @returns HTMLElement
 */
export const $ = <T extends HTMLElement>(selector: string): T | null => {
  const element = document.querySelector<T>(selector);
  if (!element) {
    return null;
  }
  return element;
};

/**
 * Get elements from dom by selector string
 * @example
 * 	const elements = $$('.my-class')
 * @param selector
 * @returns NodeList
 */
export const $$ = <T extends HTMLElement>(selector: string): T[] | null => {
  const elements = document.querySelectorAll<T>(selector);
  if (!elements) {
    return null;
  }
  return Array.from(elements);
};
