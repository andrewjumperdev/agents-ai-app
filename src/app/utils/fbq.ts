type FbqEvent = 'PageView' | 'Lead' | 'ViewContent' | 'Purchase' | string;

export const fbq = (event: FbqEvent, params?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    if (params) {
      window.fbq(event, params);
    } else {
      window.fbq(event);
    }
  }
};
