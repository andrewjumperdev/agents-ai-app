export {};

declare global {
  interface Window {
    fbq: (event: string, params?: Record<string, any>) => void;
  }
}