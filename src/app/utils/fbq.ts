type FbqEvent = 'PageView' | 'Lead' | 'ViewContent' | 'Purchase' | string;

export const fbq = (eventName: FbqEvent, params?: Record<string, unknown>) => {
  if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
    window.fbq('track', eventName, params ?? {});
  }
};

export {};

declare global {
  interface Window {
    fbq: (method: 'track', eventName: string, params?: Record<string, unknown>) => void;
  }
}
