import { imagetools } from "vite-imagetools";
import { enConfig } from "./locales/en";
import { csConfig } from "./locales/cs";
// https://vitepress.dev/reference/site-config
export default {
  lastUpdated: true,
  cleanUrls: true,
  srcDir: "src",
  lang: "cs-CZ",

  locales: {
    root: {
      label: "Čeština",
      lang: "cs-CZ",
      link: "/",
      ...csConfig
    },
    en: {
      label: "English",
      lang: "en-US",
      link: "/en/",
      ...enConfig
    }
  },

  plugins: [imagetools()]
};
