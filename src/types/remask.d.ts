declare module 'remask' {
  export function mask(originalValue: string, patterns: string[]): string;
  export function unMask(maskedValue: string): string;
}
