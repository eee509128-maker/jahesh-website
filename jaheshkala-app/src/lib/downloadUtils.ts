/**
 * Accept only HTTP(S) URLs or same-origin root-relative paths for downloadable files.
 * This prevents unsafe protocols such as javascript: from reaching an href.
 */
export function getSafeDownloadUrl(value: unknown): string | undefined {
  if (typeof value !== 'string') return undefined;

  const trimmed = value.trim();
  if (!trimmed) return undefined;

  const isWebUrl = /^https?:\/\//i.test(trimmed);
  const isRootRelativePath = trimmed.startsWith('/') && !trimmed.startsWith('//');
  if (!isWebUrl && !isRootRelativePath) return undefined;

  try {
    const parsed = new URL(trimmed, 'https://jaheshit.ir');
    if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') return undefined;
    return trimmed;
  } catch {
    return undefined;
  }
}
