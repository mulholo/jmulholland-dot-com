export const track = (eventName, data) => {
  console.log('tracking')
  if (typeof window === 'undefined') return
  if (!window.gtag) return // for dev
  // https://developers.google.com/analytics/devguides/collection/gtagjs/custom-dims-mets
  window.gtag('event', eventName, { ...data })
}
