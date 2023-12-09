export const themeData = JSON.parse("{\"logo\":\"/images/logo.png\",\"locales\":{\"/\":{\"selectLanguageName\":\"English\",\"sidebar\":[{\"text\":\"split\",\"link\":\"/en/split/\"},{\"text\":\"trade\",\"link\":\"/en/trade/\"}]},\"/zh/\":{\"selectLanguageName\":\"简体中文\",\"sidebar\":[{\"text\":\"交易\",\"link\":\"/zh/交易/\"},{\"text\":\"拆分\",\"link\":\"/zh/拆分/\"}]}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"navbar\":[],\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"auto\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
