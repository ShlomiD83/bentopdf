/**
 * Limits a list of app language codes to VITE_APP_LANGUAGES (e.g. "en" or
 * "en,de"). English is always kept. Empty or "all" keeps every language.
 */
export function filterAppLanguages(languages) {
  const requested = (process.env.VITE_APP_LANGUAGES || '').trim();
  if (!requested || requested === 'all') return languages;
  const wanted = new Set(
    requested
      .split(',')
      .map((lang) => lang.trim())
      .concat('en')
  );
  return languages.filter((lang) => wanted.has(lang));
}
