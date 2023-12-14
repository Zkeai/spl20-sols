import { defineUserConfig, defaultTheme } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import { backToTopPlugin } from "@vuepress/plugin-back-to-top";
export default defineUserConfig({
  plugins: [
    searchPlugin({
      locales: {
        "/": {
          placeholder: "Search",
        },
        "/zh/": {
          placeholder: "搜索",
        },
      },
    }),

    //backToTopPlugin(),
  ],
  theme: defaultTheme({
    // Public 文件路径
    logo: "/images/logo.png",

    locales: {
      "/": {
        selectLanguageName: "English",

        sidebar: [
          {
            text: "SOLS",
            link: "/en/sols/",
            children: [
              {
                text: "Split Token",
                link: "/en/sols/split/",
              },
              {
                text: "Trade SOLS",
                link: "/en/sols/trade/",
              },
              {
                text: "Composis NFT",
                link: "/en/sols/composis/",
              },
            ],
          },
          {
            text: "LAMP",
            link: "/en/lamp/",
            children: [
              {
                text: "Split Token",
                link: "/en/lamp/split/",
              },
              {
                text: "Trade SOLS",
                link: "/en/lamp/trade/",
              },
              {
                text: "Composis NFT",
                link: "/en/lamp/composis/",
              },
            ],
          },
        ],
      },
      "/zh/": {
        selectLanguageName: "简体中文",
        sidebar: [
          {
            text: "SOLS",
            link: "/zh/sols/",
            children: [
              {
                text: "交易",
                link: "/zh/sols/交易/",
              },
              // SidebarItem
              {
                text: "拆分代币",
                link: "/zh/sols/拆分/",
              },
              {
                text: "合成NFT",
                link: "/zh/sols/合成/",
              },
            ],
          },
          {
            text: "LAMP",
            link: "/zh/lamp/",
            children: [
              {
                text: "交易",
                link: "/zh/lamp/交易/",
              },
              // SidebarItem
              {
                text: "拆分代币",
                link: "/zh/lamp/拆分/",
              },
              {
                text: "合成NFT",
                link: "/zh/lamp/合成/",
              },
            ],
          },
        ],
      },
    },
  }),
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    "/": {
      lang: "en-US",
      title: "SPL-20",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "SPL-20",
    },
  },
});
