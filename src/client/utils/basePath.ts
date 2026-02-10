/**
 * Resolves a relative API path against the document's base URI.
 * When a `<base href>` tag is present (e.g. injected by the server for proxy support),
 * `document.baseURI` reflects it, so all API URLs are resolved correctly.
 *
 * @param path - Relative path without a leading slash, e.g. `'api/diff?foo=bar'`
 */
export function apiUrl(path: string): string {
  return new URL(path, document.baseURI).href;
}
