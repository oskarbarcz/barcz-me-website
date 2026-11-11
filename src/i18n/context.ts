import {createContext, useContext} from "react";
import pl from "./pl.ts";

/** Shape of every dictionary, taken from the Polish one. */
export type Messages = typeof pl;

/**
 * All available languages. To add English: create `en.ts` exporting a `Messages` object
 * and add it here; TypeScript then reports every missing or extra key.
 */
export const dictionaries = {pl} satisfies Record<string, Messages>;

export type Language = keyof typeof dictionaries;

export const DEFAULT_LANGUAGE: Language = "pl";

export interface I18n {
  language: Language;
  t: Messages;
}

export const I18nContext = createContext<I18n>({language: DEFAULT_LANGUAGE, t: dictionaries[DEFAULT_LANGUAGE]});

/** Texts of the current language: `const {t} = useI18n(); t.hero.lead` */
export default function useI18n() {
  return useContext(I18nContext);
}
