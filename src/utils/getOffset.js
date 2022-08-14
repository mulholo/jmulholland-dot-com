/**
 * getBoundingClientRect is relative to the viewport, not the window so we
 * use this function to get the window-relative position of an element
 */
export function getOffset(el) {
  const rect = el.getBoundingClientRect()

  return {
    // left: rect.left + window.scrollX,
    top: rect.top + window.scrollY,
  }
}
