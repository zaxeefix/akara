import type { Locale } from "./config";

export const dictionaries: Record<Locale, Record<string, string>> = {
  en: {
    "app.name": "AkaraConnect",
    "nav.home": "Home",
    "nav.marketplace": "Marketplace",
    "nav.nearby": "Nearby",
    "nav.orders": "Orders",
    "nav.profile": "Profile",
    "action.search": "Search",
    "action.login": "Login",
    "action.register": "Register",
    "action.becomeVendor": "Become a vendor",
    "hero.title": "Find trusted local food vendors near you",
    "hero.subtitle": "Order Akara, Pap, Moi Moi, Masa, Kunun, and everyday Nigerian street food from verified vendors.",
    "empty.title": "Nothing here yet",
    "state.loading": "Loading",
    "state.error": "Something went wrong"
  },
  ha: {
    "app.name": "AkaraConnect",
    "nav.home": "Gida",
    "nav.marketplace": "Kasuwa",
    "nav.nearby": "Kusa da ni",
    "nav.orders": "Oda",
    "nav.profile": "Bayanan kai",
    "action.search": "Bincika",
    "action.login": "Shiga",
    "action.register": "Yi rajista"
  },
  yo: {
    "app.name": "AkaraConnect",
    "nav.home": "Ile",
    "nav.marketplace": "Oja",
    "nav.nearby": "Nitosi",
    "nav.orders": "Oda",
    "nav.profile": "Profaili",
    "action.search": "Wa",
    "action.login": "Wole",
    "action.register": "Forukosile"
  },
  ig: {
    "app.name": "AkaraConnect",
    "nav.home": "Ulo",
    "nav.marketplace": "Ahia",
    "nav.nearby": "Nso",
    "nav.orders": "Oda",
    "nav.profile": "Profaịlụ",
    "action.search": "Choo",
    "action.login": "Banye",
    "action.register": "Debanye"
  },
  tiv: {
    "app.name": "AkaraConnect",
    "nav.home": "Home",
    "nav.marketplace": "Market",
    "nav.nearby": "Near me",
    "nav.orders": "Orders",
    "nav.profile": "Profile",
    "action.search": "Search",
    "action.login": "Login",
    "action.register": "Register"
  }
};

export function translate(locale: Locale, key: string) {
  return dictionaries[locale][key] ?? dictionaries.en[key] ?? key;
}
