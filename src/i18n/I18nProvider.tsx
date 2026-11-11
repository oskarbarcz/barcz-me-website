import {useEffect, useMemo, type ReactNode} from "react";
import {DEFAULT_LANGUAGE, dictionaries, I18nContext, type Language} from "./context.ts";

interface I18nProviderProps {
  language?: Language;
  children: ReactNode;
}

export default function I18nProvider({language = DEFAULT_LANGUAGE, children}: I18nProviderProps) {
  const value = useMemo(() => ({language, t: dictionaries[language]}), [language]);

  // Keep <html lang> in sync, for screen readers, hyphenation and search engines
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
