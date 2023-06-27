module.exports = {
  locales: ["pl", "en"],
  defaultLocale: "pl",
  // locales:
  //   process.env.ALLOW_LOCALE_DETECTION === "true" ? ["en", "pl"] : ["pl"],
  // defaultLocale: "pl",
  pages: {
    "*": ["common", "catalog"],
    "/katalog-firm": ["firms-catalog"],
    "/translate": ["test"],
    "/narzedzia/lista-zadan": ["todo"],
    "/narzedzia/lista-zadan/start": ["todo"],
    "/narzedzia/budzet": ["todo", "budget"],
    "/narzedzia/ulubione-firmy": [
      "todo",
      "my_vendors",
      "my_vendors_category_names",
      "my_vendors_meta_category_names",
      "statuses",
    ],
    "/narzedzia/ulubione-firmy/[categoryId]": [
      "todo",
      "my_vendors",
      "my_vendors_category_names",
      "my_vendors_meta_category_names",
      "statuses",
    ],
    "/regulamin": ["legal_seo"],
    "/polityka-prywatnosci": ["legal_seo"],
    "/polityka-plikow-cookie": ["legal_seo"],

    //dev
    "/system-ui/forms": ["common", "todo"],
  },
  //localeDetection: process.env.ALLOW_LOCALE_DETECTION === "true" ? true : false,
  logBuild: false, //next-tranlate log disable
};
