export const track = (data) => {
  typeof window !== 'undefined' &&
    window.gtag('event', 'click', { ...data })
}
